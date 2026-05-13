export const PLATFORM_OPTIONS = [
  "Amazon",
  "Flipkart",
  "Walmart",
  "JioMart",
  "Meesho",
  "Own D2C"
] as const;

export type PlatformInterest = (typeof PLATFORM_OPTIONS)[number];

export interface LeadInput {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  platformInterest: PlatformInterest[];
  message: string;
  source: "contact_page";
}

import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function addLead(data: LeadInput) {
  try {
    const docRef = await addDoc(collection(db, "leads"), {
      ...data,
      createdAt: serverTimestamp(),
    });
    
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.info("[lead:captured]", docRef.id);
    }
    
    return docRef.id;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("[lead:error]", error);
    throw error;
  }
}
