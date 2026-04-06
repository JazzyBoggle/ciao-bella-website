"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
          isTablet: "(min-width: 768px) and (max-width: 1023px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          const { isDesktop } = context.conditions!;

          // ═══════════════════════════════════════════════════
          // HERO — Cinematic entrance sequence
          // ═══════════════════════════════════════════════════

          const heroTl = gsap.timeline({ delay: 0.05 });

          // Words cascade — fast stagger
          const heroWords = container.querySelectorAll(
            "[data-animate='hero-word']"
          );
          if (heroWords.length) {
            gsap.set(heroWords, {
              y: 50,
              opacity: 0,
              rotateX: 60,
              transformOrigin: "center bottom",
            });
            heroTl.to(heroWords, {
              y: 0,
              opacity: 1,
              rotateX: 0,
              duration: 0.5,
              ease: "power4.out",
              stagger: 0.03,
            });
          }

          // Badge + subtitle + CTA all come in together
          const heroText = container.querySelector(
            "[data-animate='hero-text']"
          );
          const heroCta = container.querySelector(
            "[data-animate='hero-cta']"
          );
          if (heroText) {
            const badge = heroText.querySelector("span");
            const subtitle = heroText.querySelector("p");
            if (badge) {
              gsap.set(badge, { y: 15, opacity: 0, scale: 0.9 });
              heroTl.to(badge, {
                y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "back.out(2)",
              }, "-=0.2");
            }
            if (subtitle) {
              gsap.set(subtitle, { y: 15, opacity: 0 });
              heroTl.to(subtitle, {
                y: 0, opacity: 1, duration: 0.4, ease: "power2.out",
              }, "-=0.3");
            }
          }
          if (heroCta) {
            gsap.set(heroCta, { y: 20, opacity: 0, scale: 0.9 });
            heroTl.to(heroCta, {
              y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)",
            }, "-=0.3");
          }

          // Doodles — pop in with overshoot then float forever
          const doodles = container.querySelectorAll(
            "[data-animate='doodle']"
          );
          doodles.forEach((doodle, i) => {
            gsap.set(doodle, { opacity: 0, scale: 0, rotation: -30 + i * 60 });
            heroTl.to(
              doodle,
              {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 0.5,
                ease: "back.out(3)",
              },
              0.15 + i * 0.1
            );

            // Infinite gentle float
            gsap.to(doodle, {
              y: i % 2 === 0 ? -15 : 15,
              rotation: i % 2 === 0 ? 8 : -8,
              duration: 2.5 + i * 0.7,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
              delay: 1.2,
            });

            // Scroll parallax drift
            gsap.to(doodle, {
              y: i % 2 === 0 ? -100 : -60,
              rotation: i % 2 === 0 ? 25 : -20,
              opacity: 0,
              ease: "none",
              scrollTrigger: {
                trigger: "[data-animate='hero-section']",
                start: "20% top",
                end: "bottom top",
                scrub: true,
              },
            });
          });

          // ═══════════════════════════════════════════════════
          // HERO PHOTOS — Layered parallax depth
          // ═══════════════════════════════════════════════════

          if (isDesktop) {
            const speedEls = container.querySelectorAll("[data-speed]");
            speedEls.forEach((el) => {
              const speed =
                parseFloat((el as HTMLElement).dataset.speed || "1") - 1;
              gsap.to(el, {
                y: speed * 200,
                ease: "none",
                scrollTrigger: {
                  trigger: "[data-animate='hero-photos']",
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              });
            });
          }

          // ═══════════════════════════════════════════════════
          // VIDEO CARD — Pin + Scale (the snap effect)
          // Page stops, video scales up, then releases
          // ═══════════════════════════════════════════════════

          const videoCard = container.querySelector(
            "[data-animate='video-card']"
          ) as HTMLElement | null;
          const heroSection = container.querySelector(
            "[data-animate='hero-section']"
          ) as HTMLElement | null;
          const heroPhotos = container.querySelector(
            "[data-animate='hero-photos']"
          ) as HTMLElement | null;

          if (videoCard && heroSection && heroPhotos) {
            // Calculate how much to scale to fill viewport
            const rect = videoCard.getBoundingClientRect();
            const scaleX = window.innerWidth / rect.width;
            const scaleY = window.innerHeight / rect.height;
            const fillScale = Math.max(scaleX, scaleY) * 1.05;

            // Play video only when scale animation begins
            const videoEl = container.querySelector(
              "[data-animate='hero-video']"
            ) as HTMLVideoElement | null;
            let videoStarted = false;

            const videoTl = gsap.timeline({
              scrollTrigger: {
                trigger: heroPhotos,
                start: "center center",
                end: "+=100%",
                pin: heroSection,
                scrub: 1,
                pinSpacing: true,
                onEnter: () => {
                  if (videoEl && !videoStarted) {
                    videoEl.play();
                    videoStarted = true;
                  }
                },
              },
            });

            // Fade out everything except video
            const heroFades = container.querySelectorAll(
              "[data-animate='hero-fade']"
            );
            videoTl.to(
              heroFades,
              { opacity: 0, scale: 0.8, duration: 0.3, stagger: 0.05 },
              0
            );

            // Scale video to fill + remove border radius
            videoTl.to(
              videoCard,
              {
                scale: fillScale,
                borderRadius: "0px",
                zIndex: 50,
                duration: 0.5,
                ease: "power2.inOut",
              },
              0.1
            );

            // Hold at full size — page scrolls on from here
            videoTl.to({}, { duration: 0.3 });
          }

          // ═══════════════════════════════════════════════════
          // SECTION HEADINGS — Smooth clip reveal
          // ═══════════════════════════════════════════════════

          const headings = container.querySelectorAll(
            "[data-animate='section-heading']"
          );
          headings.forEach((heading) => {
            gsap.fromTo(
              heading,
              {
                y: 60,
                opacity: 0,
                clipPath: "inset(100% 0% 0% 0%)",
              },
              {
                y: 0,
                opacity: 1,
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                  trigger: heading,
                  start: "top 88%",
                  toggleActions: "play none none none",
                },
              }
            );
          });

          // ═══════════════════════════════════════════════════
          // STEP CARDS — Staggered 3D rise
          // ═══════════════════════════════════════════════════

          const stepCards = container.querySelectorAll(
            "[data-animate='step-card']"
          );
          if (stepCards.length) {
            gsap.fromTo(
              stepCards,
              {
                y: 120,
                opacity: 0,
                scale: 0.85,
                rotateY: isDesktop ? 15 : 0,
                transformPerspective: 800,
              },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                rotateY: 0,
                duration: 1,
                ease: "power4.out",
                stagger: 0.15,
                scrollTrigger: {
                  trigger: stepCards[0],
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
              }
            );

            // Ken Burns zoom on card images
            stepCards.forEach((card) => {
              const img = card.querySelector("img");
              if (img) {
                gsap.fromTo(
                  img,
                  { scale: 1.15 },
                  {
                    scale: 1,
                    ease: "none",
                    scrollTrigger: {
                      trigger: card,
                      start: "top bottom",
                      end: "bottom top",
                      scrub: true,
                    },
                  }
                );
              }
            });
          }

          // ═══════════════════════════════════════════════════
          // FEATURE PANELS — Pinned panels, each takes viewport
          // Like gsap.com infinite-looped-panels demo
          // ═══════════════════════════════════════════════════

          const panels = container.querySelectorAll(
            "[data-animate='feature-panel']"
          );
          const panelWrap = container.querySelector(
            "[data-animate='feature-panels']"
          );

          if (panels.length && isDesktop) {
            // CSS sticky handles pinning — GSAP only for scale + content fx
            panels.forEach((panel, i) => {
              const content = panel.querySelector(
                "[data-animate='feature-content']"
              );
              const img = panel.querySelector(
                "[data-animate='feature-image'] img"
              );

              // Scale down as next card covers, or as last card scrolls away
              if (i < panels.length - 1) {
                gsap.to(panel, {
                  scale: 0.93,
                  ease: "none",
                  scrollTrigger: {
                    trigger: panels[i + 1],
                    start: "top bottom",
                    end: "top 20%",
                    scrub: true,
                  },
                });
              } else {
                // Last panel — scale down as it unsticks
                gsap.to(panel, {
                  scale: 0.93,
                  ease: "none",
                  scrollTrigger: {
                    trigger: panel,
                    start: "bottom 80%",
                    end: "bottom 20%",
                    scrub: true,
                  },
                });
              }

              // Content stagger in
              if (content) {
                gsap.fromTo(
                  content.children,
                  { y: 30, opacity: 0 },
                  {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power3.out",
                    stagger: 0.1,
                    scrollTrigger: {
                      trigger: panel,
                      start: "top 75%",
                      toggleActions: "play none none none",
                    },
                  }
                );
              }

              // Ken Burns
              if (img) {
                gsap.fromTo(
                  img,
                  { scale: 1 },
                  {
                    scale: 1.15,
                    ease: "none",
                    scrollTrigger: {
                      trigger: panel,
                      start: "top bottom",
                      end: "bottom top",
                      scrub: true,
                    },
                  }
                );
              }
            });
          } else if (panels.length) {
            // Mobile — simple fade in
            panels.forEach((panel) => {
              gsap.fromTo(
                panel,
                { y: 50, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.8,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: panel,
                    start: "top 90%",
                    toggleActions: "play none none none",
                  },
                }
              );
            });
          }

          // ═══════════════════════════════════════════════════
          // FAQ — Staggered reveal with line draw feel
          // ═══════════════════════════════════════════════════

          const faqList = container.querySelector(
            "[data-animate='faq-list']"
          );
          if (faqList) {
            gsap.fromTo(
              faqList.children,
              {
                x: isDesktop ? 100 : 50,
                opacity: 0,
                clipPath: "inset(0% 100% 0% 0%)",
              },
              {
                x: 0,
                opacity: 1,
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 0.8,
                ease: "power4.out",
                stagger: 0.1,
                scrollTrigger: {
                  trigger: faqList,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
              }
            );
          }

        }
      );
    },
    { scope: containerRef }
  );

  return <div ref={containerRef}>{children}</div>;
}
