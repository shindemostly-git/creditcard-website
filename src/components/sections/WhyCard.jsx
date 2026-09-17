import Reveal from '../Reveal.jsx'

const FEATURES = [
  ['USDT Powered', 'Use your eligible USDT balance through a card-based payment experience.'],
  ['2% Cashback', 'Earn cashback on eligible spending, credited back to your balance.'],
  ['Monthly Balance Rewards', 'Receive the applicable monthly reward on your eligible balance.'],
  ['Digital + Physical', 'Choose the card format that fits your lifestyle — or use both.'],
  ['UPI Connected', 'Connect your UPI identity where supported for everyday payments.'],
  ['Built for Digital India', 'Designed for people who live online and spend digitally.'],
]

export default function WhyCard() {
  return (
    <section className="border-t border-white/10 py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow">Why Nova</p>
          <h2 className="mt-4 max-w-lg font-display text-3xl font-semibold leading-tight text-offwhite md:text-4xl">
            Built around one balance, not five apps.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(([title, body], i) => (
            <Reveal key={title} delay={i * 60}>
              <div className="h-full bg-ink p-7">
                <h3 className="text-[16px] font-medium text-offwhite">{title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-white/55">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
