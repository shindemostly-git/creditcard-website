import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import StickyMobileCTA from '../components/StickyMobileCTA.jsx'

import Hero from '../components/sections/Hero.jsx'
import Problem from '../components/sections/Problem.jsx'
import HowItWorks from '../components/sections/HowItWorks.jsx'
import Cashback from '../components/sections/Cashback.jsx'
import BalanceRewards from '../components/sections/BalanceRewards.jsx'
import RewardLoop from '../components/sections/RewardLoop.jsx'
import SpendingLimit from '../components/sections/SpendingLimit.jsx'
import CardSplit from '../components/sections/CardSplit.jsx'
import WhereToUse from '../components/sections/WhereToUse.jsx'
import Security from '../components/sections/Security.jsx'
import AppPreview from '../components/sections/AppPreview.jsx'
import WhyCard from '../components/sections/WhyCard.jsx'
import Calculator from '../components/sections/Calculator.jsx'
import Referral from '../components/sections/Referral.jsx'
import FAQ from '../components/sections/FAQ.jsx'
import Trust from '../components/sections/Trust.jsx'
import FinalCTA from '../components/sections/FinalCTA.jsx'

export default function Home() {
  return (
    <div className="min-h-screen bg-ink pb-16 lg:pb-0">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Cashback />
        <BalanceRewards />
        <RewardLoop />
        <SpendingLimit />
        <CardSplit />
        <WhereToUse />
        <Security />
        <AppPreview />
        <WhyCard />
        <Calculator />
        <Referral />
        <FAQ />
        <Trust />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}