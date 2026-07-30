import React from 'react';
import Link from 'next/link';
import Reveal from '../components/UI/Reveal';
import { 
  Shield, Zap, Star, Lock, Award, ArrowRight, CheckCircle
} from 'lucide-react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mahadev Bookie | Online Cricket Betting, Casino & Sports Betting",
  description: "Join Mahadev Bookie for secure online cricket betting, live sports betting, casino games, instant betting IDs, competitive odds, and fast withdrawals in India.",
  alternates: {
    canonical: "/"
  }
};

const whatsappUrl = "https://wa.me/917589045547";

const heroBullets = [
  "Instant Betting ID Registration",
  "Live Cricket & Sports Betting",
  "Fast UPI Deposits & Withdrawals",
  "Secure & Encrypted Transactions",
  "24/7 WhatsApp Customer Support",
  "User-Friendly Mobile Experience"
];

const whyChooseUs = [
  {
    title: "Instant Account Activation",
    desc: "Receive your verified betting ID within minutes and start betting without unnecessary delays."
  },
  {
    title: "Multiple Sports Markets",
    desc: "Bet on cricket, football, tennis, kabaddi, horse racing, and many other international sporting events."
  },
  {
    title: "Live Casino Entertainment",
    desc: "Enjoy exciting live dealer games, Teen Patti, Poker, Baccarat, Blackjack, Roulette, Slots, Aviator, and more."
  },
  {
    title: "Safe Payment Methods",
    desc: "Deposit and withdraw funds using UPI, PhonePe, Google Pay, Paytm, Net Banking, and other convenient payment options."
  },
  {
    title: "Fast Withdrawals",
    desc: "Your winnings are processed quickly so you can access your funds without long waiting periods."
  },
  {
    title: "Dedicated Customer Support",
    desc: "Our experienced support team is available throughout the day to help with registration, deposits, withdrawals, or account-related questions."
  }
];

const officialPlatformAccess = [
  "Live Cricket Betting",
  "Football Betting",
  "Tennis Betting",
  "Casino Games",
  "Teen Patti",
  "Poker",
  "Aviator",
  "Andar Bahar",
  "Live Dealer Games"
];

const depositOptions = [
  "UPI",
  "Google Pay",
  "PhonePe",
  "Paytm",
  "Net Banking",
  "IMPS",
  "Bank Transfer"
];

const withdrawalBenefits = [
  "Fast Processing",
  "Secure Transactions",
  "Multiple Withdrawal Methods",
  "No Hidden Charges",
  "Easy Verification Process"
];

const creationSteps = [
  {
    step: "Step 1",
    title: "Contact Our Team",
    desc: "Click the WhatsApp button and connect with our registration team."
  },
  {
    step: "Step 2",
    title: "Share Your Details",
    desc: "Provide your basic information required to create your betting ID."
  },
  {
    step: "Step 3",
    title: "Verify Your Account",
    desc: "Complete the quick verification process to activate your account securely."
  },
  {
    step: "Step 4",
    title: "Deposit & Start Playing",
    desc: "Add funds using your preferred payment method and begin enjoying live sports betting and casino games."
  }
];

const customerReviews = [
  {
    name: "Rahul S.",
    loc: "Delhi",
    text: "The registration process was incredibly fast. I received my betting ID within minutes and withdrawals have always been smooth."
  },
  {
    name: "Aman K.",
    loc: "Punjab",
    text: "I mainly use Mahadev Bookie for live cricket betting. The odds are competitive and customer support responds quickly."
  },
  {
    name: "Vikram P.",
    loc: "Mumbai",
    text: "Secure payments, quick deposits, and an easy-to-use platform. I've recommended it to several friends."
  },
  {
    name: "Rohit G.",
    loc: "Jaipur",
    text: "Great overall experience with instant account activation and hassle-free transactions."
  }
];

const whatIsBookieAccess = [
  "Live Cricket Betting",
  "IPL Betting",
  "Football Betting",
  "Tennis Betting",
  "Casino Games",
  "Live Casino Tables",
  "Teen Patti",
  "Poker",
  "Aviator",
  "Slot Games"
];

const faqs = [
  {
    q: "1. What is Mahadev Bookie?",
    a: "Mahadev Bookie is an online betting ID provider that allows users to access sports betting and casino platforms through a verified account."
  },
  {
    q: "2. How do I get my betting ID?",
    a: "Simply contact our support team through WhatsApp, submit your basic information, complete verification, and receive your betting ID within minutes."
  },
  {
    q: "3. Which sports can I bet on?",
    a: "You can access betting markets for cricket, football, tennis, kabaddi, horse racing, and several other sports depending on available events."
  },
  {
    q: "4. Which payment methods are accepted?",
    a: "We support UPI, Google Pay, PhonePe, Paytm, Net Banking, IMPS, and bank transfers."
  },
  {
    q: "5. How long do withdrawals take?",
    a: "Withdrawal times vary depending on verification and payment method, but requests are generally processed as quickly as possible."
  },
  {
    q: "6. Is customer support available?",
    a: "Yes. Our support team is available daily to assist with registration, deposits, withdrawals, and account-related queries."
  },
  {
    q: "7. Can I use Mahadev Bookie on my mobile phone?",
    a: "Yes. The platform is mobile-friendly and works smoothly on Android and iOS devices through your browser."
  },
  {
    q: "8. Is registration free?",
    a: "Yes. Creating your betting ID through Mahadev Bookie is simple and does not require any registration fee."
  }
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#020a0a] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-8 pb-16 px-4 border-b border-teal-500/10 bg-gradient-to-b from-teal-950/20 to-transparent">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <Reveal xOffset={-30}>
              <div className="w-16 h-1 bg-teal-500 rounded-full mb-6"></div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight font-serif">
                Mahadev Bookie – Get Your <span className="text-teal-400">Official Online Betting ID</span> in Minutes
              </h1>
            </Reveal>

            <Reveal xOffset={-30} delay={0.1}>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                Join Mahadev Bookie and unlock a secure, fast, and reliable betting experience. Whether you enjoy live cricket betting, football, casino games, or other popular sports, our verified betting IDs provide quick access with smooth deposits, instant withdrawals, and 24/7 customer support.
              </p>
            </Reveal>

            <Reveal xOffset={-30} delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-4">
                {heroBullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                    <span className="text-zinc-200 text-sm font-medium">{bullet}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal xOffset={-30} delay={0.3}>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-500 text-[#020a0a] font-black px-8 py-4 hover:bg-teal-400 transition-colors uppercase tracking-wider flex items-center gap-2"
                >
                  Get Betting ID <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border border-teal-500 text-teal-400 font-bold px-8 py-4 hover:bg-teal-500/10 transition-colors uppercase tracking-wider flex items-center gap-2"
                >
                  WhatsApp Now
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <Reveal xOffset={30}>
              <div className="glass-card border border-teal-500/20 p-8 rounded-2xl bg-gradient-to-br from-teal-900/10 to-zinc-950/80 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-10">
                  <Lock className="w-32 h-32 text-teal-400" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-6 border-b border-teal-500/20 pb-4">
                  Why Players Trust Us
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Secure & Private</h4>
                      <p className="text-zinc-500 text-xs mt-1">End-to-end encrypted databases keep your gaming credentials safe.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Instant Cashouts</h4>
                      <p className="text-zinc-500 text-xs mt-1">Fastest withdrawals in the industry, direct to your UPI or bank account.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Official Distributor</h4>
                      <p className="text-zinc-500 text-xs mt-1">100% genuine IDs backed by the trusted Mahadev Book Brand.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 px-4 bg-[#010606] relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-serif font-black text-white">
                Why Choose <span className="text-teal-400">Mahadev Bookie</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-teal-400 font-bold uppercase tracking-wider text-sm">
                Experience Fast, Secure & Hassle-Free Online Betting
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Thousands of players choose Mahadev Bookie because we focus on providing a smooth betting experience from registration to withdrawals. Whether you're new to online betting or an experienced player, our platform offers everything you need under one account.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => (
              <Reveal key={idx} yOffset={30} delay={idx * 0.05}>
                <div className="glass-card border border-zinc-900 bg-zinc-950/45 p-8 hover:border-teal-500/30 transition-all duration-300 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center font-bold text-lg">
                      {idx + 1}
                    </div>
                    <h3 className="text-white font-serif font-bold text-lg">{item.title}</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mahadev Bookie – Official Betting ID Platform Section */}
      <section className="py-24 px-4 bg-[#020a0a] border-t border-teal-500/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <Reveal xOffset={-30}>
              <h2 className="text-3xl md:text-4xl font-serif font-black text-white">
                Mahadev Bookie – <span className="text-teal-400">Official Betting ID Platform</span>
              </h2>
            </Reveal>
            <Reveal xOffset={-30} delay={0.1}>
              <p className="text-teal-400 font-bold uppercase tracking-wider text-xs">
                Your Trusted Partner for Online Betting IDs
              </p>
            </Reveal>
            <Reveal xOffset={-30} delay={0.2}>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Mahadev Bookie is an online betting ID provider designed for users looking for quick registration, secure payments, and access to popular sports betting and casino platforms. We simplify the registration process so you can start enjoying your favourite betting markets with confidence.
              </p>
            </Reveal>
            <Reveal xOffset={-30} delay={0.3}>
              <p className="text-zinc-350 font-semibold text-sm">
                With one verified betting ID, you can access:
              </p>
            </Reveal>
            <Reveal xOffset={-30} delay={0.4}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {officialPlatformAccess.map((game, idx) => (
                  <div key={idx} className="bg-zinc-950/60 border border-zinc-900 px-4 py-2 text-xs font-semibold text-zinc-300 text-center hover:border-teal-500/30 transition-colors">
                    {game}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal xOffset={-30} delay={0.5}>
              <p className="text-zinc-550 text-xs italic">
                Our goal is to provide a reliable, secure, and user-friendly betting experience backed by responsive customer service and efficient account management. (Mahadev Book)
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <Reveal xOffset={30}>
              <div className="glass-card border border-teal-500/25 p-8 rounded-2xl bg-zinc-950/90 text-center space-y-6">
                <h3 className="text-2xl font-serif font-bold text-white">Create Your Account Today</h3>
                <p className="text-zinc-400 text-xs max-w-md mx-auto">
                  Click below to speak directly with an official Mahadev Book relationship manager on WhatsApp. Registration is fast, private, and secure.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-teal-500 text-[#020a0a] font-black px-8 py-4 hover:bg-teal-400 transition-colors uppercase tracking-wider"
                >
                  Get Verified ID Now
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Deposit & Withdrawal Section */}
      <section className="py-24 px-4 bg-[#010606] border-t border-teal-500/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-serif font-black text-white">
                Deposit & <span className="text-teal-400">Withdrawal</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-teal-400 font-bold uppercase tracking-wider text-xs">
                Fast, Safe & Convenient Transactions
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Managing your betting funds should be simple. That's why Mahadev Bookie supports multiple trusted payment methods for quick deposits and withdrawals.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Reveal xOffset={-30}>
              <div className="glass-card border border-zinc-900 bg-zinc-950/50 p-8 rounded-2xl h-full space-y-6">
                <h3 className="text-white font-serif font-bold text-xl border-b border-teal-500/20 pb-3">
                  Deposit Options
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {depositOptions.map((opt, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-zinc-300">
                      <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                      <span className="text-xs font-semibold">{opt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal xOffset={30}>
              <div className="glass-card border border-zinc-900 bg-zinc-950/50 p-8 rounded-2xl h-full space-y-6">
                <h3 className="text-white font-serif font-bold text-xl border-b border-teal-500/20 pb-3">
                  Withdrawal Benefits
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {withdrawalBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-zinc-300">
                      <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                      <span className="text-xs font-semibold">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="text-center">
            <Reveal>
              <p className="text-zinc-550 text-xs italic">
                Our payment system is designed to help players enjoy uninterrupted betting with minimal waiting time.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How to Create Your Account Section */}
      <section className="py-24 px-4 bg-[#020a0a] border-t border-teal-500/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-serif font-black text-white">
                How to Create <span className="text-teal-400">Your Account</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-teal-400 font-bold uppercase tracking-wider text-xs">
                Start Betting in Four Simple Steps
              </p>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {creationSteps.map((step, idx) => (
              <Reveal key={idx} yOffset={30} delay={idx * 0.1}>
                <div className="glass-card border border-zinc-900 bg-zinc-950/45 p-6 rounded-2xl h-full flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-teal-400 text-xs font-black uppercase tracking-wider bg-teal-500/10 border border-teal-500/30 px-3 py-1 rounded-full inline-block">
                      {step.step}
                    </span>
                    <h3 className="text-white font-serif font-bold text-base pt-2">{step.title}</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed font-light">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center">
            <Reveal>
              <p className="text-zinc-550 text-xs italic">
                The complete registration process usually takes only a few minutes.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-24 px-4 bg-[#010606] border-t border-teal-500/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-serif font-black text-white">
                Customer <span className="text-teal-400">Reviews</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-teal-400 font-bold uppercase tracking-wider text-xs">
                What Our Players Say
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {customerReviews.map((rev, idx) => (
              <Reveal key={idx} yOffset={30} delay={idx * 0.1}>
                <div className="glass-card border border-zinc-900 bg-zinc-950/60 p-6 rounded-2xl relative space-y-4 flex flex-col justify-between">
                  <div className="absolute top-6 right-6 flex gap-0.5 text-teal-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="space-y-2">
                    <p className="text-zinc-300 text-sm leading-relaxed italic">
                      "{rev.text}"
                    </p>
                    <div className="text-xs font-bold text-teal-400 pt-2">
                      - {rev.name} – <span className="text-zinc-500 font-light">{rev.loc}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What is Mahadev Bookie? Section */}
      <section className="py-24 px-4 bg-[#020a0a] border-t border-teal-500/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Reveal xOffset={-30}>
              <h2 className="text-3xl md:text-4xl font-serif font-black text-white">
                What is <span className="text-teal-400">Mahadev Bookie?</span>
              </h2>
            </Reveal>
            <Reveal xOffset={-30} delay={0.1}>
              <p className="text-teal-400 font-bold uppercase tracking-wider text-xs">
                Everything You Need to Know
              </p>
            </Reveal>
            <Reveal xOffset={-30} delay={0.2}>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Mahadev Bookie is an online betting ID service that helps players access sports betting and casino platforms through a verified account. Instead of going through lengthy registration procedures, users can quickly obtain a betting ID and start participating in various betting markets.
              </p>
            </Reveal>
            <Reveal xOffset={-30} delay={0.3}>
              <p className="text-zinc-350 font-semibold text-sm">
                With your Mahadev Bookie ID, you can enjoy:
              </p>
            </Reveal>
            <Reveal xOffset={-30} delay={0.4}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {whatIsBookieAccess.map((game, idx) => (
                  <div key={idx} className="bg-zinc-950/60 border border-zinc-900 px-4 py-2 text-xs font-semibold text-zinc-300 text-center hover:border-teal-500/30 transition-colors">
                    {game}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal xOffset={-30} delay={0.5}>
              <p className="text-zinc-550 text-xs italic">
                Our focus is on providing a secure registration process, fast payment support, reliable customer service, and a smooth betting experience for users. (Mahadev Book)
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <Reveal xOffset={30}>
              <div className="glass-card border border-teal-500/25 p-8 rounded-2xl bg-zinc-950/90 text-center space-y-6">
                <h3 className="text-xl font-serif font-bold text-white">Request A Verified ID</h3>
                <p className="text-zinc-400 text-xs max-w-sm mx-auto">
                  Sign up via WhatsApp now to claim your genuine ID credentials and access sports networks.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-teal-500 text-[#020a0a] font-black px-6 py-3.5 hover:bg-teal-400 transition-colors uppercase tracking-wider text-sm"
                >
                  Register via WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (CSS Accordion details/summary) */}
      <section className="py-24 bg-[#010606] px-4 border-t border-teal-500/10 font-sans">
        <div className="max-w-4xl mx-auto space-y-12">
          <Reveal>
            <h2 className="text-3xl font-serif font-black mb-2 text-center text-white">
              Frequently Asked <span className="text-teal-400">Questions</span>
            </h2>
          </Reveal>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={i} yOffset={20} delay={i * 0.05}>
                <details className="bg-[#020a0a] border border-teal-500/20 group [&_summary::-webkit-details-marker]:hidden rounded-xl overflow-hidden transition-all duration-300">
                  <summary className="w-full text-left p-5 flex justify-between items-center text-white font-bold hover:text-teal-400 cursor-pointer list-none select-none">
                    <span className="font-serif text-sm md:text-base pr-4">{f.q}</span>
                    <span className="text-teal-400 font-serif text-xl flex-shrink-0 leading-none">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">-</span>
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed border-t border-teal-500/10 pt-4 bg-zinc-950/40">
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Get Started? (Footer CTA Section) */}
      <section className="py-24 px-4 bg-[#020a0a] border-t border-teal-500/15 relative overflow-hidden bg-gradient-to-br from-teal-950/15 to-black text-center">
        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-serif font-black text-white mb-4">
              READY TO GET STARTED?
            </h2>
            <p className="text-teal-400 font-bold uppercase tracking-wider text-xs">
              Create Your Mahadev Bookie ID Today
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl mx-auto">
              Take the first step towards a seamless online betting experience. Register your Mahadev Bookie ID in just a few minutes and enjoy access to live sports betting, casino games, fast deposits, secure withdrawals, and dedicated customer support.
            </p>
            <p className="text-zinc-350 text-sm font-semibold max-w-2xl mx-auto pt-3">
              Whether you're interested in cricket, football, casino games, or live betting, Mahadev Bookie provides a smooth and reliable way to get started. Get Your Official Betting ID Now
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 text-[#020a0a] font-black px-8 py-4 hover:bg-teal-400 transition-colors uppercase tracking-wider flex items-center gap-2"
              >
                Register Now
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-teal-500 text-teal-400 font-bold px-8 py-4 hover:bg-teal-500/10 transition-colors uppercase tracking-wider flex items-center gap-2"
              >
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Fixed WhatsApp CTA */}
      <a 
        href={whatsappUrl} 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-teal-500 text-[#020a0a] p-4 rounded-full border border-teal-400 hover:bg-teal-400 z-50 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
      >
        <span className="sr-only">Contact WhatsApp Support</span>
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.847.002-2.632-1.02-5.107-2.882-6.973-1.862-1.865-4.343-2.891-6.976-2.893-5.44 0-9.866 4.417-9.869 9.851-.001 1.702.463 3.363 1.34 4.8l-.297 1.086 1.096-.288zM18.8 14.88c-.37-.185-2.183-1.077-2.52-1.2-.338-.123-.583-.185-.83.184-.245.37-.95 1.2-1.165 1.446-.215.246-.43.277-.8.09-2.03-1.01-3.327-1.8-4.646-4.062-.35-.598.35-.555.998-1.84.108-.216.054-.4-.027-.585-.08-.185-.83-2-1.137-2.74-.3-.727-.606-.63-.83-.64l-.708-.01c-.246 0-.645.093-.982.462-.338.37-1.288 1.26-1.288 3.076 0 1.815 1.32 3.57 1.503 3.816.184.246 2.598 3.967 6.293 5.56.88.378 1.566.603 2.1.776.884.28 1.688.24 2.324.145.71-.107 2.183-.893 2.49-1.754.307-.862.307-1.6.215-1.753-.092-.154-.338-.246-.708-.43z"/>
        </svg>
      </a>
    </div>
  );
}
