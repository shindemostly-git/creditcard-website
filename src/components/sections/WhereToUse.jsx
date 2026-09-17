import Reveal from '../Reveal.jsx'

const PLACES = [
  ['☕', 'Cafés'],
  ['🍔', 'Restaurants'],
  ['🛍️', 'Shopping'],
  ['✈️', 'Travel'],
  ['🚕', 'Transport'],
  ['🎬', 'Entertainment'],
  ['📱', 'Online Shopping'],
  ['🏨', 'Hotels'],
  ['🛒', 'Daily Purchases'],
]

export default function WhereToUse() {
  return (
    <section className="border-t border-white/10 py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow">Where you can use it</p>
          <h2 className="mt-4 max-w-lg font-display text-3xl font-semibold leading-tight text-offwhite md:text-4xl">
            One card. Everyday India.
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9">
          {PLACES.map(([icon, label]) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-6 text-center transition-colors hover:border-lime/25"
            >
              <span className="text-2xl">{icon}</span>
              <span className="text-[12px] leading-tight text-white/60">{label}</span>
            </div>
          ))}
        </Reveal>

        <p className="mt-8 max-w-xl text-[13px] leading-relaxed text-white/40">
          Use your card wherever supported by the applicable payment network and merchant acceptance rules.
          Acceptance is not universal and depends on the payment network and individual merchants.
        </p>
      </div>
    </section>
  )
}
