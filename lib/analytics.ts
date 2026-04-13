export type AnalyticsEventPayload = Record<string, string | number | boolean>;

export function trackEvent(eventName: string, payload: AnalyticsEventPayload = {}) {
  if (process.env.NODE_ENV !== "production") {
    return;
  }

  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("isnap:analytics", {
        detail: {
          eventName,
          payload
        }
      })
    );
  }
}
