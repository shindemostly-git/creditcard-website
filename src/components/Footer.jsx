import { Link } from 'react-router-dom'

const COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'About', to: '/legal/about' },
      { label: 'How It Works', to: '/#how-it-works' },
      { label: 'Card', to: '/#card' },
      { label: 'Rewards', to: '/#rewards' },
      { label: 'Security', to: '/#security' },
      { label: 'FAQ', to: '/#faq' },
      { label: 'Contact', to: '/legal/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms & Conditions', to: '/legal/terms' },
      { label: 'Privacy Policy', to: '/legal/privacy' },
      { label: 'Risk Disclosure', to: '/legal/risk' },
      { label: 'Fees', to: '/legal/fees' },
      { label: 'Responsible Use', to: '/legal/responsible-use' },
    ],
  },
]

const SOCIALS = ['Instagram', 'X', 'LinkedIn', 'YouTube', 'Telegram']

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-lime to-electric text-sm font-bold text-ink">N</span>
              <span className="font-display text-lg font-semibold text-offwhite">Nova</span>
            </Link>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-white/50">
              A USDT-powered card experience for the digital generation. Load, spend and track eligible rewards from one balance.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-[11px] font-medium text-white/60 transition-colors hover:border-lime/40 hover:text-lime"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-[13px] font-semibold uppercase tracking-wide text-white/40">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.to.startsWith('/#') ? (
                      <a href={l.to} className="text-[14px] text-white/60 transition-colors hover:text-offwhite">
                        {l.label}
                      </a>
                    ) : (
                      <Link to={l.to} className="text-[14px] text-white/60 transition-colors hover:text-offwhite">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="max-w-3xl text-[12px] leading-relaxed text-white/35">
            Nova is a product concept. Card issuance is subject to partnership with a licensed card issuer and payment network.
            USDT custody, conversion and settlement mechanics, eligibility, fees and applicable regulatory status will be disclosed
            in full prior to onboarding. Cashback, rewards and interest figures referenced on this site are illustrative, not
            guaranteed, and subject to the applicable product terms. Nova is not a bank and is not RBI-approved or government-approved.
          </p>
          <p className="mt-4 text-[12px] text-white/30">© 2026 Nova. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}