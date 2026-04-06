import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqItem from "@/components/FaqItem";

export default function Faqs() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section className="bg-white px-6 md:px-[52px] lg:px-[132px] py-[80px] lg:py-[120px] relative overflow-hidden">
        <div className="max-w-[900px] mx-auto flex flex-col items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#f5b675]" />
            <span className="font-hero font-medium text-[16px] leading-[24px] text-black">
              FAQs
            </span>
          </div>
          <h1 className="font-heading font-medium text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.15] tracking-[-0.05em] text-[#131313] text-center">
            Frequently asked{" "}
            <span className="relative inline-block">
              questions
              <img
                src="/images/arrow-underline.svg"
                alt=""
                className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-[128px] h-[18px] pointer-events-none"
                aria-hidden="true"
              />
            </span>
          </h1>
          <p className="font-body font-medium text-[18px] lg:text-[20px] leading-[32px] text-[#5d5d5d] text-center max-w-[600px]">
            Everything you need to know about Ciao Bella and keeping your kids
            connected safely.
          </p>
        </div>

        {/* Scattered doodles */}
        <img src="/images/doodle-star.png" alt="" className="hidden lg:block absolute left-[80px] top-[200px] w-auto h-[90px] pointer-events-none select-none rotate-[-15deg] opacity-80" style={{ filter: "brightness(0) saturate(100%) invert(70%) sepia(40%) saturate(500%) hue-rotate(330deg)" }} aria-hidden="true" />
        <img src="/images/doodle-envelope.png" alt="" className="hidden lg:block absolute right-[100px] top-[160px] w-auto h-[90px] pointer-events-none select-none rotate-[10deg] opacity-80" style={{ filter: "brightness(0) saturate(100%) invert(55%) sepia(50%) saturate(500%) hue-rotate(170deg)" }} aria-hidden="true" />
      </section>

      {/* ── FAQ sections ── */}
      <section className="bg-white px-6 md:px-[52px] lg:px-[132px] pb-[80px] lg:pb-[120px] relative overflow-hidden">
        <div className="max-w-[776px] mx-auto flex flex-col gap-12 relative">
          {/* Doodles in gutters */}
          <img src="/images/doodle-lollipop.png" alt="" className="hidden lg:block absolute -left-[180px] top-[100px] w-auto h-[90px] pointer-events-none select-none rotate-[-10deg] opacity-80" style={{ filter: "brightness(0) saturate(100%) invert(65%) sepia(30%) saturate(600%) hue-rotate(170deg)" }} aria-hidden="true" />
          <img src="/images/doodle-moon.png" alt="" className="hidden lg:block absolute -right-[180px] top-[400px] w-auto h-[90px] pointer-events-none select-none rotate-[15deg] opacity-80" style={{ filter: "brightness(0) saturate(100%) invert(75%) sepia(30%) saturate(500%) hue-rotate(35deg)" }} aria-hidden="true" />
          <img src="/images/doodle-strawberry.png" alt="" className="hidden lg:block absolute -left-[180px] top-[750px] w-auto h-[90px] pointer-events-none select-none rotate-[5deg] opacity-80" style={{ filter: "brightness(0) saturate(100%) invert(70%) sepia(40%) saturate(600%) hue-rotate(330deg)" }} aria-hidden="true" />
          <img src="/images/doodle-cloud.png" alt="" className="hidden lg:block absolute -right-[170px] top-[1050px] w-auto h-[90px] pointer-events-none select-none opacity-80" style={{ filter: "brightness(0) saturate(100%) invert(75%) sepia(20%) saturate(400%) hue-rotate(120deg)" }} aria-hidden="true" />

          {/* Getting started */}
          <div className="flex flex-col gap-6">
            <h2 className="font-heading font-medium text-[24px] lg:text-[28px] leading-[1.2] text-[#131313]">
              Getting started
            </h2>
            <div className="flex flex-col gap-4">
              <FaqItem
                question="What age is Ciao Bella designed for?"
                answer="Ciao Bella is perfect for kids aged 4–12. It's simple enough for little ones to use independently, and gives older kids a sense of independence without the risks of a smartphone."
                defaultOpen
              />
              <FaqItem
                question="How do I order a Ciao Bella?"
                answer="Join our waitlist today and we'll let you know as soon as Ciao Bella is available to order. Early sign-ups get first access and a special launch price."
              />
              <FaqItem
                question="What colours does it come in?"
                answer="Ciao Bella comes in a range of beautiful colours designed to fit any home. You'll be able to choose your favourite when you place your order."
              />
            </div>
          </div>

          {/* Safety & privacy */}
          <div className="flex flex-col gap-6">
            <h2 className="font-heading font-medium text-[24px] lg:text-[28px] leading-[1.2] text-[#131313]">
              Safety & privacy
            </h2>
            <div className="flex flex-col gap-4">
              <FaqItem
                question="How do I control who can call my child?"
                answer="Through the Ciao Bella parent app, you add approved contacts to your child's phone. Only those numbers can ring through — everyone else is blocked automatically. You can update the list any time."
                defaultOpen
              />
              <FaqItem
                question="Does it connect to the internet?"
                answer="No. Ciao Bella is a phone that only makes and receives calls. There's no internet, no apps, no social media, and no browser. Just real conversations with real people."
              />
              <FaqItem
                question="Can my child call emergency services?"
                answer="Yes. Emergency numbers like 999 and 112 are always available regardless of your contact list settings."
              />
              <FaqItem
                question="Is my child's data safe?"
                answer="Absolutely. We only store the minimum data needed to run the service — your approved contact list and call history. We never sell data, and everything is encrypted end-to-end."
              />
            </div>
          </div>

          {/* The parent app */}
          <div className="flex flex-col gap-6">
            <h2 className="font-heading font-medium text-[24px] lg:text-[28px] leading-[1.2] text-[#131313]">
              The parent app
            </h2>
            <div className="flex flex-col gap-4">
              <FaqItem
                question="What can I do in the parent app?"
                answer="You can add or remove approved contacts, set quiet hours (like bedtime), view call history, and manage your account — all from your own phone."
              />
              <FaqItem
                question="Is the app available on iOS and Android?"
                answer="Yes, the Ciao Bella parent app will be available on both iOS and Android at launch."
              />
              <FaqItem
                question="Can both parents manage the phone?"
                answer="Yes. Multiple parents or guardians can be linked to a single Ciao Bella phone, so everyone stays in the loop."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#8db5b0] px-6 md:px-[52px] lg:px-[132px] py-[64px] lg:py-[80px]">
        <div className="max-w-[800px] mx-auto flex flex-col items-center gap-8 text-center">
          <h2 className="font-heading font-medium text-[32px] lg:text-[46px] leading-[1.1] text-white">
            Still have questions?
          </h2>
          <p className="font-body font-medium text-[18px] leading-[28px] text-white/80 max-w-[500px]">
            We&apos;d love to hear from you. Join the waitlist and we&apos;ll be
            in touch.
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
