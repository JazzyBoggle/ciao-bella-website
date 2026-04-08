export default function Footer() {
  return (
    <footer className="bg-white px-6 md:px-[52px] lg:px-[132px] py-20 relative overflow-hidden">
      <div className="max-w-[1296px] mx-auto flex flex-col gap-[45px]">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Links */}
          <div className="flex flex-col gap-6 max-w-[549px]">
            <div className="flex flex-wrap gap-x-16 gap-y-2">
              <div className="flex flex-col">
                {[
                  { label: "Waitlist", href: "/waitlist" },
                  { label: "How it works", href: "/#how-it-works" },
                  { label: "For parents", href: "/#for-parents" },
                  { label: "About us", href: "/about" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-body font-medium text-[16px] leading-[24px] text-[#5d5d5d] tracking-[-0.16px] py-3 hover:text-black transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="flex flex-col">
                {[
                  { label: "Privacy Policy", href: "https://ciaobellaphone.com.au/policies/privacy-policy" },
                  { label: "Terms of Use", href: "https://ciaobellaphone.com.au/policies/terms-of-service" },
                  { label: "FAQs", href: "/faqs" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-body font-medium text-[16px] leading-[24px] text-[#5d5d5d] tracking-[-0.16px] py-3 hover:text-black transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                {/* Social links */}
                <div className="flex gap-4 mt-3">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                    className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center hover:bg-[#ececec] transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#5d5d5d">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                    className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center hover:bg-[#ececec] transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5d5d5d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="#5d5d5d" stroke="none" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-4 w-full max-w-[360px]">
            <p className="font-heading font-medium text-[24px] leading-[1.2] text-[#343433] tracking-[-0.03em]">
              Be the first to say <span className="text-[#dc9380] italic">Ciao.</span>
            </p>
            <p className="font-body text-[14px] text-[#8c8c8c] leading-[22px]">
              Join the waitlist and get early access and launch pricing.
            </p>
            <a
              href="/waitlist"
              className="inline-flex items-center gap-4 bg-[#131313] text-white text-[15px] font-semibold pl-5 pr-2 py-2 rounded-full hover:bg-[#333] transition-colors tracking-[-0.32px] font-body self-start"
            >
              Join the waitlist
              <span className="w-9 h-9 bg-[#f5b675] rounded-full flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-4 translate-x-px" fill="none" stroke="white" strokeWidth={2.5} viewBox="0 0 12 20">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 18L10 10L2 2" />
                </svg>
              </span>
            </a>
            <p className="font-body text-[12px] text-[#c0c0c0]">
              Australian owned & made for kids 🇦🇺
            </p>
          </div>
        </div>

        {/* Decorative photos */}
        <div className="hidden lg:block absolute right-[132px] top-[284px]">
          <div className="relative">
            <div className="w-[237px] h-[314px] rounded-3xl overflow-hidden rotate-[5.5deg]" style={{ position: "absolute", right: 0, top: 0 }}>
              <img src="/images/footer-kid-phone.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[195px] h-[258px] rounded-3xl overflow-hidden rotate-[-14.5deg]" style={{ position: "absolute", right: "140px", top: "77px" }}>
              <img src="/images/footer-grandma-phone.jpg" alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Large logo */}
        <img src="/images/logo-new-large.png" alt="Ciao Bella" className="w-[512px] max-w-full h-auto" />

        {/* Bottom bar */}
        <div className="border-t border-[#f0f0f0] pt-6 flex flex-col sm:flex-row justify-between gap-2">
          <p className="font-body text-[13px] text-[#c0c0c0]">© {new Date().getFullYear()} Ciao Bella Phone Pty Ltd. All rights reserved.</p>
          <p className="font-body text-[13px] text-[#c0c0c0]">Made with ❤️ in Australia</p>
        </div>
      </div>
    </footer>
  );
}