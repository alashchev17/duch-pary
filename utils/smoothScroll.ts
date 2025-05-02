// Utility for smooth scrolling to anchor links
import React from "react";

export function smoothScrollToAnchor(
  e: React.MouseEvent<HTMLElement, MouseEvent>,
  href: string,
  closeMenu?: () => void,
  duration: number = 800, // duration in ms, adjust as needed
) {
  console.log("triggered");
  if (href.startsWith("#")) {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      const startY = window.scrollY;
      const endY = el.getBoundingClientRect().top + window.scrollY;
      const distance = endY - startY;
      let startTime: number | null = null;

      function step(currentTime: number) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        // Ease in-out function
        const ease =
          progress < 0.5
            ? 2 * progress * progress
            : -1 + (4 - 2 * progress) * progress;

        window.scrollTo(0, startY + distance * ease);

        if (closeMenu) closeMenu();
        if (timeElapsed < duration) {
          window.requestAnimationFrame(step);
        } else {
        }
      }

      window.requestAnimationFrame(step);
    }
  }
}
