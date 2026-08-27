"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function normalizePath(path: string) {
  const clean = (path.split("#")[0] || "/").replace(/\/$/, "") || "/";
  if (clean === "/legal-disclaimer") return "/terms-conditions";
  return clean;
}

export function SamePageScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;
      if (anchor.target && anchor.target !== "_self") return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) return;

      try {
        const url = new URL(href, window.location.origin);
        if (url.origin !== window.location.origin) return;
        if (url.hash && url.hash !== "#" && url.hash !== "#top") return;
        if (normalizePath(url.pathname) !== normalizePath(pathname)) return;

        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch {
        // Ignore malformed hrefs
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname]);

  return null;
}
