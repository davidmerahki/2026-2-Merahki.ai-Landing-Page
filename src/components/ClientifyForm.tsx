"use client";
import Script from "next/script";

export default function ClientifyForm() {
  return (
    <div className="p-6">
      <Script
        src="https://js.hsforms.net/forms/embed/51381899.js"
        strategy="afterInteractive"
      />
      <div
        className="hs-form-frame"
        data-region="na1"
        data-form-id="68a587ca-28b2-4fb2-a25b-62d2df74281b"
        data-portal-id="51381899"
      />
    </div>
  );
}
