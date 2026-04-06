import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ThePhone() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section className="bg-white px-6 md:px-[52px] lg:px-[132px] py-[80px] lg:py-[120px] relative overflow-x-clip">
        <img src="/images/doodle-moon.png" alt="" className="hidden lg:block absolute left-[80px] top-[160px] w-[90px] h-[90px] pointer-events-none select-none rotate-[15deg] opacity-80" style={{ filter: "brightness(0) saturate(100%) invert(75%) sepia(30%) saturate(500%) hue-rotate(35deg)" }} aria-hidden="true" />
        <img src="/images/doodle-lollipop.png" alt="" className="hidden lg:block absolute right-[80px] top-[200px] w-auto h-[90px] pointer-events-none select-none rotate-[-10deg] opacity-80" style={{ filter: "brightness(0) saturate(100%) invert(65%) sepia(30%) saturate(600%) hue-rotate(170deg)" }} aria-hidden="true" />
        <div className="max-w-[900px] mx-auto flex flex-col items-center gap-8">
          <span className="bg-[#8db5b0] text-white text-[14px] font-medium px-4 py-1 rounded-full tracking-[-0.28px] font-body">
            The Phone
          </span>
          <h1 className="font-heading font-medium text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.15] tracking-[-0.05em] text-[#131313] text-center">
            A phone that&apos;s just a phone
          </h1>
          <p className="font-body font-medium text-[18px] lg:text-[20px] leading-[32px] text-[#5d5d5d] text-center max-w-[700px]">
            No apps. No internet. No doom-scrolling. Just a beautiful home phone
            that connects your child to the people who matter most.
          </p>
        </div>
      </section>

      {/* ── Product image ── */}
      <section className="bg-white px-6 md:px-[52px] lg:px-[132px] pb-[64px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-full h-[400px] lg:h-[500px] rounded-[32px] overflow-hidden">
            <img
              src="/images/benefits-card-1.jpg"
              alt="Ciao Bella phone in different colours"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="bg-white px-6 md:px-[52px] lg:px-[132px] py-[64px] lg:py-[96px]">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
          <h2 className="font-heading font-medium text-[32px] lg:text-[46px] leading-[1.1] text-[#131313] text-center">
            A retro landline, reimagined for today
          </h2>

          {/* Feature 1 */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 flex flex-col gap-6">
              <img src="/images/icon-diamond.png" alt="" className="w-[56px] h-[56px]" aria-hidden="true" />
              <h3 className="font-heading font-medium text-[28px] lg:text-[32px] leading-[1.1] text-[#131313]">
                Classic design, modern safety
              </h3>
              <p className="font-body font-normal text-[16px] leading-[28px] text-[#5d5d5d]">
                Ciao Bella looks and feels like the landline phones we all grew
                up with — a chunky handset, a coiled cord, and satisfying
                buttons. But underneath the retro charm is a modern contact
                system that only lets approved people through.
              </p>
            </div>
            <div className="w-full lg:w-[476px] h-[320px] rounded-[20px] overflow-hidden shrink-0">
              <img
                src="/images/kids-calling.jpg"
                alt="Kids talking on a retro phone"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="flex-1 flex flex-col gap-6">
              <img src="/images/icon-cube.png" alt="" className="w-[56px] h-[56px]" aria-hidden="true" />
              <h3 className="font-heading font-medium text-[28px] lg:text-[32px] leading-[1.1] text-[#131313]">
                Pick up, talk, hang up
              </h3>
              <p className="font-body font-normal text-[16px] leading-[28px] text-[#5d5d5d]">
                No touchscreen. No notifications. No rabbit holes. Kids lift
                the handset, press a button for Grandma or their best friend,
                and have a real conversation. When they&apos;re done, they hang
                up and go back to being kids.
              </p>
            </div>
            <div className="w-full lg:w-[476px] h-[320px] rounded-[20px] overflow-hidden shrink-0">
              <img
                src="/images/kids-no-screens.jpg"
                alt="Kids playing without screens"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 flex flex-col gap-6">
              <img src="/images/icon-love.png" alt="" className="w-[56px] h-[56px] object-contain" aria-hidden="true" />
              <h3 className="font-heading font-medium text-[28px] lg:text-[32px] leading-[1.1] text-[#131313]">
                Beautiful enough for your kitchen counter
              </h3>
              <p className="font-body font-normal text-[16px] leading-[28px] text-[#5d5d5d]">
                Available in a range of gorgeous colours, Ciao Bella is
                designed to sit proudly in your home — not hidden in a drawer.
                It&apos;s a statement piece that sparks conversation and
                connection.
              </p>
            </div>
            <div className="w-full lg:w-[476px] h-[320px] rounded-[20px] overflow-hidden shrink-0">
              <img
                src="/images/benefits-card-1.jpg"
                alt="Ciao Bella phone in different colours"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="flex-1 flex flex-col gap-6">
              <img src="/images/doodle-star.png" alt="" className="w-[56px] h-[56px] object-contain" aria-hidden="true" />
              <h3 className="font-heading font-medium text-[28px] lg:text-[32px] leading-[1.1] text-[#131313]">
                You stay in control
              </h3>
              <p className="font-body font-normal text-[16px] leading-[28px] text-[#5d5d5d]">
                The Ciao Bella parent app lets you manage everything from your
                own phone — add or remove contacts, set quiet hours for
                bedtime, and check call history. Your child gets independence,
                you get peace of mind.
              </p>
            </div>
            <div className="w-full lg:w-[476px] h-[320px] rounded-[20px] overflow-hidden shrink-0">
              <img
                src="/images/parent-phone.jpg"
                alt="Parent managing the phone from the app"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Colours ── */}
      <section className="bg-[#dc9380] px-6 md:px-[52px] lg:px-[132px] py-[64px] lg:py-[80px]">
        <div className="max-w-[800px] mx-auto flex flex-col items-center gap-8 text-center">
          <h2 className="font-heading font-medium text-[32px] lg:text-[46px] leading-[1.1] text-white">
            Choose your colour
          </h2>
          <p className="font-body font-medium text-[18px] leading-[28px] text-white/80 max-w-[600px]">
            Ciao Bella comes in a range of gorgeous colours to match any home.
            Pick the one your child will love most.
          </p>
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
