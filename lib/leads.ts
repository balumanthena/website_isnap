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
  try {
    // Determine the API URL based on environment
    // For production, ensure NEXT_PUBLIC_API_URL is set to the Cloud Function URL
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 
                   (process.env.NODE_ENV === 'development' 
                     ? 'http://127.0.0.1:5001/isnapwebsite-71163/us-central1/submitContact' 
                     : 'https://us-central1-isnapwebsite-71163.cloudfunctions.net/submitContact');

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to submit contact form");
    }

    const result = await response.json();
    
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.info("[lead:captured]", result.id);
    }
    
    return result.id;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("[lead:error]", error);
    throw error;
  }
}
