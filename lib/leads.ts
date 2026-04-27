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
  /**
   * Firebase is intentionally disabled for now.
   * Keep the same async contract so UI flow remains unchanged.
   */
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.info("[lead:capture:disabled]", data);
  }
  return `lead_${Date.now()}`;
}
