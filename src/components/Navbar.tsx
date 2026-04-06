"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "The Phone", href: "/the-phone" },
  { label: "FAQs", href: "/faqs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-[132px] py-3">
        <a href="/" className="shrink-0">
          <img
            src="/images/logo-new.png"
            alt="Ciao Bella"
            className="h-[43px] w-auto"
          />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[16px] font-medium text-[#5d5d5d] tracking-[-0.16px] leading-6 hover:text-black transition-colors font-body"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/waitlist"
            className="hidden sm:flex bg-[#6297d6] text-white text-[16px] font-semibold h-12 items-center justify-center px-6 rounded-full hover:bg-[#5080b8] transition-colors tracking-[-0.32px] font-body shrink-0"
          >
            Sign up
          </a>
          <button
            className="lg:hidden flex flex-col gap-1.5"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            ) : (
              <>
                <span className="block w-5 h-0.5 bg-black" />
                <span className="block w-5 h-0.5 bg-black" />
                <span className="block w-5 h-0.5 bg-black" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 px-6 pb-6 pt-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-[18px] font-medium text-[#343433] tracking-[-0.16px] leading-[48px] hover:text-[#6297d6] transition-colors font-body"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/waitlist"
            onClick={() => setOpen(false)}
            className="sm:hidden mt-2 flex bg-[#6297d6] text-white text-[16px] font-semibold h-12 items-center justify-center px-6 rounded-full hover:bg-[#5080b8] transition-colors tracking-[-0.32px] font-body"
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
}
