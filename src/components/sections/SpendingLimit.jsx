import { useState } from 'react'
import Reveal from '../Reveal.jsx'

export default function SpendingLimit() {
  const [balance, setBalance] = useState(100000)
  const limit = balance * 0.1

  return (
    <section className="border-t border-white/10 py-24 md:py-32">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Daily spending limit</p>
          <h2 className="mt-4 max-w-md font-display text-3xl font-semibold leading-tight text-offwhite md:text-4xl">
            Up to 10% of your eligible balance, per day.
          </h2>
          <p className="mt-5 max-w-md text-[14px] leading-relaxed text-white/55">
            If your balance changes, the applicable limit changes with it. Limits may also vary according to
            account status, compliance requirements, risk controls and product terms.
          </p>
          <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-skyzap/25 bg-skyzap/[0.06] px-4 py-3">
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-skyzap/40 text-[11px] font-semibold text-skyzap">
              i
            </span>
            <p className="text-[12.5px] leading-relaxed text-skyzap/90">
              Limits shown here are illustrative. Final limits depend on your account's risk and compliance status.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="glass rounded-2xl p-7">
            <label className="text-[13px] text-white/50" htmlFor="balance-slider">
              Eligible remaining balance
            </label>
            <p className="mt-2 font-mono text-3xl font-semibold text-offwhite">
              ₹{balance.toLocaleString('en-IN')}
            </p>
            <input
              id="balance-slider"
              type="range"
              min={5000}
              max={500000}
              step={5000}
              value={balance}
              onChange={(e) => setBalance(Number(e.target.value))}
              className="mt-4 w-full accent-lime"
            />

            <div className="mt-7 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-lime/25 bg-lime/[0.06] p-5">
              <div>
                <p className="text-[13px] text-white/50">Daily spending limit</p>
                <p className="mt-1 font-mono text-2xl font-semibold text-lime">
                  ₹{limit.toLocaleString('en-IN')}
                </p>
              </div>
              <span className="font-display text-2xl font-semibold text-lime/60">10%</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}