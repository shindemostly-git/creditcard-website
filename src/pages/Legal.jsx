import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

const COPY = {
  about: {
    title: 'About Nova',
    body: `Nova is building a payment experience that connects an eligible USDT balance to everyday spending in India through a digital and physical card, linked to UPI where supported. This page is a placeholder — replace it with your registered legal entity name, incorporation details and a plain-language description of what Nova does and does not do.`,
  },
  contact: {
    title: 'Contact Us',
    body: `Reach the Nova team for support, partnerships or press. Replace this placeholder with a real support email, registered office address and grievance-officer contact as required by applicable regulation.`,
  },
  terms: {
    title: 'Terms & Conditions',
    body: `This is placeholder legal copy. Before launch, replace this page with full Terms & Conditions covering account eligibility, card issuance, fees, USDT custody, spending limits, cashback and reward mechanics, suspension/termination rights, and dispute resolution, reviewed by qualified legal counsel in every jurisdiction you operate in.`,
  },
  privacy: {
    title: 'Privacy Policy',
    body: `This is placeholder legal copy. Before launch, replace this page with a full Privacy Policy describing what personal and KYC data is collected, how it is stored and secured, who it is shared with (card issuer, payment partner, custodians), retention periods, and user rights, consistent with applicable data protection law.`,
  },
  risk: {
    title: 'Risk Disclosure',
    body: `Digital assets are volatile and involve risk, including possible loss of value. This is placeholder copy. Before launch, replace this page with a full disclosure of custody risk, USDT/stablecoin de-peg risk, regulatory risk, card network and merchant acceptance limits, and the fact that rewards, cashback and interest rates are not guaranteed and are subject to change.`,
  },
  fees: {
    title: 'Fees',
    body: `This is placeholder copy. Before launch, list every applicable fee here: card issuance, load/deposit, monthly or annual maintenance, ATM withdrawal, FX conversion, inactivity, and closure fees, along with how and when each is charged.`,
  },
  'responsible-use': {
    title: 'Responsible Use',
    body: `Only load an eligible balance you understand and are comfortable holding on the platform. Cashback, rewards and interest figures shown across this site are illustrative and subject to eligibility, limits and the applicable product terms in force at the time of your transaction.`,
  },
}

export default function Legal() {
  const { slug } = useParams()
  const entry = COPY[slug] || {
    title: 'Page not found',
    body: `We couldn't find that page. It may have moved — use the links below or head back to the homepage.`,
  }

  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main className="container-px mx-auto max-w-3xl pb-32 pt-40">
        <p className="eyebrow mb-4">Nova / Legal</p>
        <h1 className="text-4xl font-semibold text-offwhite md:text-5xl">{entry.title}</h1>
        <p className="mt-6 text-[15px] leading-relaxed text-white/60">{entry.body}</p>
        <Link to="/" className="btn-secondary mt-10">← Back to home</Link>
      </main>
      <Footer />
    </div>
  )
}