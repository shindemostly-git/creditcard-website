import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import CardMock from '../components/CardMock.jsx'

const STEPS = ['Choose card', 'Your details', 'Load & review']

function StepDots({ current }) {
  return (
    <div className="flex items-center gap-2">
      {STEPS.map((label, i) => (
        <div key={label} className="flex items-center gap-2">
          <div
            className={`flex h-7 w-7 items-center justify-center rounded-full border text-[12px] font-medium transition-colors ${
              i < current
                ? 'border-lime bg-lime text-ink'
                : i === current
                ? 'border-lime text-lime'
                : 'border-white/15 text-white/40'
            }`}
          >
            {i < current ? '✓' : i + 1}
          </div>
          <span className={`hidden text-[13px] sm:block ${i === current ? 'text-offwhite' : 'text-white/40'}`}>
            {label}
          </span>
          {i < STEPS.length - 1 && <span className="mx-1 h-px w-6 bg-white/15 sm:mx-2 sm:w-10" />}
        </div>
      ))}
    </div>
  )
}

export default function CreateCard() {
  const [step, setStep] = useState(0)
  const [cardType, setCardType] = useState('physical')
  const [form, setForm] = useState({ name: '', mobile: '', email: '', upi: '' })
  const [loadAmount, setLoadAmount] = useState('10000')
  const [done, setDone] = useState(false)

  const canContinue = useMemo(() => {
    if (step === 0) return Boolean(cardType)
    if (step === 1) return form.name.trim() && form.mobile.trim().length >= 10 && form.upi.trim().includes('@')
    return Number(loadAmount) > 0
  }, [step, cardType, form, loadAmount])

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const goNext = () => {
    if (step === STEPS.length - 1) {
      setDone(true)
      return
    }
    setStep((s) => Math.min(s + 1, STEPS.length - 1))
  }
  const goBack = () => setStep((s) => Math.max(s - 1, 0))

  if (done) {
    return (
      <div className="min-h-screen bg-ink">
        <Navbar />
        <main className="container-px mx-auto flex max-w-xl flex-col items-center pb-32 pt-44 text-center">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-lime/15 text-2xl text-lime">✓</span>
          <h1 className="mt-6 font-display text-3xl font-semibold text-offwhite md:text-4xl">
            Your card is on its way.
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-white/55">
            We've set up your {cardType} card and queued a load of ₹{Number(loadAmount).toLocaleString('en-IN')}{' '}
            in eligible USDT. You'll get a notification once KYC verification is complete.
          </p>

          <div className="mt-10">
            <CardMock variant={cardType} tilt="" />
          </div>

          <div className="mt-10 flex gap-4">
            <Link to="/" className="btn-secondary">
              Back to home
            </Link>
            <Link to="/" className="btn-primary">
              Go to dashboard
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main className="container-px mx-auto max-w-3xl pb-32 pt-40">
        <p className="eyebrow">Create a card</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-offwhite md:text-4xl">
          Set up your Nova card in a few steps.
        </h1>

        <div className="mt-9 overflow-x-auto">
          <StepDots current={step} />
        </div>

        <div className="glass mt-8 rounded-2xl p-7 md:p-10">
          {step === 0 && (
            <div>
              <h2 className="text-[18px] font-medium text-offwhite">Choose your card</h2>
              <p className="mt-1.5 text-[13.5px] text-white/50">You can add the other format later from your dashboard.</p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                {['digital', 'physical'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setCardType(type)}
                    className={`rounded-2xl border p-5 text-left transition-colors ${
                      cardType === type ? 'border-lime/50 bg-lime/[0.06]' : 'border-white/10 bg-white/[0.02] hover:border-white/25'
                    }`}
                  >
                    <CardMock variant={type} tilt="" className="pointer-events-none mb-5 max-w-full" />
                    <p className="text-[15px] font-medium capitalize text-offwhite">{type} card</p>
                    <p className="mt-1 text-[13px] text-white/50">
                      {type === 'digital' ? 'Instant, mobile-first, ready in minutes.' : 'Physical build, contactless, delivered to your address.'}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 className="text-[18px] font-medium text-offwhite">Your details</h2>
              <p className="mt-1.5 text-[13.5px] text-white/50">Used for KYC verification and connecting your UPI ID.</p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="text-[13px] text-white/50">Full name</label>
                  <input
                    value={form.name}
                    onChange={update('name')}
                    placeholder="As per your ID"
                    className="mt-2 w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-[14px] text-offwhite outline-none focus:border-lime/50"
                  />
                </div>
                <div>
                  <label className="text-[13px] text-white/50">Mobile number</label>
                  <input
                    value={form.mobile}
                    onChange={update('mobile')}
                    placeholder="10-digit mobile number"
                    className="mt-2 w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-[14px] text-offwhite outline-none focus:border-lime/50"
                  />
                </div>
                <div>
                  <label className="text-[13px] text-white/50">Email</label>
                  <input
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@email.com"
                    className="mt-2 w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-[14px] text-offwhite outline-none focus:border-lime/50"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-[13px] text-white/50">UPI ID</label>
                  <input
                    value={form.upi}
                    onChange={update('upi')}
                    placeholder="yourname@bank"
                    className="mt-2 w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-[14px] text-offwhite outline-none focus:border-lime/50"
                  />
                  <p className="mt-2 text-[12px] text-white/35">Connected where supported by your bank and the applicable UPI network.</p>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-[18px] font-medium text-offwhite">Load & review</h2>
              <p className="mt-1.5 text-[13.5px] text-white/50">Choose how much eligible USDT to load to start.</p>

              <div className="mt-7">
                <label className="text-[13px] text-white/50">Initial load amount</label>
                <div className="mt-2 flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3">
                  <span className="text-white/40">₹</span>
                  <input
                    type="number"
                    min="0"
                    value={loadAmount}
                    onChange={(e) => setLoadAmount(e.target.value)}
                    className="w-full bg-transparent font-mono text-[15px] text-offwhite outline-none"
                  />
                </div>
              </div>

              <div className="mt-7 space-y-2.5 rounded-xl border border-white/10 bg-white/[0.02] p-5">
                {[
                  ['Card type', cardType === 'digital' ? 'Digital' : 'Physical'],
                  ['Name', form.name || '—'],
                  ['UPI ID', form.upi || '—'],
                  ['Initial load', `₹${Number(loadAmount || 0).toLocaleString('en-IN')}`],
                ].map(([label, val]) => (
                  <div key={label} className="flex items-center justify-between text-[13.5px]">
                    <span className="text-white/50">{label}</span>
                    <span className="text-offwhite">{val}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-[12px] leading-relaxed text-white/35">
                By continuing you agree to Nova's Terms & Conditions and confirm you've read the Risk
                Disclosure. Card issuance is subject to KYC verification and eligibility checks.
              </p>
            </div>
          )}

          <div className="mt-9 flex items-center justify-between border-t border-white/10 pt-6">
            <button
              onClick={goBack}
              disabled={step === 0}
              className="text-[14px] font-medium text-white/50 transition-colors hover:text-offwhite disabled:opacity-0"
            >
              ← Back
            </button>
            <button onClick={goNext} disabled={!canContinue} className="btn-primary disabled:cursor-not-allowed disabled:opacity-40">
              {step === STEPS.length - 1 ? 'Create Card →' : 'Continue →'}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}