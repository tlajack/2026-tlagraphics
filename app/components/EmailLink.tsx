"use client";

import { useEffect, useState } from "react";

interface EmailLinkProps {
  email: string;
  className?: string;
}

// Renders the email link only on the client so the address never appears in
// server-rendered HTML. This prevents Cloudflare's Email Address Obfuscation
// from detecting it and injecting email-decode.min.js into the critical path.
export default function EmailLink({ email, className }: EmailLinkProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <a href="/contact" className={className}>
        Email us
      </a>
    );
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  );
}
