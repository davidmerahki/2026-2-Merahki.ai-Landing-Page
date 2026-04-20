'use client';

import { useEffect, useRef } from 'react';

export default function ClientifyForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && !containerRef.current.querySelector('script')) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://api.clientify.net/web-marketing/superforms/script/264806.js';
      script.async = true;
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-lg mx-auto p-4 bg-white rounded-xl shadow-sm border border-gray-100 min-h-[400px]"
    />
  );
}
