import { useState } from 'react'
import Reveal from '../Reveal.jsx'

const ITEMS = [
  ['What is this card?', 'A digital and physical card designed to provide a payment experience linked to an eligible USDT balance.'],
  ['How do I load USDT?', 'You can transfer eligible USDT through supported deposit methods and networks.'],
  ['Can I use the card in India?', 'Card usage depends on supported payment networks, merchant acceptance and applicable regulations.'],
  ['How does cashback work?', 'Eligible card transactions can receive cashback according to the applicable cashback program terms.'],
  ['How does the 5% monthly reward work?', 'Eligible remaining balances may receive the applicable monthly reward, subject to product terms, eligibility, limits and applicable regulations.'],
  ['Can I withdraw my balance?', 'Withdrawal and redemption will follow a clearly defined mechanism, disclosed in full in the product terms before you onboard.'],
  ['Is there a daily spending limit?', 'Yes. The product applies a daily limit based on the eligible remaining balance and applicable risk and compliance controls.'],
  ['Is USDT converted into INR?', 'The conversion and settlement mechanism used by the product will be clearly explained in the product terms.'],
]

function FAQItem({ q, a, open, onToggle }) {
  return (
    <div className="border-b border-white/10 py-5">
      <button
        onClick={onToggle}
        className="focus-ring flex w-full items-center justify-between gap-6 rounded-md text-left"
        aria-expanded={open}
      >
        <span className="text-[15px] font-medium text-offwhite">{q}</span>
        <span className={`shrink-0 text-lime transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div
        className="grid overflow-hidden transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pt-3 text-[14px] leading-relaxed text-white/55">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="border-t border-white/10 py-24 md:py-32">
      <div className="container-px mx-auto max-w-3xl">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-offwhite md:text-4xl">
            Questions, answered plainly.
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          {ITEMS.map(([q, a], i) => (
            <FAQItem key={q} q={q} a={a} open={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
