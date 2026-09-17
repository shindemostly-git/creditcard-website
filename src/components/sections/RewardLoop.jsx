import Reveal from '../Reveal.jsx'

const NODES = [
  { label: 'USDT Balance', angle: -90 },
  { label: 'Monthly Reward', angle: -18 },
  { label: 'Added to Balance', angle: 54 },
  { label: 'Spend', angle: 126 },
  { label: '2% Cashback', angle: 198 },
]

const R = 150
const CENTER = 190

function pos(angle) {
  const rad = (angle * Math.PI) / 180
  return { x: CENTER + R * Math.cos(rad), y: CENTER + R * Math.sin(rad) }
}

export default function RewardLoop() {
  return (
    <section className="border-t border-white/10 py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="text-center">
          <p className="eyebrow justify-center">The compounding loop</p>
          <h2 className="mx-auto mt-4 max-w-lg font-display text-3xl font-semibold leading-tight text-offwhite md:text-4xl">
            Your balance keeps working.
          </h2>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-14 flex max-w-3xl justify-center">
          <div className="relative aspect-square w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px]">
            <svg viewBox="0 0 380 380" className="absolute inset-0 h-full w-full animate-spinSlow" style={{ animationDuration: '40s' }}>
              <circle cx={CENTER} cy={CENTER} r={R} fill="none" stroke="url(#loopGradient)" strokeWidth="1.5" strokeDasharray="4 8" />
              <defs>
                <linearGradient id="loopGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#b6ff3c" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.7" />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute inset-0 grid place-items-center">
              <div className="glass grid h-20 w-20 place-items-center rounded-full text-center sm:h-24 sm:w-24 md:h-28 md:w-28">
                <div>
                  <p className="text-[9px] uppercase tracking-wide text-white/40 sm:text-[10px]">Nova</p>
                  <p className="text-[11px] font-semibold text-lime sm:text-[13px]">Balance Loop</p>
                </div>
              </div>
            </div>

            {NODES.map((node) => {
              const { x, y } = pos(node.angle)
              return (
                <div
                  key={node.label}
                  className="glass absolute w-[92px] -translate-x-1/2 -translate-y-1/2 rounded-xl px-2 py-2 text-center sm:w-[110px] sm:px-2.5 md:w-[130px] md:px-3 md:py-2.5"
                  style={{ left: `${(x / 380) * 100}%`, top: `${(y / 380) * 100}%` }}
                >
                  <p className="text-[10px] font-medium leading-tight text-white/80 sm:text-[11px] md:text-[12px]">{node.label}</p>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}