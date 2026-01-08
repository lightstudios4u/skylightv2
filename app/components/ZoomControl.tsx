"use client";

import { useEffect } from "react";

export function ZoomControl() {
  useEffect(() => {
    let lastScale = 1;

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        // User is pinching/zooming
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        const distance = Math.hypot(
          touch2.pageX - touch1.pageX,
          touch2.pageY - touch1.pageY
        );

        // Store this for comparison
        lastScale = distance;
      }
    };

    const handleTouchEnd = () => {
      // Small delay to check if user zoomed out
      setTimeout(() => {
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
          // Reset viewport to snap back to 100% when zooming out
          const currentScale = window.visualViewport?.scale || 1;

          if (currentScale < 1) {
            // User zoomed out, snap back
            viewport.setAttribute(
              "content",
              "width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes"
            );

            // Force reflow
            setTimeout(() => {
              window.scrollTo(0, window.scrollY);
            }, 0);
          }
        }
      }, 100);
    };

    document.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return null;
}
