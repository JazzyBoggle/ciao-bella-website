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
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "The Phone", href: "/the-phone" },
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
              </div>
              <div className="flex flex-col">
                {[
                  { label: "Waitlist", href: "/waitlist" },
                  { label: "Privacy Policy", href: "/" },
                  { label: "Terms of Use", href: "/" },
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
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6 w-full max-w-[333px]">
            <div className="bg-[#ececec] flex items-center justify-between pl-6 pr-[10px] py-2 rounded-full">
              <span className="font-body font-medium text-[16px] leading-[24px] text-[#5d5d5d] tracking-[-0.16px]">
                Enter your email
              </span>
              <button className="bg-[#131313] text-white font-body font-semibold text-[16px] leading-[24px] tracking-[-0.32px] px-6 py-3 rounded-full hover:bg-[#333] transition-colors">
                Sign up
              </button>
            </div>
          </div>
        </div>

        {/* Decorative photos — right side */}
        <div className="hidden lg:block absolute right-[132px] top-[284px]">
          <div className="relative">
            <div
              className="w-[237px] h-[314px] rounded-3xl overflow-hidden rotate-[5.5deg]"
              style={{ position: "absolute", right: 0, top: 0 }}
            >
              <img
                src="/images/footer-kid-phone.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="w-[195px] h-[258px] rounded-3xl overflow-hidden rotate-[-14.5deg]"
              style={{ position: "absolute", right: "140px", top: "77px" }}
            >
              <img
                src="/images/footer-grandma-phone.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Large Ciao Bella logo */}
        <img
          src="/images/logo-new-large.png"
          alt="Ciao Bella"
          className="w-[512px] max-w-full h-auto"
        />
      </div>
    </footer>
  );
}
