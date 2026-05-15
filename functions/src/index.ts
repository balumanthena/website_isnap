import * as admin from "firebase-admin";

// Initialize Firebase Admin globally
admin.initializeApp();

// Export all functions
export * from "./api/contact";
export * from "./api/auth";
