"use client";
import { useEffect } from "react";

export default function HideNextDevTools() {
  useEffect(() => {
    const hide = () => {
      // Remove all known dev tools badges/logos
      const logo = document.querySelector('[data-nextjs-dev-tools-button]');
      const badge = document.querySelector('[data-next-badge-root]');
      logo?.remove();
      badge?.remove();

      // Also handle nested shadow roots
      document.querySelectorAll('*').forEach((el) => {
        const shadow = (el as HTMLElement).shadowRoot;
        if (shadow) {
          const innerLogo = shadow.querySelector('[data-nextjs-dev-tools-button]');
          const innerBadge = shadow.querySelector('[data-next-badge-root]');
          innerLogo?.remove();
          innerBadge?.remove();
        }
      });
    };

    // Run once and keep observing for re-injection
    hide();
    const observer = new MutationObserver(hide);
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
