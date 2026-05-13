export type AnalyticsEventPayload = Record<string, string | number | boolean>;

import { analytics } from "@/lib/firebase";
import { logEvent } from "firebase/analytics";

export function trackEvent(eventName: string, payload: AnalyticsEventPayload = {}) {
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.info("[analytics:event]", eventName, payload);
    return;
  }

  if (typeof window !== "undefined" && analytics) {
    logEvent(analytics, eventName, payload);
  }
}
