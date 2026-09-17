import Reveal from '../Reveal.jsx'
import CardMock from '../CardMock.jsx'

const DIGITAL = ['Instant access', 'Built for online payments', 'Secured with strong authentication', 'Mobile-first', 'Easy to manage from the app']
const PHYSICAL = ['Premium build', 'Contactless payments', 'Made for everyday spending', 'Wallet-ready', 'Designed for modern users']

export default function CardSplit() {
  return (
    <section id="card" className="border-t border-white/10 py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow">Digital + physical</p>
          <h2 className="mt-4 max-w-lg font-display text-3xl font-semibold leading-tight text-offwhite md:text-4xl">
            One balance. Two ways to spend it.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="glass flex h-full flex-col rounded-2xl p-8">
              <CardMock variant="digital" tilt="" className="mx-auto mb-8" />
              <h3 className="text-[19px] font-medium text-offwhite">Digital Card</h3>
              <ul className="mt-4 flex-1 space-y-2.5">
                {DIGITAL.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px] text-white/60">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-lime" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#calculator" className="btn-secondary mt-7 self-start">
                Get Digital Card
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="glass flex h-full flex-col rounded-2xl p-8">
              <CardMock variant="physical" tilt="" className="mx-auto mb-8" />
              <h3 className="text-[19px] font-medium text-offwhite">Physical Card</h3>
              <ul className="mt-4 flex-1 space-y-2.5">
                {PHYSICAL.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px] text-white/60">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-electric" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#calculator" className="btn-primary mt-7 self-start">
                Order Physical Card
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
