import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const LINKS = [
  { label: 'Product', href: '/#product' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Rewards', href: '/#rewards' },
  { label: 'Card', href: '/#card' },
  { label: 'Security', href: '/#security' },
  { label: 'FAQ', href: '/#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="container-px mx-auto flex h-[74px] max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 focus-ring rounded-md" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-lime to-electric text-sm font-bold text-ink">N</span>
          <span className="font-display text-lg font-semibold tracking-tight text-offwhite">Nova</span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-[14px] font-medium text-white/70 transition-colors hover:text-offwhite focus-ring rounded-sm">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <button className="text-[14px] font-medium text-white/70 transition-colors hover:text-offwhite focus-ring rounded-sm px-2">
            Log In
          </button>
          <Link to="/create-card" className="btn-primary !px-5 !py-2.5 !text-[14px]">
            Create a Card
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-offwhite lg:hidden focus-ring"
        >
          <span className="relative block h-3.5 w-4">
            <span className={`absolute left-0 top-0 h-[1.5px] w-full bg-current transition-transform ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`absolute bottom-0 left-0 h-[1.5px] w-full bg-current transition-transform ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink/95 backdrop-blur-xl lg:hidden">
          <ul className="container-px mx-auto flex flex-col gap-1 py-4">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-[15px] font-medium text-white/80 hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex gap-3 px-3">
              <button className="btn-secondary flex-1 !py-2.5">Log In</button>
              <Link to="/create-card" onClick={() => setOpen(false)} className="btn-primary flex-1 !py-2.5">
                Create a Card
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}