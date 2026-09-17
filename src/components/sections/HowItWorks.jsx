import Reveal from '../Reveal.jsx'

const STEPS = [
  {
    n: '01',
    title: 'Load USDT',
    body: 'Transfer USDT to your account.',
    visual: 'USDT → Your Card Balance',
  },
  {
    n: '02',
    title: 'Create your card',
    body: 'Choose a digital card or a physical card — or both.',
    cta: 'Create a Card',
  },
  {
    n: '03',
    title: 'Connect your UPI',
    body: 'Connect your verified UPI ID with your account or card, where supported.',
    visual: 'UPI ID ⇄ Nova Account',
  },
  {
    n: '04',
    title: 'Spend & earn',
    body: 'Use your card for eligible transactions and let your balance keep working.',
    visual: 'Spend → Cashback  ·  Balance → Monthly Reward',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-white/10 py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow">How it works</p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight text-offwhite md:text-4xl">
            Four steps from balance to everyday spending.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 90} className="h-full">
              <div className="flex h-full flex-col bg-ink p-7">
                <span className="font-mono text-[13px] text-lime">{s.n}</span>
                <h3 className="mt-4 text-[17px] font-medium text-offwhite">{s.title}</h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-white/55">{s.body}</p>
                {s.visual && (
                  <p className="mt-5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[11px] leading-relaxed text-white/50">
                    {s.visual}
                  </p>
                )}
                {s.cta && (
                  <a href="#calculator" className="mt-5 inline-flex text-[13px] font-semibold text-lime hover:underline">
                    {s.cta} →
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
