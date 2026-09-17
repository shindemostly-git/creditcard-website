import { useMemo, useState } from 'react'
import Reveal from '../Reveal.jsx'

export default function Calculator() {
  const [balance, setBalance] = useState('100000')
  const [spending, setSpending] = useState('20000')

  const { reward, cashback, total } = useMemo(() => {
    const b = Math.max(0, Number(balance) || 0)
    const s = Math.max(0, Number(spending) || 0)
    const r = b * 0.05
    const c = s * 0.02
    return { reward: r, cashback: c, total: r + c }
  }, [balance, spending])

  const fmt = (n) => `₹${n.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`

  return (
    <section id="calculator" className="border-t border-white/10 py-24 md:py-32">
      <div className="container-px mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="eyebrow justify-center">Calculator</p>
          <h2 className="mx-auto mt-4 max-w-md font-display text-3xl font-semibold leading-tight text-offwhite md:text-4xl">
            See your potential rewards.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="glass mt-12 grid gap-8 rounded-2xl p-5 sm:p-8 md:grid-cols-2 md:p-10">
            <div className="space-y-6">
              <div>
                <label className="text-[13px] text-white/50" htmlFor="calc-balance">
                  Your balance
                </label>
                <div className="mt-2 flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3">
                  <span className="text-white/40">₹</span>
                  <input
                    id="calc-balance"
                    type="number"
                    min="0"
                    value={balance}
                    onChange={(e) => setBalance(e.target.value)}
                    className="w-full bg-transparent font-mono text-[15px] text-offwhite outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[13px] text-white/50" htmlFor="calc-spend">
                  Monthly spending
                </label>
                <div className="mt-2 flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3">
                  <span className="text-white/40">₹</span>
                  <input
                    id="calc-spend"
                    type="number"
                    min="0"
                    value={spending}
                    onChange={(e) => setSpending(e.target.value)}
                    className="w-full bg-transparent font-mono text-[15px] text-offwhite outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-3">
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 sm:px-4 sm:py-3.5">
                <span className="text-[12.5px] text-white/55 sm:text-[13px]">Estimated monthly reward</span>
                <span className="font-mono text-[15px] text-offwhite">{fmt(reward)}</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 sm:px-4 sm:py-3.5">
                <span className="text-[12.5px] text-white/55 sm:text-[13px]">Estimated cashback</span>
                <span className="font-mono text-[15px] text-offwhite">{fmt(cashback)}</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 rounded-xl border border-lime/25 bg-lime/[0.08] px-3 py-3.5 sm:px-4 sm:py-4">
                <span className="text-[12.5px] font-medium text-lime sm:text-[13px]">Total estimated rewards</span>
                <span className="font-mono text-[16px] font-semibold text-lime sm:text-[17px]">{fmt(total)}</span>
              </div>
            </div>
          </div>
        </Reveal>

        <p className="mx-auto mt-6 max-w-lg text-center text-[12px] leading-relaxed text-white/35">
          Illustrative calculation only. Actual rewards, cashback, eligibility, limits and applicable rates are
          subject to product terms and applicable laws and regulations.
        </p>
      </div>
    </section>
  )
}