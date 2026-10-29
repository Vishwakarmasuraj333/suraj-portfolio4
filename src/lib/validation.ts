import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(80, { message: "Name cannot exceed 80 characters." })
    .regex(/^[a-zA-Z\s.'-]+$/, {
      message: "Name can only contain letters, spaces, hyphens, and periods.",
    }),
  email: z
    .string()
    .min(5, { message: "Email is required." })
    .max(120, { message: "Email cannot exceed 120 characters." })
    .email({ message: "Please provide a valid email address." }),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters." })
    .max(120, { message: "Subject cannot exceed 120 characters." }),
  message: z
    .string()
    .min(15, { message: "Message must be at least 15 characters long." })
    .max(2500, { message: "Message cannot exceed 2500 characters." }),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, "") // Strip html tag brackets
    .trim();
}

