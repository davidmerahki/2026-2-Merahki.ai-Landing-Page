"use client";
import { useEffect, useRef } from "react";

export default function HubSpotForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create the target div for HubSpot
    const formDiv = document.createElement("div");
    formDiv.className = "hs-form-frame";
    formDiv.setAttribute("data-region", "na1");
    formDiv.setAttribute("data-form-id", "68a587ca-28b2-4fb2-a25b-62d2df74281b");
    formDiv.setAttribute("data-portal-id", "51381899");
    container.appendChild(formDiv);

    // Load (or re-load) the HubSpot embed script so it picks up the new div
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/51381899.js";
    script.async = true;
    script.defer = true;
    container.appendChild(script);

    return () => {
      // Cleanup on unmount to avoid duplicates
      container.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} className="p-6" />;
}
