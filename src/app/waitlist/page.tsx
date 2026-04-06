import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Waitlist() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ── Hero + Form ── */}
      <section className="bg-white px-6 md:px-[52px] lg:px-[247px] py-[64px] lg:py-[104px] relative overflow-hidden">
        {/* Content row */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch justify-center max-w-[1100px] mx-auto">
          {/* Left — info */}
          <div className="flex flex-col gap-8 lg:max-w-[360px] lg:py-8">
            <h2 className="font-heading font-medium text-[36px] lg:text-[48px] leading-[1.08] tracking-[-0.05em] text-[#474645]">
              Sign-up Today
            </h2>
            <p className="font-body font-normal text-[16px] leading-[24px] text-[#8c8c8c]">
              Join the Ciao Bella waitlist to be the first to know when we
              launch. Early sign-ups get first access and a special launch
              price — don&apos;t miss out.
            </p>
          </div>

          {/* Right — form */}
          <div className="bg-[#8db5b0] rounded-3xl p-8 w-full lg:flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              {/* First name */}
              <div className="flex flex-col gap-4">
                <label className="font-body font-medium text-[16px] leading-[24px] text-[#1e2e2c] tracking-[-0.16px]">
                  First name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className="bg-white h-[56px] rounded-full px-6 py-4 font-body font-medium text-[16px] leading-[24px] text-[#131313] tracking-[-0.16px] placeholder:text-[#5d5d5d] outline-none focus:ring-2 focus:ring-[#6297d6]"
                />
              </div>

              {/* Last name */}
              <div className="flex flex-col gap-4">
                <label className="font-body font-medium text-[16px] leading-[24px] text-[#1e2e2c] tracking-[-0.16px]">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="bg-white h-[56px] rounded-full px-6 py-4 font-body font-medium text-[16px] leading-[24px] text-[#131313] tracking-[-0.16px] placeholder:text-[#5d5d5d] outline-none focus:ring-2 focus:ring-[#6297d6]"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-4">
                <label className="font-body font-medium text-[16px] leading-[24px] text-[#1e2e2c] tracking-[-0.16px]">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-white h-[56px] rounded-full px-6 py-4 font-body font-medium text-[16px] leading-[24px] text-[#131313] tracking-[-0.16px] placeholder:text-[#5d5d5d] outline-none focus:ring-2 focus:ring-[#6297d6]"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-4">
                <label className="font-body font-medium text-[16px] leading-[24px] text-[#1e2e2c] tracking-[-0.16px]">
                  Phone number
                </label>
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="bg-white h-[56px] rounded-full px-6 py-4 font-body font-medium text-[16px] leading-[24px] text-[#131313] tracking-[-0.16px] placeholder:text-[#5d5d5d] outline-none focus:ring-2 focus:ring-[#6297d6]"
                />
              </div>
            </div>

            {/* Submit button */}
            <button className="inline-flex items-center gap-6 bg-[#131313] text-white text-[16px] font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-[#333] transition-colors tracking-[-0.32px] font-body self-start">
              Submit
              <span className="w-12 h-12 bg-[#f5b675] rounded-full flex items-center justify-center shrink-0">
                <svg
                  className="w-3 h-5 translate-x-px"
                  fill="none"
                  stroke="white"
                  strokeWidth={2.5}
                  viewBox="0 0 12 20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2 18L10 10L2 2"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Decorative doodle */}
        <img
          src="/images/doodle-waitlist.svg"
          alt=""
          className="hidden lg:block absolute bottom-[40px] right-[300px] w-[126px] h-[98px] -scale-y-100 pointer-events-none"
          aria-hidden="true"
        />
      </section>

      <Footer />
    </main>
  );
}
