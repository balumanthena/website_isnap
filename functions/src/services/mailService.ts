import * as nodemailer from "nodemailer";

// Initialize the Nodemailer transporter using environment variables
// This uses singleton pattern so the transporter is reused across function invocations
// to minimize cold start delays.
export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify connection configuration (for debugging during deployment)
transporter.verify((error, success) => {
  if (error) {
    console.error("[SMTP_CONNECTION_ERROR]", error);
  } else {
    console.log("[SMTP_CONNECTION_SUCCESS] Server is ready to take our messages");
  }
});

interface SendMailParams {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

/**
 * Reusable mail service for sending emails
 */
export async function sendEmail({ to, subject, html, replyTo }: SendMailParams) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error("[SMTP_AUTH_ERROR] Missing SMTP credentials in environment");
    throw new Error("SMTP credentials are not configured");
  }

  const mailOptions = {
    from: `"ISNAP Enterprise" <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
    replyTo,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("[EMAIL_SENT]", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("[EMAIL_SEND_ERROR]", error);
    throw error;
  }
}
