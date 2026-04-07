'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const STATES = ['ACT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC', 'WA'];
const SOURCES = [
  'Instagram',
  'Facebook',
  'Word of mouth',
  'Google search',
  'TikTok',
  'A friend or family member',
  'Other',
];

// Placeholder questions — Sophie to update
const Q1_OPTIONS = ['Ages 3–5', 'Ages 6–8', 'Ages 9–12', 'Ages 13+'];
const Q2_OPTIONS = ['Yes, definitely', 'Maybe', 'Not sure yet', 'Just curious'];
const Q3_OPTIONS = ['Under $100', '$100–$150', '$150–$200', 'Over $200'];

export default function Waitlist() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  // Step 1 fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState('');
  const [source, setSource] = useState('');

  // Step 2 fields
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');

  const handleStep1 = () => {
    if (!firstName.trim() || !email.trim()) {
      setError('Please enter your first name and email');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    setStep(2);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, phone, state, source, q1, q2, q3 }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong');
      setDone(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <main className="min-h-screen overflow-x-hidden">
        <Navbar />
        <section className="bg-white px-6 md:px-[52px] lg:px-[247px] py-[104px] flex flex-col items-center gap-8 text-center">
          <div className="text-6xl">🎉</div>
          <h2 className="font-heading font-medium text-[36px] lg:text-[48px] leading-[1.08] tracking-[-0.05em] text-[#474645]">
            You&apos;re on the list!
          </h2>
          <p className="font-body text-[16px] leading-[24px] text-[#8c8c8c] max-w-[480px]">
            Welcome to the Ciao Bella family, {firstName}! We&apos;ll be in touch as soon as we&apos;re ready to launch. You&apos;ll be first to know — and first to get our special launch pricing.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-6 bg-[#131313] text-white text-[16px] font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-[#333] transition-colors tracking-[-0.32px] font-body"
          >
            Back to home
            <span className="w-12 h-12 bg-[#f5b675] rounded-full flex items-center justify-center shrink-0">
              <svg className="w-3 h-5 translate-x-px" fill="none" stroke="white" strokeWidth={2.5} viewBox="0 0 12 20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 18L10 10L2 2" />
              </svg>
            </span>
          </a>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="bg-white px-6 md:px-[52px] lg:px-[247px] py-[64px] lg:py-[80px]">
        <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch justify-center">

          {/* Left — info */}
          <div className="flex flex-col gap-6 lg:max-w-[360px] lg:py-8">
            <span className="text-[13px] font-body font-medium text-[#8c8c8c] tracking-[0.08em] uppercase">Reserve your place</span>
            <h2 className="font-heading font-medium text-[36px] lg:text-[48px] leading-[1.08] tracking-[-0.05em] text-[#474645]">
              Be the first to say{' '}
              <span className="text-[#dc9380] italic">Ciao.</span>
            </h2>
            <p className="font-body font-normal text-[16px] leading-[24px] text-[#8c8c8c]">
              Join our waitlist and get early access, launch pricing, and a few updates from us along the way. We&apos;ll also ask a couple of quick questions so we can build the best version of Ciao Bella for your family.
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2 mt-2">
              {['✓ Free to join', '✓ No spam ever', '✓ Australian owned'].map(pill => (
                <span key={pill} className="bg-[#f7f3ee] text-[#474645] text-[13px] font-body px-3 py-1 rounded-full border border-[#ede8e0]">
                  {pill}
                </span>
              ))}
            </div>

            {/* Step indicator */}
            <div className="flex items-center gap-3 mt-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-body font-semibold ${step === 1 ? 'bg-[#131313] text-white' : 'bg-[#2d6a4f] text-white'}`}>
                {step > 1 ? '✓' : '1'}
              </div>
              <div className={`h-[2px] flex-1 max-w-[40px] ${step > 1 ? 'bg-[#2d6a4f]' : 'bg-[#ede8e0]'}`} />
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-body font-semibold ${step === 2 ? 'bg-[#131313] text-white' : 'bg-[#ede8e0] text-[#8c8c8c]'}`}>
                2
              </div>
              <span className="font-body text-[13px] text-[#8c8c8c]">Step {step} of 2</span>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#8db5b0] rounded-3xl p-8 w-full lg:flex-1 flex flex-col gap-6">

            {step === 1 && (
              <>
                <div>
                  <h3 className="font-heading font-medium text-[24px] text-[#1e2e2c] mb-1">Tell us about yourself</h3>
                  <p className="font-body text-[14px] text-[#2d4a48]">Just the basics — takes 30 seconds</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex flex-col gap-2 flex-1">
                    <label className="font-body font-medium text-[14px] text-[#1e2e2c]">First name *</label>
                    <input type="text" placeholder="Sophie" value={firstName} onChange={e => setFirstName(e.target.value)}
                      className="bg-white h-[52px] rounded-full px-5 font-body text-[15px] text-[#131313] placeholder:text-[#9ca3af] outline-none focus:ring-2 focus:ring-[#6297d6]" />
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label className="font-body font-medium text-[14px] text-[#1e2e2c]">Last name</label>
                    <input type="text" placeholder="Williams" value={lastName} onChange={e => setLastName(e.target.value)}
                      className="bg-white h-[52px] rounded-full px-5 font-body text-[15px] text-[#131313] placeholder:text-[#9ca3af] outline-none focus:ring-2 focus:ring-[#6297d6]" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-body font-medium text-[14px] text-[#1e2e2c]">Email address *</label>
                  <input type="email" placeholder="sophie@email.com.au" value={email} onChange={e => setEmail(e.target.value)}
                    className="bg-white h-[52px] rounded-full px-5 font-body text-[15px] text-[#131313] placeholder:text-[#9ca3af] outline-none focus:ring-2 focus:ring-[#6297d6]" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-body font-medium text-[14px] text-[#1e2e2c]">Mobile number <span className="text-[#2d4a48] font-normal">(optional)</span></label>
                  <input type="tel" placeholder="0412 345 678" value={phone} onChange={e => setPhone(e.target.value)}
                    className="bg-white h-[52px] rounded-full px-5 font-body text-[15px] text-[#131313] placeholder:text-[#9ca3af] outline-none focus:ring-2 focus:ring-[#6297d6]" />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex flex-col gap-2 flex-1">
                    <label className="font-body font-medium text-[14px] text-[#1e2e2c]">State</label>
                    <select value={state} onChange={e => setState(e.target.value)}
                      className="bg-white h-[52px] rounded-full px-5 font-body text-[15px] text-[#131313] outline-none focus:ring-2 focus:ring-[#6297d6] appearance-none cursor-pointer">
                      <option value="">Select state</option>
                      {STATES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label className="font-body font-medium text-[14px] text-[#1e2e2c]">How did you hear about us?</label>
                    <select value={source} onChange={e => setSource(e.target.value)}
                      className="bg-white h-[52px] rounded-full px-5 font-body text-[15px] text-[#131313] outline-none focus:ring-2 focus:ring-[#6297d6] appearance-none cursor-pointer">
                      <option value="">Select source</option>
                      {SOURCES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                {error && <p className="text-white text-[14px] font-body bg-red-400 bg-opacity-40 rounded-xl px-4 py-2">{error}</p>}

                <button onClick={handleStep1}
                  className="inline-flex items-center gap-6 bg-[#131313] text-white text-[16px] font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-[#333] transition-colors tracking-[-0.32px] font-body self-start">
                  Next step
                  <span className="w-12 h-12 bg-[#f5b675] rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-3 h-5 translate-x-px" fill="none" stroke="white" strokeWidth={2.5} viewBox="0 0 12 20">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2 18L10 10L2 2" />
                    </svg>
                  </span>
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <div>
                  <h3 className="font-heading font-medium text-[24px] text-[#1e2e2c] mb-1">A few quick questions</h3>
                  <p className="font-body text-[14px] text-[#2d4a48]">Help us build the best Ciao Bella for your family</p>
                </div>

                {/* Q1 — placeholder */}
                <div className="flex flex-col gap-3">
                  <label className="font-body font-medium text-[14px] text-[#1e2e2c]">How old are your kids? <span className="font-normal text-[#2d4a48]">(placeholder — Sophie to update)</span></label>
                  <div className="flex flex-wrap gap-2">
                    {Q1_OPTIONS.map(opt => (
                      <button key={opt} onClick={() => setQ1(opt)}
                        className={`px-4 py-2 rounded-full font-body text-[14px] border-2 transition-colors ${q1 === opt ? 'bg-[#131313] text-white border-[#131313]' : 'bg-white text-[#131313] border-white hover:border-[#131313]'}`}>
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Q2 — placeholder */}
                <div className="flex flex-col gap-3">
                  <label className="font-body font-medium text-[14px] text-[#1e2e2c]">Would you buy Ciao Bella as a gift? <span className="font-normal text-[#2d4a48]">(placeholder)</span></label>
                  <div className="flex flex-wrap gap-2">
                    {Q2_OPTIONS.map(opt => (
                      <button key={opt} onClick={() => setQ2(opt)}
                        className={`px-4 py-2 rounded-full font-body text-[14px] border-2 transition-colors ${q2 === opt ? 'bg-[#131313] text-white border-[#131313]' : 'bg-white text-[#131313] border-white hover:border-[#131313]'}`}>
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Q3 — placeholder */}
                <div className="flex flex-col gap-3">
                  <label className="font-body font-medium text-[14px] text-[#1e2e2c]">What price would you expect to pay? <span className="font-normal text-[#2d4a48]">(placeholder)</span></label>
                  <div className="flex flex-wrap gap-2">
                    {Q3_OPTIONS.map(opt => (
                      <button key={opt} onClick={() => setQ3(opt)}
                        className={`px-4 py-2 rounded-full font-body text-[14px] border-2 transition-colors ${q3 === opt ? 'bg-[#131313] text-white border-[#131313]' : 'bg-white text-[#131313] border-white hover:border-[#131313]'}`}>
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {error && <p className="text-white text-[14px] font-body bg-red-400 bg-opacity-40 rounded-xl px-4 py-2">{error}</p>}

                <div className="flex gap-4 flex-wrap">
                  <button onClick={() => setStep(1)}
                    className="px-6 py-3 rounded-full font-body text-[15px] font-medium text-[#1e2e2c] bg-white hover:bg-[#f0f0f0] transition-colors">
                    ← Back
                  </button>
                  <button onClick={handleSubmit} disabled={loading}
                    className={`inline-flex items-center gap-6 bg-[#131313] text-white text-[16px] font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-[#333] transition-colors tracking-[-0.32px] font-body ${loading ? 'opacity-70' : ''}`}>
                    {loading ? 'Joining...' : 'Join the waitlist'}
                    <span className="w-12 h-12 bg-[#f5b675] rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-3 h-5 translate-x-px" fill="none" stroke="white" strokeWidth={2.5} viewBox="0 0 12 20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2 18L10 10L2 2" />
                      </svg>
                    </span>
                  </button>
                </div>

                <p className="font-body text-[12px] text-[#2d4a48]">
                  By joining you agree to our <a href="/privacy" className="underline">Privacy Policy</a>. No spam, ever.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}