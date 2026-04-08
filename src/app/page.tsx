import FaqItem from "@/components/FaqItem";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <ScrollAnimations>
    <main className="min-h-screen overflow-x-clip">
      <Navbar />

      {/* ── Hero ── */}
      <section data-animate="hero-section" className="relative bg-white overflow-x-clip z-10">
        <div className="relative flex flex-col items-center gap-10 pt-[100px] lg:pt-[106px] px-6">
          <img data-animate="doodle" src="/images/star-doodle.svg" alt="" className="hidden lg:block absolute top-[30px] left-[calc(50%-640px)] w-[220px] h-[220px] pointer-events-none select-none" aria-hidden="true" />
          <img data-animate="doodle" src="/images/envelope-doodle.svg" alt="" className="hidden lg:block absolute top-[20px] right-[calc(50%-650px)] w-[230px] h-[230px] rotate-[26deg] pointer-events-none select-none" aria-hidden="true" />

          <div data-animate="hero-text" className="flex flex-col items-center gap-6">
            <span className="bg-[#f5b675] text-white text-[14px] font-medium px-4 py-1 rounded-full tracking-[-0.28px] font-body">
              🇦🇺 Australian owned & made for kids — Launching soon
            </span>
            <h1 data-animate="hero-heading" className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-medium leading-[1.11] tracking-[-2.16px] text-[#343433] text-center font-heading">
              <span data-animate="hero-word">iPhones </span>
              <span data-animate="hero-word">can </span>
              <span data-animate="hero-word">wait.</span>
              <br />
              <span data-animate="hero-word">Telling </span>
              <span data-animate="hero-word">Grandad </span>
              <span data-animate="hero-word">I </span>
              <span data-animate="hero-word">Love </span>
              <span data-animate="hero-word">You </span>
              <span data-animate="hero-word">can&apos;t.</span>
            </h1>
            <p className="text-[18px] sm:text-[20px] lg:text-[24px] font-medium text-[#474645] text-center max-w-[875px] leading-[32px] tracking-[-0.24px] font-heading">
              Ciao Bella is a beautiful home phone made just for kids. It
              connects them to the people who love them — and nobody else gets
              in.
            </p>
          </div>

          {/* CTA + trust badges */}
          <div data-animate="hero-cta" className="flex flex-col items-center gap-5">
            <a
              href="/waitlist"
              className="inline-flex items-center gap-6 bg-[#131313] text-white text-[16px] font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-[#333] transition-colors tracking-[-0.32px] font-body"
            >
              Be the first to say Ciao
              <span className="w-12 h-12 bg-[#f5b675] rounded-full flex items-center justify-center shrink-0">
                <svg className="w-3 h-5 translate-x-px" fill="none" stroke="white" strokeWidth={2.5} viewBox="0 0 12 20">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 18L10 10L2 2" />
                </svg>
              </span>
            </a>
            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-1">
              {[
                '✓ Parent controlled',
                '✓ Ages 4 to smartphone-ready',
                '✓ Australian owned',
              ].map(badge => (
                <span key={badge} className="bg-[#f7f3ee] text-[#474645] text-[13px] font-body font-medium px-4 py-1.5 rounded-full border border-[#ede8e0]">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Photo fan ── */}
        <div data-animate="hero-photos" className="relative h-[350px] sm:h-[420px] md:h-[500px] lg:h-[600px] mt-10">
          <div data-animate="hero-fade" className="hidden lg:block absolute left-[calc(50%-460px)] top-[90px] z-10 pointer-events-none">
            <div className="relative w-[174px] h-[124px]">
              <img src="/images/bubble-left.svg" alt="" className="w-full h-full" />
              <span className="absolute inset-0 flex items-center justify-center text-[18px] text-black text-center leading-[0.95] px-8 font-hero">We made it the finals!</span>
            </div>
          </div>
          <div data-animate="hero-fade" className="hidden lg:block absolute right-[calc(50%-517px)] top-[20px] z-10 pointer-events-none">
            <div className="relative w-[150px] h-[150px]">
              <img src="/images/bubble-right.svg" alt="" className="w-full h-full" />
              <span className="absolute inset-[28%_20%_44%_20%] flex items-center justify-center text-[20px] text-[#6297d6] text-center leading-[0.95] font-hero">Thats amazing!</span>
            </div>
          </div>
          <div data-animate="hero-fade" data-speed="0.8" className="absolute hidden md:block" style={{ left: "50%", top: "198px", transform: "translateX(calc(-50% - 211px)) rotate(-15deg)" }}>
            <div className="w-[280px] lg:w-[376px] h-[412px] lg:h-[554px] rounded-3xl overflow-hidden">
              <img src="/images/hero-photo-left.jpg" alt="Kids talking on a Ciao Bella phone" className="w-full h-full object-cover object-right" />
            </div>
          </div>
          <div data-animate="hero-fade" data-speed="1.3" className="absolute hidden md:block z-[1]" style={{ left: "50%", top: "108px", transform: "translateX(calc(-50% + 150px)) rotate(15deg)" }}>
            <div className="w-[280px] lg:w-[376px] h-[412px] lg:h-[554px] rounded-3xl overflow-hidden">
              <img src="/images/hero-photo-right.jpg" alt="Girl talking on a Ciao Bella phone" className="w-full h-full object-cover object-left" />
            </div>
          </div>
          <div data-speed="1.0" className="absolute z-[2]" style={{ left: "50%", top: "57px", transform: "translateX(-50%)" }}>
            <div data-animate="video-card" className="w-[280px] lg:w-[376px] h-[412px] lg:h-[554px] rounded-3xl overflow-hidden shadow-[0px_15px_34px_0px_rgba(0,0,0,0.25),0px_61px_61px_0px_rgba(0,0,0,0.22)] bg-[#dae9f3]">
              <video data-animate="hero-video" src="/images/phone-video.mp4" loop muted playsInline preload="auto" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="bg-white px-6 md:px-[52px] py-20 lg:py-32 relative z-20 overflow-hidden">
        <div className="max-w-[1296px] mx-auto flex flex-col items-center gap-[72px] relative">
          <img src="/images/doodle-star.png" alt="" className="hidden lg:block absolute left-[30px] top-[40px] w-[90px] h-[90px] pointer-events-none select-none rotate-[12deg] opacity-80" style={{ filter: "brightness(0) saturate(100%) invert(70%) sepia(40%) saturate(500%) hue-rotate(330deg)" }} aria-hidden="true" />
          <img src="/images/doodle-cloud.png" alt="" className="hidden lg:block absolute right-[30px] bottom-[60px] w-[100px] h-[90px] pointer-events-none select-none opacity-80" style={{ filter: "brightness(0) saturate(100%) invert(75%) sepia(20%) saturate(400%) hue-rotate(120deg)" }} aria-hidden="true" />
          <div data-animate="section-heading">
            <h2 className="font-heading font-medium text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.17] text-center text-black">
              How does Ciao Bella{" "}
              <span className="relative inline-block">
                work?
                <img src="/images/arrow-underline.svg" alt="" className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-[128px] h-[18px] pointer-events-none" aria-hidden="true" />
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1176px]">
            <div data-animate="step-card" className="bg-white rounded-[20px] p-5 flex flex-col">
              <div className="h-[320px] rounded-[20px] overflow-hidden mb-6">
                <img src="/images/benefits-card-1.jpg" alt="Ciao Bella phone" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-heading font-medium text-[20px] leading-[28px] text-black mb-2">Get your Ciao Bella Phone</h3>
              <p className="font-hero font-medium text-[14px] leading-[20px] text-[#575757]">Join the waitlist and be first to get your Ciao Bella phone when we launch. Choose your favourite colour!</p>
            </div>
            <div data-animate="step-card" className="bg-white rounded-[20px] p-5 flex flex-col">
              <div className="h-[320px] rounded-[20px] overflow-hidden mb-6">
                <img src="/images/benefits-card-2.jpg" alt="Download the Ciao Bella app" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-heading font-medium text-[20px] leading-[28px] text-black mb-2">Download the App</h3>
              <p className="font-hero font-medium text-[14px] leading-[20px] text-[#575757]">Download the Ciao Bella parent app, connect your phone, and choose exactly who can call your child.</p>
            </div>
            <div data-animate="step-card" className="bg-white rounded-[20px] p-5 flex flex-col">
              <div className="h-[320px] rounded-[20px] overflow-hidden mb-6">
                <img src="/images/kids-calling.jpg" alt="Two kids talking on a phone" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-heading font-medium text-[20px] leading-[28px] text-black mb-2">Let them connect!</h3>
              <p className="font-hero font-medium text-[14px] leading-[20px] text-[#575757]">Your child can call the people they love — and you stay in control the whole time. Simple, safe, beautiful.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── For parents ── */}
      <section id="for-parents" className="bg-white px-6 md:px-[52px] py-14 lg:py-24 relative z-20 overflow-x-clip">
        <div className="max-w-[1296px] mx-auto flex flex-col items-center gap-[72px] relative">
          <div data-animate="section-heading" className="max-w-[622px]">
            <h2 className="font-heading font-medium text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.17] text-center text-black">
              Why parents are falling in{" "}
              <span className="relative inline-block">
                love
                <img src="/images/arrow-underline.svg" alt="" className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-[128px] h-[18px] pointer-events-none" aria-hidden="true" />
              </span>{" "}
              with Ciao Bella
            </h2>
          </div>
          <div data-animate="feature-panels" className="w-full flex flex-col gap-8 lg:gap-8">
            <div data-animate="feature-panel" className="bg-[#dc9380] rounded-[32px] flex flex-col lg:flex-row items-center p-8 lg:pl-12 lg:pr-8 lg:py-8 gap-8 w-full min-h-[444px] lg:sticky lg:top-[80px] lg:z-[1]">
              <div data-animate="feature-content" className="flex flex-col gap-6 flex-1 py-8">
                <img src="/images/icon-diamond.png" alt="" className="w-[56px] h-[56px] invert" aria-hidden="true" />
                <h3 className="font-heading font-medium text-[32px] lg:text-[46px] leading-[1.1] text-white max-w-[622px]">Only the people you trust</h3>
                <p className="font-hero font-medium text-[16px] leading-[24px] text-white max-w-[456px]">You decide exactly who can call your child — grandparents, aunties, best friends. No strangers, no spam, no surprises. Just the people who matter most.</p>
              </div>
              <div data-animate="feature-image" className="w-full lg:w-[476px] h-[300px] lg:h-[380px] rounded-[20px] overflow-hidden shrink-0">
                <img src="/images/two-girls.jpg" alt="Two girls smiling together" className="w-full h-full object-cover object-[center_80%] scale-150" />
              </div>
            </div>
            <div data-animate="feature-panel" className="bg-[#6297d6] rounded-[32px] flex flex-col lg:flex-row items-center p-8 lg:pl-12 lg:pr-8 lg:py-8 gap-8 w-full min-h-[444px] lg:sticky lg:top-[100px] lg:z-[2] shadow-[0_-20px_40px_rgba(0,0,0,0.15)]">
              <div data-animate="feature-content" className="flex flex-col gap-6 flex-1 py-8">
                <img src="/images/icon-cube.png" alt="" className="w-[56px] h-[56px] invert" aria-hidden="true" />
                <h3 className="font-heading font-medium text-[32px] lg:text-[46px] leading-[1.1] text-white max-w-[622px]">No screens, no distractions</h3>
                <p className="font-hero font-medium text-[16px] leading-[24px] text-white max-w-[456px]">Ciao Bella is a phone that&apos;s just a phone. No apps, no internet, no doom-scrolling. Kids pick it up, talk to someone they love, and put it down. Simple as that.</p>
              </div>
              <div data-animate="feature-image" className="w-full lg:w-[476px] h-[300px] lg:h-[380px] rounded-[20px] overflow-hidden shrink-0">
                <img src="/images/kids-no-screens.jpg" alt="Kids playing without screens" className="w-full h-full object-cover" />
              </div>
            </div>
            <div data-animate="feature-panel" className="bg-[#8db5b0] rounded-[32px] flex flex-col lg:flex-row items-center p-8 lg:pl-12 lg:pr-8 lg:py-8 gap-8 w-full min-h-[444px] lg:sticky lg:top-[120px] lg:z-[3] shadow-[0_-20px_40px_rgba(0,0,0,0.15)]">
              <div data-animate="feature-content" className="flex flex-col gap-6 flex-1 py-8">
                <img src="/images/trust-icon.svg" alt="" className="w-[56px] h-[56px] brightness-0 invert" aria-hidden="true" />
                <h3 className="font-heading font-medium text-[32px] lg:text-[46px] leading-[1.1] text-white max-w-[622px]">Managed from your phone</h3>
                <p className="font-hero font-medium text-[16px] leading-[24px] text-white max-w-[456px]">Add or remove contacts, set quiet hours, and see call history — all from the Ciao Bella parent app. You stay in control without hovering over your child.</p>
              </div>
              <div data-animate="feature-image" className="w-full lg:w-[476px] h-[300px] lg:h-[380px] rounded-[20px] overflow-hidden shrink-0">
                <img src="/images/parent-phone.jpg" alt="Parent managing Ciao Bella from their phone" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="hidden lg:block lg:h-[50vh]" />
          </div>
        </div>
      </section>

      {/* ── Be the first to say Ciao CTA ── */}
      <section className="bg-[#f7f3ee] px-6 md:px-[52px] py-20 lg:py-24 relative z-20">
        <div className="max-w-[776px] mx-auto flex flex-col items-center gap-8 text-center">
          <img src="/images/doodle-waitlist.svg" alt="" className="w-[80px] h-[80px] opacity-60" aria-hidden="true" />
          <h2 className="font-heading font-medium text-[36px] sm:text-[48px] leading-[1.1] tracking-[-0.05em] text-[#343433]">
            Be the first to say{" "}
            <span className="text-[#dc9380] italic">Ciao.</span>
          </h2>
          <p className="font-body text-[18px] leading-[28px] text-[#8c8c8c] max-w-[520px]">
            Join our waitlist and get early access, launch pricing, and a few updates from us along the way.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['✓ Parent controlled', '✓ Ages 4 to smartphone-ready', '✓ Australian owned'].map(badge => (
              <span key={badge} className="bg-white text-[#474645] text-[13px] font-body font-medium px-4 py-1.5 rounded-full border border-[#ede8e0]">
                {badge}
              </span>
            ))}
          </div>
          <a
            href="/waitlist"
            className="inline-flex items-center gap-6 bg-[#131313] text-white text-[16px] font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-[#333] transition-colors tracking-[-0.32px] font-body"
          >
            Join the waitlist
            <span className="w-12 h-12 bg-[#f5b675] rounded-full flex items-center justify-center shrink-0">
              <svg className="w-3 h-5 translate-x-px" fill="none" stroke="white" strokeWidth={2.5} viewBox="0 0 12 20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 18L10 10L2 2" />
              </svg>
            </span>
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white px-6 md:px-[52px] py-16 lg:py-[76px] relative z-20 overflow-hidden">
        <div className="max-w-[1296px] mx-auto flex flex-col items-center gap-16 relative">
          <img src="/images/doodle-rocket.png" alt="" className="hidden lg:block absolute left-[40px] top-[260px] w-[100px] h-[100px] pointer-events-none select-none rotate-[-15deg] opacity-80" aria-hidden="true" />
          <img src="/images/doodle-popsicle.png" alt="" className="hidden lg:block absolute right-[50px] top-[120px] w-[90px] h-[90px] pointer-events-none select-none rotate-[10deg] opacity-80" aria-hidden="true" />
          <div data-animate="section-heading" className="flex flex-col items-center gap-6 max-w-[576px]">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#f5b675]" />
              <span className="font-hero font-medium text-[16px] leading-[24px] text-black">FAQs</span>
            </div>
            <h2 className="font-heading font-medium text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.17] text-center text-black">
              Frequently asked{" "}
              <span className="relative inline-block">
                questions
                <img src="/images/arrow-underline.svg" alt="" className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-[128px] h-[18px] pointer-events-none" aria-hidden="true" />
              </span>
            </h2>
            <p className="font-hero font-medium text-[16px] leading-[24px] text-[#575757] text-center max-w-[362px]">
              Everything you need to know about Ciao Bella and keeping your kids connected safely.
            </p>
          </div>
          <div data-animate="faq-list" className="flex flex-col gap-6 w-full max-w-[776px]">
            <FaqItem
              question="What age is Ciao Bella designed for?"
              answer="Ciao Bella is designed for kids from age 4, right up until you feel they're ready for a smartphone. It gives younger kids independence to call the people they love, and older kids a safe stepping stone before the big leap to a smartphone."
              defaultOpen
            />
            <FaqItem
              question="How do I control who can call my child?"
              answer="Through the Ciao Bella parent app, you add approved contacts to your child's phone. Only those people can call or receive calls — everyone else is blocked automatically. You can update the list any time from your phone."
              defaultOpen
            />
            <FaqItem
              question="Does it connect to the internet?"
              answer="No. Ciao Bella is a phone that only makes and receives calls. There's no internet, no apps, no social media, and no browser. Just real conversations with real people."
            />
            <FaqItem
              question="Can my child call emergency services?"
              answer="Yes. Emergency services (000) are always available regardless of your contact list settings. Your child's safety always comes first."
            />
            <FaqItem
              question="How do I get a Ciao Bella?"
              answer="Join our waitlist today and we'll let you know as soon as Ciao Bella is available to order. Early sign-ups get first access and a special launch price."
            />
          </div>
        </div>
      </section>

      <div className="h-[120px] bg-gradient-to-b from-white to-transparent pointer-events-none -mb-[120px] relative z-10" />
      <Footer />
    </main>
    </ScrollAnimations>
  );
}