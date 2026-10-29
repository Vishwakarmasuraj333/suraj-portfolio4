"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormInput } from "@/lib/validation";
import { SectionHeading } from "../ui/SectionHeading";
import { siteConfig } from "@/lib/site-config";
import confetti from "canvas-confetti";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertTriangle,
  Github,
  Linkedin,
  MapPin,
  Loader2,
  Sparkles,
} from "lucide-react";
import { Button } from "../ui/Button";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
    emailDispatched?: boolean;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormInput) => {
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resJson = await response.json();

      if (response.ok && resJson.success) {
        setSubmitResult({
          success: true,
          message: resJson.message,
          emailDispatched: resJson.emailDispatched,
        });
        reset();

        // Celebration confetti
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.8 },
            colors: ["#D6B477", "#E8D2A1", "#7D293F"],
          });
        } catch {
          // ignore
        }
      } else {
        setSubmitResult({
          success: false,
          message:
            resJson.error ||
            "Unable to submit message. Please try again or connect via LinkedIn.",
        });
      }
    } catch {
      setSubmitResult({
        success: false,
        message:
          "Network connectivity error. Please verify your connection or message directly on LinkedIn.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Direct Inquiry"
          title="Let's Build Together"
          subtitle="Open for full-stack engineering opportunities, distributed system collaborations, and technical discussions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Professional Profile */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-maroon-900/80 to-maroon-950 border border-gold-500/25 shadow-xl shadow-maroon-950/50">
              <h3 className="font-serif text-2xl font-normal text-ivory-100 mb-2">
                Connect Directly
              </h3>
              <p className="text-xs sm:text-sm text-ivory-300/80 leading-relaxed font-light mb-8">
                Whether you are a recruiter discussing a full-time role, a collaborator exploring AI telemetry architectures, or seeking technical advisory, I would be delighted to hear from you.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-maroon-900/40 border border-gold-500/15">
                  <div className="p-2.5 rounded-lg bg-gold-500/10 text-gold-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-gold-500/80 block">
                      Location
                    </span>
                    <span className="text-sm text-ivory-200">
                      {siteConfig.location}
                    </span>
                  </div>
                </div>

                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-maroon-900/40 hover:bg-maroon-900/70 border border-gold-500/15 hover:border-gold-500/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-gold-500/10 text-gold-400 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-gold-500/80 block">
                      LinkedIn Network
                    </span>
                    <span className="text-sm text-ivory-200 group-hover:text-gold-300 transition-colors">
                      suraj-vishwakarma-2ab64436a
                    </span>
                  </div>
                </a>

                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-maroon-900/40 hover:bg-maroon-900/70 border border-gold-500/15 hover:border-gold-500/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-gold-500/10 text-gold-400 group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-gold-500/80 block">
                      GitHub Repositories
                    </span>
                    <span className="text-sm text-ivory-200 group-hover:text-gold-300 transition-colors">
                      Vishwakarmasuraj333
                    </span>
                  </div>
                </a>
              </div>

              {/* Status Note */}
              <div className="mt-8 pt-6 border-t border-gold-500/15 flex items-center gap-2 text-xs text-gold-400 font-mono">
                <Sparkles className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Response expected within 24 business hours.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-maroon-900/90 via-maroon-900/70 to-maroon-950 border border-gold-500/30 shadow-2xl shadow-maroon-950/60">
              {submitResult?.success ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-normal text-ivory-100">
                    Message Dispatched Successfully
                  </h4>
                  <p className="text-sm text-ivory-300 max-w-md leading-relaxed">
                    {submitResult.message}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSubmitResult(null)}
                    className="mt-4"
                  >
                    Send Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  {/* Honeypot anti-spam field */}
                  <input
                    type="text"
                    name="_hp_field"
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Submission Error Banner */}
                  {submitResult && !submitResult.success && (
                    <div className="p-4 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-200 text-xs flex items-start gap-2.5">
                      <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Submission Notice</p>
                        <p className="mt-0.5">{submitResult.message}</p>
                      </div>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono uppercase tracking-wider text-gold-400 mb-2"
                      >
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register("name")}
                        disabled={isSubmitting}
                        placeholder="e.g. Eleanor Vance"
                        className={`w-full px-4 py-3 rounded-xl bg-maroon-950/80 border text-ivory-100 placeholder:text-ivory-300/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all ${
                          errors.name
                            ? "border-rose-500/60"
                            : "border-gold-500/25 focus:border-gold-500"
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-rose-400">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono uppercase tracking-wider text-gold-400 mb-2"
                      >
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email")}
                        disabled={isSubmitting}
                        placeholder="name@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-maroon-950/80 border text-ivory-100 placeholder:text-ivory-300/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all ${
                          errors.email
                            ? "border-rose-500/60"
                            : "border-gold-500/25 focus:border-gold-500"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-rose-400">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-mono uppercase tracking-wider text-gold-400 mb-2"
                    >
                      Subject <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      {...register("subject")}
                      disabled={isSubmitting}
                      placeholder="e.g. Full Stack Engineering Opportunity"
                      className={`w-full px-4 py-3 rounded-xl bg-maroon-950/80 border text-ivory-100 placeholder:text-ivory-300/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all ${
                        errors.subject
                          ? "border-rose-500/60"
                          : "border-gold-500/25 focus:border-gold-500"
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1.5 text-xs text-rose-400">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono uppercase tracking-wider text-gold-400 mb-2"
                    >
                      Your Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register("message")}
                      disabled={isSubmitting}
                      placeholder="Please share details about your team, project requirements, or opportunity..."
                      className={`w-full px-4 py-3 rounded-xl bg-maroon-950/80 border text-ivory-100 placeholder:text-ivory-300/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all resize-none ${
                        errors.message
                          ? "border-rose-500/60"
                          : "border-gold-500/25 focus:border-gold-500"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-rose-400">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting Securely...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

