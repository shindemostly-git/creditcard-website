import { Link } from 'react-router-dom'
import CardMock from '../CardMock.jsx'

const FLOW = ['1,000 USDT', 'Card Balance', 'Spend Anywhere', '2% Cashback', 'Balance Grows']

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pb-24 pt-40 md:pt-48">
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-electric/25 blur-[120px]" />
      <div className="pointer-events-none absolute left-[-10%] top-40 h-[360px] w-[360px] rounded-full bg-lime/10 blur-[110px]" />
      <div className="pointer-events-none absolute right-[18%] top-[55%] h-[180px] w-[180px] rounded-full bg-skyzap/10 blur-[90px]" />

      <div className="container-px relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-lime/25 bg-lime/10 px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            USDT-backed card, live in India
          </span>

          <h1 className="mt-6 max-w-xl font-display text-[34px] font-semibold leading-[1.1] tracking-tight text-offwhite sm:text-[42px] md:text-[58px]">
            Your USDT. Your card. Your everyday spending.
          </h1>

          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-white/60 md:text-[17px]">
            A digital and physical card built for USDT users. Load your balance, connect your UPI ID, spend
            across India and unlock rewards on eligible spending and balances.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link to="/create-card" className="btn-primary">
              Create a Card →
            </Link>
            <a href="#how-it-works" className="btn-secondary">
              How It Works ↓
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-start gap-x-6 gap-y-5 border-t border-white/10 pt-6">
            {[
              ['2%', 'Cashback on eligible spend'],
              ['5%', 'Monthly reward on balance'],
              ['10%', 'Daily spend of balance'],
            ].map(([n, l]) => (
              <div key={l} className="min-w-[92px]">
                <p className="font-display text-2xl font-semibold text-lime">{n}</p>
                <p className="mt-1 max-w-[130px] text-[12px] leading-snug text-white/45">{l}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col items-center gap-6">
          <div className="relative w-full max-w-[380px]">
            <div className="animate-floaty">
              <CardMock variant="physical" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-full max-w-[340px] opacity-90 md:-left-16">
              <CardMock variant="digital" tilt="rotate-3" />
            </div>
          </div>

          <div className="glass mt-16 w-full max-w-[340px] rounded-2xl p-5">
            <p className="mb-4 text-center text-[11px] uppercase tracking-wide text-white/40">Balance in motion</p>
            <div className="flex flex-col gap-2.5">
              {FLOW.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/5 text-[11px] font-medium text-lime">
                    {i + 1}
                  </span>
                  <span className="text-[13px] text-white/75">{step}</span>
                  {i < FLOW.length - 1 && <span className="ml-auto text-white/20">↓</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}