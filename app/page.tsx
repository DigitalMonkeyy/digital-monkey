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
    name: "Superman FA",
    collection: "DC Direct",
    tag: "Blue Chip",
    image: "https://via.placeholder.com/700x900/11131a/f4f4f5?text=Superman+FA",
  },
  {
    name: "Darth Vader FA",
    collection: "Star Wars",
    tag: "Iconic IP",
    image: "https://via.placeholder.com/700x900/11131a/f4f4f5?text=Darth+Vader+FA",
  },
];

const signals = [
  { label: "Matching Mint", value: "Detected" },
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
    text: "I build tracker tools that surface matching mints, listings, and collector opportunities faster.",
  },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, 90]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -220]);

  return (
    <main className="min-h-screen bg-[#07080d] text-[#f7f7f8] selection:bg-[#b8a7ff] selection:text-black">
      <section className="relative min-h-screen overflow-hidden border-b border-white/10">
        <motion.div
          style={{ y: glowY }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(184,167,255,0.35),transparent_34%),radial-gradient(circle_at_12%_30%,rgba(255,255,255,0.10),transparent_28%),radial-gradient(circle_at_90%_35%,rgba(84,117,255,0.16),transparent_28%),linear-gradient(180deg,#11131a_0%,#07080d_70%)]"
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(7,8,13,0.85)_100%)]" />

        <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-xl text-black shadow-2xl shadow-white/10">🐒</div>
            <div>
              <p className="font-semibold tracking-tight">Digital Monkey</p>
              <p className="text-xs text-white/40">Creator • Collector • Builder</p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium text-white/50 md:flex">
            <a href="#collection" className="transition hover:text-white">Collection</a>
            <a href="#tracker" className="transition hover:text-white">Tracker</a>
            <a href="#about" className="transition hover:text-white">About</a>
          </div>

          <a
            href={referralLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#b8a7ff]"
          >
            Start on VeVe
          </a>
        </nav>

        <motion.div style={{ y: heroY }} className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-20 text-center">
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
              className="rounded-full bg-white px-8 py-4 font-semibold text-black shadow-2xl shadow-white/10 transition hover:bg-[#b8a7ff]"
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
                <span className="text-xs font-medium text-white/35">digital-monkey.signal</span>
              </div>

              <div className="grid gap-0 lg:grid-cols-[1fr_360px]">
                <div className="p-6 md:p-8">
                  <p className="text-sm font-medium text-white/35">Live collector dashboard</p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-5xl">VeVe Signal Feed</h2>
                  <div className="mt-8 grid gap-3 md:grid-cols-3">
                    {signals.map((item) => (
                      <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                        <p className="text-sm text-white/35">{item.label}</p>
                        <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-2xl border border-[#b8a7ff]/20 bg-[#b8a7ff]/10 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c9bdff]">Example Signal</p>
                    <p className="mt-2 text-xl font-semibold text-white">🎯 MATCH FOUND: Spider-Man SR Mint #46 listed</p>
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
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b8a7ff]">Featured Collection</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-[-0.06em] md:text-7xl">A digital shelf built on conviction.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-white/50 md:justify-self-end">
            This isn’t just a collection — it’s a live snapshot of conviction. Every piece reflects what I believe matters in the future of digital ownership.
          </p>
        </div>

        <motion.div className="grid gap-5 md:grid-cols-3" variants={staggerWrap} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.18 }}>
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
        className="px-6 pb-28"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] border border-white/10 bg-white/[0.055] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b8a7ff]">Digital Monkey Tracker</p>
            <h2 className="mt-4 max-w-3xl text-5xl font-semibold tracking-[-0.06em] md:text-7xl">A signal engine for VeVe opportunities.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/50">
              Built to surface what matters: matching mints, grail listings, StackR movement, and collector opportunities worth watching.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#0b0d13] p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-white/35">Tracker Status</p>
                <h3 className="text-2xl font-semibold">Live signal feed</h3>
              </div>
              <span className="rounded-full bg-[#b8a7ff] px-4 py-2 text-xs font-semibold text-black">ONLINE</span>
            </div>
            <div className="space-y-3">
              {["🎯 Matching mint detected", "💎 Grail listing spotted", "⚡ StackR activity moving"].map((item) => (
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
        className="px-6 pb-24"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-white/[0.055] p-8 text-white shadow-2xl shadow-black/20 backdrop-blur-xl md:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b8a7ff]">About Digital Monkey</p>
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
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b8a7ff]">VeVe Referral</p>
              <h2 className="mt-3 max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-7xl">Ready to start collecting?</h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/55">
                Join VeVe through Digital Monkey and start exploring the future of digital collecting.
              </p>
            </div>
            <a href={referralLink} target="_blank" rel="noreferrer" className="rounded-full bg-white px-9 py-5 text-lg font-semibold text-black transition hover:bg-[#b8a7ff]">
              Join VeVe →
            </a>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

