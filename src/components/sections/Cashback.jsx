import Reveal from '../Reveal.jsx'
import AnimatedNumber from '../AnimatedNumber.jsx'

export default function Cashback() {
  return (
    <section id="rewards" className="border-t border-white/10 py-24 md:py-32">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Cashback</p>
          <h2 className="mt-4 font-display leading-none text-offwhite">
            <span className="block text-[110px] font-bold tracking-tight text-lime md:text-[150px]">
              <AnimatedNumber value={2} suffix="%" />
            </span>
          </h2>
          <p className="mt-2 text-[18px] font-medium text-offwhite">Cashback on eligible spending.</p>
          <p className="mt-4 max-w-md text-[14px] leading-relaxed text-white/55">
            Cashback is subject to applicable eligibility, merchant categories, limits and terms. Rates shown
            here are illustrative of the product concept.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="glass rounded-2xl p-7">
            <div className="flex items-center justify-between text-[13px] text-white/45">
              <span>Example transaction</span>
              <span>Eligible spend</span>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div>
                <p className="text-[14px] font-medium text-offwhite">Coffee Shop</p>
                <p className="text-[12px] text-white/40">Card payment</p>
              </div>
              <p className="font-mono text-[15px] text-offwhite">₹450</p>
            </div>

            <div className="my-3 flex items-center justify-center text-white/25">↓ 2% cashback ↓</div>

            <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 rounded-xl border border-lime/25 bg-lime/[0.06] p-4">
              <div>
                <p className="text-[14px] font-medium text-lime">Cashback</p>
                <p className="text-[12px] text-white/40">Credited to balance</p>
              </div>
              <p className="font-mono text-[15px] text-lime">+₹9</p>
            </div>

            <div className="mt-6 border-t border-white/10 pt-5">
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[13px]">
                <span className="text-white/50">Spend ₹10,000</span>
                <span className="font-mono text-offwhite">₹200 cashback</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}