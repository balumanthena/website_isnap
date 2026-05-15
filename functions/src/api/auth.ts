import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as cors from "cors";
import { sendEmail } from "../services/mailService";
import { getOtpEmailTemplate } from "../templates/emailTemplates";

const corsHandler = cors({ origin: true });

// OTP Expiry in minutes
const OTP_EXPIRY_MINUTES = 5;

/**
 * Generates and sends an OTP to the user's email.
 */
export const sendOtp = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    if (req.method !== "POST") {
      res.status(405).json({ success: false, message: "Method Not Allowed" });
      return;
    }

    const { email } = req.body;

    if (!email) {
      res.status(400).json({ success: false, message: "Email is required" });
      return;
    }

    try {
      // Generate a 6-digit OTP
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      const expiresAt = admin.firestore.Timestamp.fromDate(
        new Date(Date.now() + OTP_EXPIRY_MINUTES * 60000)
      );

      // Store OTP in Firestore
      await admin.firestore().collection("otps").doc(email).set({
        otp,
        expiresAt,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      // Send OTP via Email
      const html = getOtpEmailTemplate(otp, OTP_EXPIRY_MINUTES);
      await sendEmail({
        to: email,
        subject: `[SECURITY] ${otp} is your ISNAP verification code`,
        html,
      });

      res.status(200).json({ 
        success: true, 
        message: "OTP sent successfully",
        expiresIn: OTP_EXPIRY_MINUTES 
      });
    } catch (error) {
      console.error("[SEND_OTP_ERROR]", error);
      res.status(500).json({ success: false, message: "Failed to send OTP" });
    }
  });
});

/**
 * Verifies the OTP provided by the user.
 */
export const verifyOtp = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    if (req.method !== "POST") {
      res.status(405).json({ success: false, message: "Method Not Allowed" });
      return;
    }

    const { email, otp } = req.body;

    if (!email || !otp) {
      res.status(400).json({ success: false, message: "Email and OTP are required" });
      return;
    }

    try {
      const otpDoc = await admin.firestore().collection("otps").doc(email).get();

      if (!otpDoc.exists) {
        res.status(404).json({ success: false, message: "No OTP found for this email" });
        return;
      }

      const data = otpDoc.data();
      const now = admin.firestore.Timestamp.now();

      if (data?.otp !== otp) {
        res.status(400).json({ success: false, message: "Invalid verification code" });
        return;
      }

      if (now.seconds > data?.expiresAt.seconds) {
        res.status(400).json({ success: false, message: "Verification code has expired" });
        return;
      }

      // OTP is valid, delete it so it can't be reused
      await admin.firestore().collection("otps").doc(email).delete();

      res.status(200).json({ 
        success: true, 
        message: "OTP verified successfully" 
      });
    } catch (error) {
      console.error("[VERIFY_OTP_ERROR]", error);
      res.status(500).json({ success: false, message: "Verification failed" });
    }
  });
});
