import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as cors from "cors";
import { sendEmail } from "../services/mailService";
import { getAdminNotificationTemplate, getUserAutoReplyTemplate } from "../templates/emailTemplates";

// Configure CORS for the API endpoint
const corsHandler = cors({ origin: true });

export const submitContact = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    // Only allow POST requests
    if (req.method !== "POST") {
      res.status(405).json({ success: false, message: "Method Not Allowed" });
      return;
    }

    try {
      const data = req.body;
      const { fullName, companyName, phone, email, platformInterest, message, source } = data;

      // Basic validation
      if (!fullName || !email || !message) {
        res.status(400).json({ success: false, message: "Missing required fields" });
        return;
      }

      // Add IP and Timestamp
      const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress || "Unknown";
      const timestamp = new Date().toISOString();
      const leadData = {
        fullName,
        companyName: companyName || "N/A",
        phone: phone || "N/A",
        email,
        platformInterest: platformInterest || [],
        message,
        source: source || "api_endpoint",
        ip: Array.isArray(ip) ? ip[0] : ip,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      };

      // 1. Save to Firestore
      const docRef = await admin.firestore().collection("leads").add(leadData);

      // 2. Send Emails
      const adminEmail = process.env.ADMIN_EMAIL || "admin@isnap.in";
      
      // Admin Notification
      const adminHtml = getAdminNotificationTemplate(leadData as any, timestamp);
      const adminEmailPromise = sendEmail({
        to: adminEmail,
        subject: `[NEW LEAD] ${fullName} - ${companyName || "Contact Form"}`,
        html: adminHtml,
        replyTo: email,
      }).catch(err => console.error("[ADMIN_EMAIL_ERROR]", err));

      // User Auto-Reply
      const userHtml = getUserAutoReplyTemplate(leadData as any);
      const userEmailPromise = sendEmail({
        to: email,
        subject: "Message Received - ISNAP Enterprise",
        html: userHtml,
      }).catch(err => console.error("[USER_EMAIL_ERROR]", err));

      // Wait for emails to be sent (or fail gracefully without crashing the request)
      await Promise.allSettled([adminEmailPromise, userEmailPromise]);

      res.status(200).json({ 
        success: true, 
        message: "Contact form submitted successfully",
        id: docRef.id
      });
    } catch (error) {
      console.error("[SUBMIT_CONTACT_ERROR]", error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  });
});
