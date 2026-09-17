import Reveal from '../Reveal.jsx'

const FEATURES = [
  ['Real-Time Balance', 'See your available balance instantly, whenever you open the app.'],
  ['Spending Controls', 'Monitor and manage your card activity as it happens.'],
  ['Transaction Notifications', 'Get instant notifications for eligible transactions.'],
  ['Card Freeze', 'Temporarily freeze your card from the app in one tap.'],
  ['Secure Authentication', 'Strong authentication and account security controls throughout.'],
  ['Transparent Dashboard', 'Balance, deposits, spending, cashback, rewards and limits in one view.'],
]

export default function Security() {
  return (
    <section id="security" className="border-t border-white/10 py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow">Your money, your control</p>
          <h2 className="mt-4 max-w-lg font-display text-3xl font-semibold leading-tight text-offwhite md:text-4xl">
            Nothing about your balance should feel opaque.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(([title, body], i) => (
            <Reveal key={title} delay={i * 60}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6">
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
