import Reveal from '../Reveal.jsx'
import AnimatedNumber from '../AnimatedNumber.jsx'

export default function BalanceRewards() {
  return (
    <section className="border-t border-white/10 py-24 md:py-32">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <div className="glass rounded-2xl p-7">
            <p className="text-[13px] text-white/45">Example</p>
            <div className="mt-4 space-y-4">
              {[
                ['Balance', '₹1,00,000'],
                ['Monthly rate', '5%'],
                ['Monthly reward', '₹5,000'],
              ].map(([label, val], i) => (
                <div key={label} className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <span className="text-[14px] text-white/55">{label}</span>
                  <span className="font-mono text-[15px] text-offwhite">{val}</span>
                </div>
              ))}
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 rounded-xl border border-lime/25 bg-lime/[0.06] p-4">
                <span className="text-[14px] text-lime">Credited to card balance</span>
                <span className="font-mono text-[15px] text-lime">₹5,000</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="order-1 lg:order-2">
          <p className="eyebrow">Balance rewards</p>
          <h2 className="mt-4 font-display leading-none text-offwhite">
            <span className="block text-[110px] font-bold tracking-tight text-electric md:text-[150px]">
              <AnimatedNumber value={5} suffix="%" />
            </span>
          </h2>
          <p className="mt-2 text-[18px] font-medium text-offwhite">
            Monthly reward on your eligible remaining balance.
          </p>
          <p className="mt-4 max-w-md text-[14px] leading-relaxed text-white/55">
            Keep an eligible balance on your card account and receive the applicable monthly reward according
            to the product's terms. Actual rates, eligibility, calculation method, caps, taxes and regulatory
            conditions will be shown in full in the final product terms.
          </p>
        </Reveal>
      </div>
    </section>
  )
}