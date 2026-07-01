"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { GTM_ID } from "@/lib/config/site";

const GoogleTagManager = dynamic(
  () =>
    import("@next/third-parties/google").then(
      (mod) => mod.GoogleTagManager
    ),
  { ssr: false }
);

export default function LazyAnalytics() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const trigger = () => setLoad(true);

    window.addEventListener("scroll", trigger, { once: true });
    window.addEventListener("mousemove", trigger, { once: true });
    window.addEventListener("touchstart", trigger, { once: true });

    return () => {
      window.removeEventListener("scroll", trigger);
      window.removeEventListener("mousemove", trigger);
      window.removeEventListener("touchstart", trigger);
    };
  }, []);

  // Global event delegation listener for tracking clicks
  useEffect(() => {
    if (!load) return;

    const handleGlobalClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // Traverse up to find the closest element with a data-track-click attribute
      const trackingElement = target.closest("[data-track-click]");
      if (trackingElement) {
        const eventName = trackingElement.getAttribute("data-track-click");
        const category = trackingElement.getAttribute("data-track-category") || undefined;
        const label = trackingElement.getAttribute("data-track-label") || undefined;
        const value = trackingElement.getAttribute("data-track-value") || undefined;

        if (eventName) {
          // Dynamic import of GTM helper function to ensure lazy performance
          import("@next/third-parties/google").then(({ sendGTMEvent }) => {
            const payload = {
              event: eventName,
              event_category: category,
              event_label: label,
              value: value,
            };
            
            // Send event to GTM dataLayer
            sendGTMEvent(payload);

            // Log local debug details in development
            if (process.env.NODE_ENV === "development") {
              console.log("[Analytics GTM] Tracked Click:", payload);
            }
          });
        }
      }
    };

    document.addEventListener("click", handleGlobalClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleGlobalClick, { capture: true });
    };
  }, [load]);

  if (!load) return null;

  return (
    <>
      <GoogleTagManager gtmId={GTM_ID} />
    </>
  );
}