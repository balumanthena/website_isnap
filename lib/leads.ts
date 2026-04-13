import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

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

export async function addLead(data: LeadInput) {
  const docRef = await addDoc(collection(db, "leads"), {
    ...data,
    createdAt: serverTimestamp()
  });

  return docRef.id;
}
