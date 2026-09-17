import { Link } from 'react-router-dom'

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/90 p-3 backdrop-blur-xl lg:hidden">
      <Link to="/create-card" className="btn-primary block w-full">
        Create a Card →
      </Link>
    </div>
  )
}