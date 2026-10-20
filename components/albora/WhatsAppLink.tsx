"use client";

import { track } from "@vercel/analytics";
import type { AnchorHTMLAttributes } from "react";

export default function WhatsAppLink({
  location,
  onClick,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { location: string }) {
  return (
    <a
      {...props}
      onClick={(e) => {
        track("wa_click", { location });
        onClick?.(e);
      }}
    />
  );
}
