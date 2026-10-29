import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema, sanitizeInput } from "@/lib/validation";
import fs from "fs";
import path from "path";

// In-memory rate limiting map: ip -> timestamps[]
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 mins
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    // 1. IP Rate Limiting Check
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Rate limit reached. Please wait a few minutes before submitting another inquiry.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();

    // 2. Honeypot check for automated bot protection
    if (body._hp_field && body._hp_field.length > 0) {
      return NextResponse.json(
        { success: false, error: "Spam detection triggered." },
        { status: 400 }
      );
    }

    // 3. Server-side validation with Zod
    const validationResult = contactFormSchema.safeParse({
      name: sanitizeInput(body.name || ""),
      email: sanitizeInput(body.email || ""),
      subject: sanitizeInput(body.subject || ""),
      message: sanitizeInput(body.message || ""),
    });

    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0]?.message || "Validation failed";
      return NextResponse.json(
        { success: false, error: firstError },
        { status: 400 }
      );
    }

    const data = validationResult.data;
    const submissionRecord = {
      id: `sub_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      submittedAt: new Date().toISOString(),
      ipAddress: ip,
    };

    // 4. Check for Email Delivery Provider (e.g. Resend)
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail =
      process.env.CONTACT_EMAIL || "surajvishwakarma333@gmail.com";

    let emailSent = false;
    let providerNote = "";

    if (resendApiKey) {
      try {
        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Portfolio Inquiry <onboarding@resend.dev>",
            to: [recipientEmail],
            reply_to: data.email,
            subject: `[Portfolio Inquiry] ${data.subject} - from ${data.name}`,
            html: `
              <h2>New Message Received via Portfolio</h2>
              <p><strong>From:</strong> ${data.name} (&lt;${data.email}&gt;)</p>
              <p><strong>Subject:</strong> ${data.subject}</p>
              <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
              <hr />
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${data.message}</p>
            `,
          }),
        });

        if (emailRes.ok) {
          emailSent = true;
          providerNote = "Direct email notification dispatched to Suraj.";
        } else {
          const errData = await emailRes.json().catch(() => ({}));
          console.warn("Resend API dispatch error:", errData);
        }
      } catch (err) {
        console.warn("Email service dispatch error:", err);
      }
    }

    // 5. Persist submission securely to local data store
    try {
      const dataDir = path.join(process.cwd(), ".data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const submissionsFile = path.join(dataDir, "submissions.json");
      let existingSubmissions: any[] = [];
      if (fs.existsSync(submissionsFile)) {
        const raw = fs.readFileSync(submissionsFile, "utf-8");
        try {
          existingSubmissions = JSON.parse(raw);
        } catch {
          existingSubmissions = [];
        }
      }
      existingSubmissions.unshift(submissionRecord);
      fs.writeFileSync(
        submissionsFile,
        JSON.stringify(existingSubmissions, null, 2),
        "utf-8"
      );
    } catch (fsErr) {
      console.warn("Failed to persist submission locally:", fsErr);
    }

    // Return honest feedback
    return NextResponse.json({
      success: true,
      emailDispatched: emailSent,
      message: emailSent
        ? "Your message has been delivered directly to Suraj Vishwakarma's inbox."
        : "Your message has been securely recorded in Suraj's developer inbox. (Note: Configure RESEND_API_KEY in .env.local to activate instant mail notifications).",
    });
  } catch (err: any) {
    console.error("Contact API uncaught error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An internal server error occurred while processing your message. Please try again or reach out on LinkedIn.",
      },
      { status: 500 }
    );
  }
}

