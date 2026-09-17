import Reveal from '../Reveal.jsx'

export default function Referral() {
  return (
    <section className="border-t border-white/10 py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-violet/20 via-panel to-ink p-10 md:p-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-lime/20 blur-[100px]" />
            <div className="pointer-events-none absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-electric/25 blur-[100px]" />

            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div>
                <p className="eyebrow">Referrals</p>
                <h2 className="mt-4 max-w-md font-display text-3xl font-semibold leading-tight text-offwhite md:text-4xl">
                  Your friends should get in too.
                </h2>
                <p className="mt-4 max-w-md text-[14px] leading-relaxed text-white/55">
                  Invite friends, grow your community and unlock applicable referral rewards.
                </p>
              </div>
              <a href="#calculator" className="btn-primary shrink-0">
                Invite Friends
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
