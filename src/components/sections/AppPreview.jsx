import Reveal from '../Reveal.jsx'

const TRANSACTIONS = [
  ['Starbucks', '-10 USDT', false],
  ['Amazon', '-35 USDT', false],
  ['Uber', '-8 USDT', false],
  ['Cashback', '+0.20 USDT', true],
]

export default function AppPreview() {
  return (
    <section className="border-t border-white/10 py-24 md:py-32">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Inside the app</p>
          <h2 className="mt-4 max-w-md font-display text-3xl font-semibold leading-tight text-offwhite md:text-4xl">
            Everything about your balance, on one screen.
          </h2>
          <p className="mt-5 max-w-md text-[14px] leading-relaxed text-white/55">
            Balance, today's spending limit, cashback earned and this month's reward — always visible, never
            buried in menus.
          </p>
        </Reveal>

        <Reveal delay={100} className="flex justify-center">
          <div className="glass w-full max-w-[320px] rounded-[32px] p-5">
            <p className="text-[15px] font-medium text-offwhite">Good morning 👋</p>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[11px] uppercase tracking-wide text-white/40">Available balance</p>
              <p className="mt-1 font-display text-2xl font-semibold text-offwhite">1,250 USDT</p>
              <p className="text-[12px] text-white/40">Approx. ₹1,04,375</p>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center justify-between">
                <p className="text-[11px] uppercase tracking-wide text-white/40">Today's spending limit</p>
                <p className="text-[12px] font-medium text-offwhite">125 USDT</p>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-3/5 rounded-full bg-lime" />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[10px] uppercase tracking-wide text-white/40">Cashback earned</p>
                <p className="mt-1 text-[15px] font-semibold text-lime">24.50 USDT</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[10px] uppercase tracking-wide text-white/40">Monthly reward</p>
                <p className="mt-1 text-[15px] font-semibold text-electric">52.30 USDT</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-[11px] uppercase tracking-wide text-white/40">Recent transactions</p>
              <div className="mt-2 space-y-1">
                {TRANSACTIONS.map(([name, amt, positive]) => (
                  <div key={name} className="flex items-center justify-between rounded-xl px-2 py-2.5 hover:bg-white/[0.03]">
                    <span className="text-[13px] text-white/75">{name}</span>
                    <span className={`font-mono text-[13px] ${positive ? 'text-lime' : 'text-white/60'}`}>{amt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
