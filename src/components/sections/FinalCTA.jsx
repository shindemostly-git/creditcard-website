import Reveal from '../Reveal.jsx'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 py-28 md:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-electric/25 blur-[130px]" />
      <div className="container-px relative mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold leading-tight text-offwhite md:text-5xl">
            Ready to turn your USDT into everyday spending power?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/55">
            Create your card. Connect your account. Spend smarter.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a href="#calculator" className="btn-primary">
              Create a Card →
            </a>
            <a href="#hero" className="btn-secondary">
              Download App
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
