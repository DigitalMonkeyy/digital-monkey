"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const referralLink = "https://veve.sjv.io/55KMoN";

const fadeUp = {
  hidden: { opacity: 0, y: 48, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const staggerWrap = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const collectibles = [
  {
    name: "Todd Batman FA",
    collection: "Batman Black & White",
    tag: "Genesis Grail",
    image: "/collectibles/batman.png",
  },
  {
    name: "Spider-Man FA",
    collection: "Modern Marvel S1 - Spider-Man",
    tag: "Blue Chip",
    image: "/collectibles/spiderman.png",
  },
  {
    name: "Superman FA",
    collection: "Superman - S1",
    tag: "Iconic IP",
    image: "/collectibles/superman.png",
  },
  {
    name: "Partners Statue FA",
    collection: "Walt Disney & Mickey Mouse",
    tag: "Iconic IP",
    image: "/collectibles/walt.png",
  },
];

const signals = [
  { label: "Special Mint", value: "Detected" },
  { label: "Grail Watch", value: "Active" },
  { label: "Market Signal", value: "Live" },
];

const pillars = [
  {
    title: "Creator",
    text: "I turn digital collecting, VeVe, OMI, and Web3 trends into content people can understand and share.",
  },
  {
    title: "Collector",
    text: "I focus on grails, historic drops, blue-chip IP, and the pieces that could define digital ownership culture.",
  },
  {
    title: "Builder",
    text: "I build tools that surface matching mints, listings, sales, and collector opportunities.",
  },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, 90]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -220]);

  return (
    <main className="min-h-screen bg-[#07080d] text-[#f7f7f8] selection:bg-[#f5c542] selection:text-black">
      <section className="relative min-h-screen overflow-hidden border-b border-white/10">
        <motion.div
          style={{ y: glowY }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(245,197,66,0.30),transparent_34%),radial-gradient(circle_at_12%_30%,rgba(255,255,255,0.10),transparent_28%),radial-gradient(circle_at_90%_35%,rgba(245,197,66,0.10),transparent_28%),linear-gradient(180deg,#11131a_0%,#07080d_70%)]"
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(7,8,13,0.85)_100%)]" />


        {/* Left Monkey */}
        <img
          src="/collectibles/monkey-left.png"
          alt=""
          className="pointer-events-none absolute left-0 top-[12%] md:top-[30%] -translate-y-1/2 z-10 w-[40vw] max-w-[220px] opacity-70 md:w-[28vw] md:max-w-[420px] md:opacity-90"
        />

        {/* Right Monkey (mirrored) */}
        <img
          src="/collectibles/monkey-right.png"
          alt=""
          className="pointer-events-none absolute right-0 top-[12%] md:top-[30%] -translate-y-1/2 z-10 w-[40vw] max-w-[220px] scale-x-[-1] opacity-70 md:w-[28vw] md:max-w-[420px] md:opacity-90"
        />

        <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl overflow-hidden border border-white/10 bg-white/10 backdrop-blur">
              <img
                src="/collectibles/logo.png"
                alt="Digital Monkey"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <a
                href="https://x.com/digitalmonkeyy"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/collectibles/logo-text.png"
                  alt="Digital Monkey"
                  className="h-7 object-contain hover:opacity-80 transition"
                />
              </a>
              <p className="text-xs text-white/40">Creator • Collector • Builder</p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium text-white/50 md:flex">
            <a href="#collection" className="transition hover:text-white">Collection</a>
            <a href="https://x.com/VeVeAlert" className="transition hover:text-white">Mint Alerts</a>
            <a href="https://x.com/TrackerVeve" className="transition hover:text-white">Tracker</a>
            <a href="#about" className="transition hover:text-white">About</a>
          </div>

          <a
            href={referralLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#f5c542]"
          >
            Start on VeVe
          </a>
        </nav>

        <motion.div style={{ y: heroY }} className="relative z-20 mx-auto max-w-7xl px-6 pb-24 pt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-7 w-fit rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-sm font-medium text-white/65 shadow-2xl shadow-black/30 backdrop-blur-xl"
          >
            Documenting the rise of digital ownership
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-6xl text-6xl font-semibold leading-[0.88] tracking-[-0.08em] text-white md:text-8xl lg:text-9xl"
          >
            The future of collecting, made obvious.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/58 md:text-xl"
          >
            I’m Digital Monkey — a creator focused on VeVe digital collectibles, OMI, Web3 ecosystems, and the opportunities most people are still sleeping on.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <a
              href={referralLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-8 py-4 font-semibold text-black shadow-2xl shadow-white/10 transition hover:bg-[#f5c542]"
            >
              Start Collecting
            </a>
            <a
              href="#tracker"
              className="rounded-full border border-white/10 bg-white/[0.06] px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/[0.1]"
            >
              View Tracker
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-20 max-w-6xl rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-black/50 backdrop-blur-2xl"
          >
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b0d13] text-left">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>
                <a href="https://x.com/VeVeAlert" target="_blank" rel="noreferrer" className="text-xs font-semibold text-white/70 hover:text-[#f5c542] transition relative" > Access HERE → <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#f5c542] transition-all duration-300 group-hover:w-full"></span> </a>
              </div>

              <div className="grid gap-0 lg:grid-cols-[1fr_360px]">
                <div className="p-6 md:p-8">
                  <p className="text-sm font-medium text-white/35">Live collector dashboard</p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-5xl">VeVe Mint Alerts</h2>
                  <div className="mt-8 grid gap-3 md:grid-cols-3">
                    {signals.map((item) => (
                      <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                        <p className="text-sm text-white/35">{item.label}</p>
                        <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-2xl border border-[#f5c542]/20 bg-[#f5c542]/10 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ffe08a]">Example Signal</p>
                    <p className="mt-2 text-xl font-semibold text-white">🎯 LOW MINT FOUND: Spider-Man SR Mint #47 listed</p>
                  </div>
                </div>

                <div className="border-t border-white/10 bg-white/[0.025] p-6 lg:border-l lg:border-t-0">
                  <p className="mb-4 text-sm font-medium text-white/35">Featured Watchlist</p>
                  <div className="space-y-3">
                    {collectibles.map((item) => (
                      <div key={item.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                        <p className="text-sm font-semibold text-white">{item.name}</p>
                        <p className="mt-1 text-xs text-white/35">{item.tag} • {item.collection}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        id="collection"
        className="mx-auto max-w-7xl px-6 py-28"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mb-12 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f5c542]">Featured Collection</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-[-0.06em] md:text-7xl">A digital shelf built on conviction.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-white/50 md:justify-self-end">
            This isn’t just a collection — it’s a live snapshot of conviction. Every piece reflects what I believe matters in the future of digital ownership.
          </p>
        </div>

        <motion.div className="grid gap-5 md:grid-cols-4" variants={staggerWrap} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.18 }}>
          {collectibles.map((item) => (
            <motion.article key={item.name} variants={fadeUp} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-3 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:bg-white/[0.08]">
              <img src={item.image} alt={item.name} className="aspect-[4/5] w-full rounded-[1.45rem] object-cover opacity-90 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100" />
              <div className="p-5">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">{item.tag}</span>
                <p className="mt-5 text-sm font-medium text-white/38">{item.collection}</p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white">{item.name}</h3>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        id="tracker"
        className="scroll-mt-32 px-6 pb-28"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] border border-white/10 bg-white/[0.055] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f5c542]">Digital Monkey Tracker</p>
            <h2 className="mt-4 max-w-3xl text-5xl font-semibold tracking-[-0.06em] md:text-7xl">Real-time tracking of grail sales across VeVe & StackR.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/50">
              From Todd Batmans to Partners Statues — every major move, every big flip, every signal that matters. Follow the money. Follow the trends. Stay ahead of the market.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#0b0d13] p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-white/35">Tracker Status</p>
                <h3 className="text-2xl font-semibold">X account feed</h3>
              </div>
              <span className="rounded-full bg-[#f5c542] px-4 py-2 text-xs font-semibold text-black">ONLINE</span>
            </div>
            <div className="space-y-3">
              {["🎯 Grail listing spotted", "💎 Amount in OMI/USD", "⚡ Transaction URL"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 font-medium text-white/75">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="about"
        className="scroll-mt-24 px-6 pb-24"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-white/[0.055] p-8 text-white shadow-2xl shadow-black/20 backdrop-blur-xl md:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f5c542]">About Digital Monkey</p>
              <h2 className="mt-4 text-5xl font-semibold tracking-[-0.06em] md:text-7xl">Creator. Collector. Builder.</h2>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/58">
                This isn’t just content — it’s a front-row seat to where digital ownership is going. I break down trends, highlight opportunities, and help collectors understand why this space matters before it becomes obvious.
              </p>
            </div>

            <motion.div className="grid gap-3" variants={staggerWrap} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.25 }}>
              {pillars.map((item) => (
                <motion.div key={item.title} variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-sm">
                  <h3 className="text-xl font-semibold tracking-tight text-white">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-white/55">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="px-6 pb-24"
        initial={{ opacity: 0, scale: 0.95, y: 60, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.055] p-8 text-white shadow-2xl shadow-black/20 backdrop-blur-xl md:p-14">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f5c542]">VeVe Referral</p>
              <h2 className="mt-3 max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-7xl">Ready to start collecting?</h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/55">
                Join VeVe through my referal and start exploring the future of digital collecting.
              </p>
            </div>
            <a href={referralLink} target="_blank" rel="noreferrer" className="rounded-full bg-white px-9 py-5 text-lg font-semibold text-black transition hover:bg-[#f5c542]">
              Join VeVe →
            </a>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

