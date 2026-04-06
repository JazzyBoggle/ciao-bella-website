"use client";

import { useRef, useCallback, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";

const PATHS = [
  "M 50 50 C 60 30, 80 25, 85 50 C 90 75, 70 90, 50 85 C 25 80, 10 60, 15 40 C 20 15, 45 5, 65 10 C 95 15, 105 45, 100 70 C 95 100, 60 110, 30 105 C -5 100, -15 65, -10 35 C -5 0, 30 -10, 60 -5 C 100 -5, 115 35, 110 70",
  "M 50 50 C 40 35, 55 20, 70 30 C 85 40, 80 65, 65 70 C 45 78, 30 60, 35 42 C 38 25, 58 15, 75 25 C 95 35, 92 70, 72 82 C 48 95, 20 78, 18 52 C 15 25, 38 5, 65 8 C 98 12, 108 48, 102 78",
  "M 50 50 C 55 42, 62 45, 60 55 C 58 65, 45 65, 42 55 C 38 43, 48 35, 58 38 C 70 42, 72 60, 62 70 C 50 80, 32 72, 28 58 C 24 40, 38 28, 55 28 C 75 28, 84 48, 80 65",
];

const ROUTE_COLORS: Record<string, string> = {
  "/": "#6297d6",        // blue
  "/about": "#dc9380",   // coral
  "/the-phone": "#8db5b0", // teal
  "/faqs": "#f5b675",    // orange
  "/waitlist": "#6297d6", // blue
};

function getColorForRoute(href: string): string {
  return ROUTE_COLORS[href] || "#6297d6";
}

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const overlayRef = useRef<SVGSVGElement>(null);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const bgRef = useRef<SVGRectElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const isAnimating = useRef(false);
  const pendingHref = useRef<string | null>(null);

  useEffect(() => {
    pathRefs.current.forEach((path) => {
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          strokeWidth: "5%",
        });
      }
    });
  }, []);

  const animateIn = useCallback(() => {
    if (!overlayRef.current || !bgRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
        gsap.set(overlayRef.current, { display: "none", pointerEvents: "none" });
      },
    });

    // Instant fade out blue bg
    tl.to(bgRef.current, { opacity: 0, duration: 0.1, ease: "none" }, 0);

    // Fast reveal — peel paths away
    pathRefs.current.forEach((path, i) => {
      if (path) {
        const length = path.getTotalLength();
        tl.set(path, {
          strokeDasharray: length,
          strokeDashoffset: 0,
          strokeWidth: "40%",
        }, 0);
        tl.to(
          path,
          {
            strokeDashoffset: -length,
            strokeWidth: "3%",
            duration: 0.65,
            ease: "power2.inOut",
          },
          i * 0.06
        );
      }
    });
  }, []);

  const animateOut = useCallback(
    (href: string) => {
      if (!overlayRef.current || !bgRef.current || isAnimating.current) return;
      isAnimating.current = true;
      pendingHref.current = href;

      // Set colour based on destination
      const color = getColorForRoute(href);
      if (bgRef.current) bgRef.current.setAttribute("fill", color);
      pathRefs.current.forEach((path) => {
        if (path) path.setAttribute("stroke", color);
      });

      // Prefetch the page so it's ready when we navigate
      router.prefetch(href);

      const tl = gsap.timeline({
        onComplete: () => {
          // Exit done — navigate now
          router.push(href);
        },
      });

      tl.set(overlayRef.current, { display: "block", pointerEvents: "all" })
        .set(bgRef.current, { opacity: 0 });

      // Reset all paths
      pathRefs.current.forEach((path) => {
        if (path) {
          const length = path.getTotalLength();
          tl.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
            strokeWidth: "3%",
          }, 0);
        }
      });

      // Draw paths — smooth ease in
      pathRefs.current.forEach((path, i) => {
        if (path) {
          const length = path.getTotalLength();
          tl.to(
            path,
            {
              strokeDashoffset: length * 0.1,
              duration: 0.8,
              ease: "power2.inOut",
            },
            0.04 + i * 0.08
          );
          tl.to(
            path,
            {
              strokeWidth: "40%",
              duration: 0.6,
              ease: "power2.inOut",
            },
            `<+0.1`
          );
        }
      });

      // Bg fills last
      tl.to(bgRef.current, {
        opacity: 1,
        duration: 0.15,
        ease: "power2.inOut",
      }, "-=0.1");
    },
    [router]
  );

  useEffect(() => {
    // Only reveal if we navigated via our transition (not on initial load)
    if (pendingHref.current) {
      pendingHref.current = null;
      // Wait one frame for React to paint the new page
      requestAnimationFrame(() => {
        animateIn();
      });
    }
  }, [pathname, animateIn]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href) return;
      if (href.startsWith("/") && href !== pathname) {
        e.preventDefault();
        animateOut(href);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname, animateOut]);

  return (
    <>
      {children}
      <svg
        ref={overlayRef}
        className="fixed inset-0 w-full h-full z-[9999]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        overflow="hidden"
        style={{ display: "none", pointerEvents: "none" }}
      >
        <rect
          ref={bgRef}
          x="0" y="0" width="100" height="100"
          fill="#6297d6"
          opacity="0"
        />
        {PATHS.map((d, i) => (
          <path
            key={i}
            ref={(el) => { pathRefs.current[i] = el; }}
            d={d}
            fill="none"
            stroke="#6297d6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </svg>
    </>
  );
}
