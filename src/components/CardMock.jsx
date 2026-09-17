export default function CardMock({ variant = 'physical', className = '', tilt = '-rotate-6' }) {
  const isDigital = variant === 'digital'
  return (
    <div
      className={`relative aspect-[1.586/1] w-full max-w-[380px] rounded-[22px] border border-white/15 p-6 shadow-glowViolet ${tilt} ${className}`}
      style={{
        background: isDigital
          ? 'linear-gradient(135deg, #171233 0%, #241a4d 45%, #0b0f1f 100%)'
          : 'linear-gradient(135deg, #0e1226 0%, #1b1440 55%, #05060a 100%)',
      }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[22px] bg-[radial-gradient(circle_at_85%_15%,rgba(182,255,60,0.25),transparent_55%)]" />
      <div className="flex items-start justify-between">
        <span className="font-display text-[15px] font-semibold tracking-tight text-offwhite">Nova</span>
        <span className="rounded-full border border-white/20 px-2.5 py-1 text-[10px] font-medium text-white/70">
          {isDigital ? 'Digital' : 'Physical'}
        </span>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <div className="h-7 w-9 rounded-md bg-gradient-to-br from-yellow-200/80 to-yellow-500/60" />
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-skyzap/80">
          <path d="M4 9a11 11 0 0116 0M7 12.5a6.5 6.5 0 0110 0M10 16a2.2 2.2 0 014 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
        <span className="ml-auto rounded-full bg-lime/15 px-2 py-0.5 text-[10px] font-semibold text-lime">USDT</span>
      </div>

      <p className="mt-6 font-mono text-[15px] tracking-[0.18em] text-white/85">4291&nbsp;&nbsp;18••&nbsp;&nbsp;••••&nbsp;&nbsp;7042</p>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="text-[9px] uppercase tracking-wide text-white/40">Card holder</p>
          <p className="text-[12px] font-medium text-white/85">A. Sharma</p>
        </div>
        <div>
          <p className="text-[9px] uppercase tracking-wide text-white/40">Expires</p>
          <p className="text-[12px] font-medium text-white/85">09/30</p>
        </div>
      </div>
    </div>
  )
}