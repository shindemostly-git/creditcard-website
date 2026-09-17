import Reveal from '../Reveal.jsx'

const CARDS = [
  {
    tag: 'Hold',
    title: 'Keep your balance where it already is',
    body: 'Keep your eligible USDT balance on the platform, ready whenever you need to spend.',
  },
  {
    tag: 'Spend',
    title: 'Pay like you always have',
    body: 'Use your digital or physical card for eligible purchases, online and in person.',
  },
  {
    tag: 'Reward',
    title: 'Let eligible activity work for you',
    body: 'Receive cashback on eligible spending and rewards on your eligible remaining balance, subject to terms.',
  },
]

export default function Problem() {
  return (
    <section id="product" className="border-t border-white/10 py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow">The problem</p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight text-offwhite md:text-4xl">
            Crypto shouldn't feel complicated.
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/55">
            Traditional crypto users often have assets sitting inside wallets or exchanges, while everyday
            spending still happens through separate payment methods. Nova closes that gap: USDT → card →
            everyday spending, in one place.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.tag} delay={i * 100}>
              <div className="glass h-full rounded-2xl p-7">
                <span className="text-[13px] font-semibold text-lime">{c.tag}</span>
                <h3 className="mt-4 text-[18px] font-medium text-offwhite">{c.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-white/55">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}