import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section className="bg-white px-6 md:px-[52px] lg:px-[132px] py-[80px] lg:py-[120px] relative overflow-x-clip">
        <img src="/images/doodle-star.png" alt="" className="hidden lg:block absolute left-[80px] top-[160px] w-auto h-[90px] pointer-events-none select-none rotate-[12deg] opacity-80" style={{ filter: "brightness(0) saturate(100%) invert(70%) sepia(40%) saturate(500%) hue-rotate(330deg)" }} aria-hidden="true" />
        <img src="/images/doodle-cloud.png" alt="" className="hidden lg:block absolute right-[80px] top-[200px] w-auto h-[90px] pointer-events-none select-none opacity-80" style={{ filter: "brightness(0) saturate(100%) invert(75%) sepia(20%) saturate(400%) hue-rotate(120deg)" }} aria-hidden="true" />
        <div className="max-w-[900px] mx-auto flex flex-col items-center gap-8">
          <span className="bg-[#f5b675] text-white text-[14px] font-medium px-4 py-1 rounded-full tracking-[-0.28px] font-body">
            Our Story
          </span>
          <h1 className="font-heading font-medium text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.15] tracking-[-0.05em] text-[#131313] text-center">
            We believe kids deserve real conversations
          </h1>
          <p className="font-body font-medium text-[18px] lg:text-[20px] leading-[32px] text-[#5d5d5d] text-center max-w-[700px]">
            Ciao Bella was born from a simple idea: kids should be able to call
            the people they love without needing a smartphone. No apps, no
            algorithms, no distractions — just real human connection.
          </p>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="bg-white px-6 md:px-[52px] lg:px-[132px] py-[64px] lg:py-[96px]">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="font-heading font-medium text-[32px] lg:text-[46px] leading-[1.1] text-[#131313]">
              Our Mission
            </h2>
            <p className="font-body font-normal text-[16px] leading-[28px] text-[#5d5d5d]">
              We started Ciao Bella because we saw a gap. Parents wanted their
              kids to stay connected to grandparents, aunties, and friends — but
              giving a 6-year-old a smartphone felt wrong. So we built something
              better.
            </p>
            <p className="font-body font-normal text-[16px] leading-[28px] text-[#5d5d5d]">
              Ciao Bella is a beautifully designed home phone that only connects
              to the people you approve. It&apos;s simple enough for a toddler,
              safe enough for any parent, and lovely enough to sit on your
              kitchen counter.
            </p>
          </div>
          <div className="w-full lg:w-[476px] h-[380px] rounded-[20px] overflow-hidden shrink-0">
            <img
              src="/images/two-girls.jpg"
              alt="Two girls together"
              className="w-full h-full object-cover object-[center_80%] scale-150"
            />
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-white px-6 md:px-[52px] lg:px-[132px] py-[64px] lg:py-[96px]">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
          <h2 className="font-heading font-medium text-[32px] lg:text-[46px] leading-[1.1] text-[#131313] text-center">
            What we stand for
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col gap-4">
              <img src="/images/icon-diamond.png" alt="" className="w-[56px] h-[56px]" aria-hidden="true" />
              <h3 className="font-heading font-medium text-[22px] leading-[1.2] text-[#131313]">
                Safety first
              </h3>
              <p className="font-body font-normal text-[16px] leading-[26px] text-[#5d5d5d]">
                Every feature is designed with child safety at its core. Only
                approved contacts can reach your child — no exceptions.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <img src="/images/icon-cube.png" alt="" className="w-[56px] h-[56px]" aria-hidden="true" />
              <h3 className="font-heading font-medium text-[22px] leading-[1.2] text-[#131313]">
                Screen-free childhood
              </h3>
              <p className="font-body font-normal text-[16px] leading-[26px] text-[#5d5d5d]">
                We believe kids don&apos;t need another screen. They need real
                voices, real laughter, and real conversations.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <img src="/images/icon-love.png" alt="" className="w-[56px] h-[56px] object-contain" aria-hidden="true" />
              <h3 className="font-heading font-medium text-[22px] leading-[1.2] text-[#131313]">
                Family connection
              </h3>
              <p className="font-body font-normal text-[16px] leading-[26px] text-[#5d5d5d]">
                Grandparents, cousins, best friends — Ciao Bella brings families
                closer together, no matter the distance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#6297d6] px-6 md:px-[52px] lg:px-[132px] py-[64px] lg:py-[80px]">
        <div className="max-w-[800px] mx-auto flex flex-col items-center gap-8 text-center">
          <h2 className="font-heading font-medium text-[32px] lg:text-[46px] leading-[1.1] text-white">
            Ready to give your child the gift of connection?
          </h2>
          <a
            href="/waitlist"
            className="inline-flex items-center gap-6 bg-white text-[#131313] text-[16px] font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-[#f5f5f5] transition-colors tracking-[-0.32px] font-body"
          >
            Join the waitlist
            <span className="w-12 h-12 bg-[#fae8c9] rounded-full flex items-center justify-center shrink-0">
              <svg
                className="w-3 h-5 translate-x-px"
                fill="none"
                stroke="#1a1a1a"
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
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
