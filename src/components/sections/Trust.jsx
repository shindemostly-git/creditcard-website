import Reveal from '../Reveal.jsx'

const POINTS = ['KYC', 'AML controls', 'Transaction monitoring', 'Secure authentication', 'Data protection', 'Card security', 'Regulatory disclosures', 'Terms & Conditions', 'Privacy Policy', 'Risk Disclosure']

export default function Trust() {
  return (
    <section className="border-t border-white/10 py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow">Trust & compliance</p>
          <h2 className="mt-4 max-w-lg font-display text-3xl font-semibold leading-tight text-offwhite md:text-4xl">
            Built with security and transparency in mind.
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-10 flex flex-wrap gap-3">
          {POINTS.map((p) => (
            <span key={p} className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-[13px] text-white/65">
              {p}
            </span>
          ))}
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <p className="text-[13.5px] leading-relaxed text-white/50">
              Nova does not claim to be RBI-approved, government-approved, or to offer a guaranteed return,
              unless legally verified and specifically authorized. The final product will clearly disclose the
              legal entity operating it, the card issuer and payment partner, custody arrangements, applicable
              jurisdiction, supported USDT networks, fees, risks, eligibility requirements and regulatory
              status before any user onboards.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
