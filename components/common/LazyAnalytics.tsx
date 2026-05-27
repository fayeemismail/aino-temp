"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const GoogleAnalytics = dynamic(
  () =>
    import("@next/third-parties/google").then(
      (mod) => mod.GoogleAnalytics
    ),
  { ssr: false }
);

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

  if (!load) return null;

  return (
    <>
      <GoogleTagManager gtmId="GTM-MHDFDVJT" />
      <GoogleAnalytics gaId="G-N9JEHEQ812" />
    </>
  );
}