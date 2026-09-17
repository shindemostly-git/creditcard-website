export default function CardMock({ variant = 'physical', className = '', tilt = '-rotate-6' }) {
  const isDigital = variant === 'digital'
  return (
    <div
      className={`relative aspect-[1.586/1] w-full min-w-0 max-w-[380px] rounded-[22px] border border-white/15 p-5 shadow-glowViolet sm:p-6 ${tilt} ${className}`}
      style={{
        background: isDigital
          ? 'linear-gradient(135deg, #171233 0%, #241a4d 45%, #0b0f1f 100%)'
          : 'linear-gradient(135deg, #0e1226 0%, #1b1440 55%, #05060a 100%)',
      }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[22px] bg-[radial-gradient(circle_at_85%_15%,rgba(182,255,60,0.25),transparent_55%)]" />
      <div className="flex items-start justify-between">
        <span className="font-display text-[14px] font-semibold tracking-tight text-offwhite sm:text-[15px]">Nova</span>
        <span className="rounded-full border border-white/20 px-2 py-1 text-[9px] font-medium text-white/70 sm:px-2.5 sm:text-[10px]">
          {isDigital ? 'Digital' : 'Physical'}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2.5 sm:mt-6 sm:gap-3">
        <div className="h-6 w-8 shrink-0 rounded-md bg-gradient-to-br from-yellow-200/80 to-yellow-500/60 sm:h-7 sm:w-9" />
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 text-skyzap/80 sm:h-[18px] sm:w-[18px]">
          <path d="M4 9a11 11 0 0116 0M7 12.5a6.5 6.5 0 0110 0M10 16a2.2 2.2 0 014 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
        <span className="ml-auto shrink-0 rounded-full bg-lime/15 px-2 py-0.5 text-[9px] font-semibold text-lime sm:text-[10px]">USDT</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1 font-mono text-[12px] tracking-[0.1em] text-white/85 sm:mt-6 sm:text-[15px] sm:tracking-[0.18em]">
        <span>4291</span>
        <span>18••</span>
        <span>••••</span>
        <span>7042</span>
      </div>

      <div className="mt-4 flex items-end justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-[8.5px] uppercase tracking-wide text-white/40 sm:text-[9px]">Card holder</p>
          <p className="truncate text-[11px] font-medium text-white/85 sm:text-[12px]">A. Sharma</p>
        </div>
        <div className="min-w-0 text-right">
          <p className="truncate text-[8.5px] uppercase tracking-wide text-white/40 sm:text-[9px]">Expires</p>
          <p className="truncate text-[11px] font-medium text-white/85 sm:text-[12px]">09/30</p>
        </div>
      </div>
    </div>
  )
}