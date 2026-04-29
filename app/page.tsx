"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Scripts",
    desc: "Unique FiveM systems, jobs, gangs, shops, admin tools, and server mechanics built for your city.",
    icon: "</>",
  },
  {
    title: "Server Setup",
    desc: "Complete QBCore / ESX setup, resources, database, server.cfg, and optimization.",
    icon: "▤",
  },
  {
    title: "Bug Fixes",
    desc: "Fixing script errors, console errors, broken configs, stability issues, and performance problems.",
    icon: "◇",
  },
  {
    title: "UI / Design",
    desc: "Custom NUI menus, loading screens, dashboards, logos, and branded visuals.",
    icon: "◌",
  },
];

const servers = [
  {
    name: "Atown Roleplay",
    logo: "/servers/atown.png",
    desc: "Atlanta-based serious RP server with custom systems, UI work, optimization, and ongoing development.",
    tags: ["Custom Scripts", "UI Design", "Optimization"],
  },
  {
    name: "Heart of Houston",
    logo: "/servers/hoh.png",
    desc: "Custom RP city focused on performance, immersive gameplay, branded features, and server support.",
    tags: ["Framework", "Systems", "Performance"],
  },
  {
    name: "Love & Hustle RP",
    logo: "/servers/lovehustle.png",
    desc: "Roleplay server branding, setup support, custom systems, and visual direction.",
    tags: ["Branding", "Server Setup", "Support"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden scroll-smooth">
      {/* Premium animated background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(168,85,247,0.28),transparent_28%),radial-gradient(circle_at_85%_60%,rgba(109,40,217,0.18),transparent_30%),linear-gradient(180deg,#050008,#000)]" />
      <motion.div
        className="fixed -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-700/20 blur-[120px]"
        animate={{ x: [0, 120, 0], y: [0, 80, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-fuchsia-600/15 blur-[130px]"
        animate={{ x: [0, -100, 0], y: [0, -80, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="fixed inset-0 opacity-25 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:90px_90px]" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.55)_72%)]" />

      <div className="relative z-10">
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl font-black text-purple-400 drop-shadow-[0_0_18px_rgba(168,85,247,0.9)]">K</div>
              <div className="leading-tight">
                <h1 className="font-black tracking-wide">KURO</h1>
                <p className="text-purple-400 text-sm font-semibold">DEVELOPMENT</p>
              </div>
            </div>

            <div className="hidden md:flex gap-10 text-sm text-gray-300">
              <a className="text-purple-400" href="#home">Home</a>
              <a className="hover:text-purple-400 transition" href="#work">Projects</a>
              <a className="hover:text-purple-400 transition" href="#services">Services</a>
              <a className="hover:text-purple-400 transition" href="#about">About</a>
              <a className="hover:text-purple-400 transition" href="#contact">Contact</a>
            </div>

            <a href="#contact" className="rounded-full border border-purple-500/40 px-5 py-2 text-sm hover:bg-purple-600/20 transition shadow-lg shadow-purple-950/30">
              Hire Me
            </a>
          </div>
        </nav>

        <section id="home" className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.65 }}>
            <div className="inline-flex rounded-full border border-purple-500/25 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 mb-7 shadow-lg shadow-purple-950/20">
              ✦ FiveM Developer • UI Designer • Server Builder
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Clean. Optimized.<br />
              Built for <span className="text-purple-500 drop-shadow-[0_0_22px_rgba(168,85,247,0.55)]">Roleplay.</span>
            </h2>

            <p className="mt-6 text-gray-300 max-w-xl leading-8 text-lg">
              I build custom FiveM scripts, branded UI, server systems, and optimized roleplay experiences for serious communities.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#work" className="rounded-xl bg-purple-600 hover:bg-purple-500 px-7 py-4 font-bold shadow-lg shadow-purple-700/35 transition hover:-translate-y-1">
                View My Work →
              </a>
              <a href="#contact" className="rounded-xl border border-purple-500/30 bg-black/40 px-7 py-4 font-bold hover:bg-purple-500/10 transition hover:-translate-y-1">
                Contact Me
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 max-w-xl divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
              <div className="pr-6">
                <p className="text-2xl font-black text-purple-300">20+</p>
                <p className="text-xs text-gray-400">Scripts Created</p>
              </div>
              <div className="px-6">
                <p className="text-2xl font-black text-purple-300">10+</p>
                <p className="text-xs text-gray-400">Servers Developed</p>
              </div>
              <div className="pl-6">
                <p className="text-2xl font-black text-purple-300">99%</p>
                <p className="text-xs text-gray-400">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          <motion.section
            id="about"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.65, delay: 0.12 }}
            className="group relative bg-black/45 border border-purple-500/25 rounded-3xl p-8 shadow-2xl shadow-purple-950/30 backdrop-blur-xl overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-purple-600/10 to-transparent" />
            <div className="relative">
              <p className="text-purple-400 text-sm mb-2">About Me</p>
              <h3 className="text-3xl font-black mb-5">Developer. Problem Solver. Perfectionist.</h3>
              <p className="text-gray-300 leading-8">
                I’m a FiveM developer with experience building custom scripts, user interfaces, and full server systems.
                My focus is performance, optimization, clean code, and smooth roleplay experiences.
              </p>

              <div className="mt-7 grid sm:grid-cols-2 gap-4 text-gray-300">
                {["Clean & Optimized Code", "Fast Delivery", "Custom Solutions", "Ongoing Support"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <span className="h-5 w-5 rounded-full border border-purple-400 text-purple-400 flex items-center justify-center text-xs">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        </section>

        <motion.section id="services" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.6 }} className="border-t border-white/10 max-w-7xl mx-auto px-6 py-16">
          <p className="text-purple-400 text-sm mb-2">What I Do</p>
          <h2 className="text-3xl md:text-4xl font-black mb-8">Services I Provide</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="group bg-black/45 border border-purple-500/20 hover:border-purple-400/60 rounded-3xl p-6 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/25"
              >
                <div className="h-12 w-12 rounded-xl bg-purple-600/15 text-purple-400 flex items-center justify-center font-black mb-5 group-hover:bg-purple-600 group-hover:text-white transition">
                  {service.icon}
                </div>
                <h3 className="font-black text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-400 leading-6">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section id="work" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.6 }} className="border-t border-white/10 max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-purple-400 text-sm mb-2">Featured Servers</p>
              <h2 className="text-3xl md:text-4xl font-black">Servers I’ve Developed</h2>
            </div>
            <a href="#contact" className="hidden md:flex rounded-xl border border-purple-500/25 bg-black/40 text-white hover:bg-purple-500/10 px-5 py-3 text-sm transition hover:-translate-y-1">
              Work With Me →
            </a>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {servers.map((server, index) => (
              <motion.div
                key={server.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group bg-black/45 border border-purple-500/20 hover:border-purple-400/60 rounded-3xl p-5 flex gap-5 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/25"
              >
                <img
                  src={server.logo}
                  alt={server.name}
                  className="h-28 w-28 shrink-0 rounded-2xl object-cover border border-purple-400/30 shadow-lg shadow-purple-900/20 group-hover:scale-105 transition"
                />
                <div>
                  <h3 className="text-xl font-black">
                    {server.name} <span className="text-purple-400">✹</span>
                  </h3>
                  <p className="text-gray-400 text-sm mt-3 leading-6">{server.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {server.tags.map((tag) => (
                      <span key={tag} className="text-xs rounded-md bg-purple-500/15 text-purple-200 px-3 py-1 border border-purple-500/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="rounded-[2rem] border border-purple-500/25 bg-gradient-to-br from-purple-950/35 to-black/50 p-8 md:p-12 shadow-2xl shadow-purple-950/25">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-purple-400 text-sm mb-2">Hire Me</p>
                <h2 className="text-3xl md:text-5xl font-black leading-tight">Need your server fixed, built, or upgraded?</h2>
                <p className="text-gray-300 mt-5 leading-8">Send me what you need done and I’ll help turn it into a clean, working system for your city.</p>
              </div>
              <div className="flex lg:justify-end gap-4 flex-wrap">
                <a href="mailto:developerkuro@yahoo.com" className="rounded-xl bg-purple-600 hover:bg-purple-500 px-7 py-4 font-bold shadow-lg shadow-purple-700/30 transition hover:-translate-y-1">Email Me</a>
                <a href="#contact" className="rounded-xl border border-purple-500/30 bg-black/40 px-7 py-4 font-bold hover:bg-purple-500/10 transition hover:-translate-y-1">View Contact</a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 gap-6 items-stretch">
            <div>
              <p className="text-purple-400 text-sm mb-2">Let’s Work Together</p>
              <h2 className="text-3xl font-black">Have a Project in Mind?</h2>
              <p className="text-gray-400 mt-4 leading-7">I’m open for new projects and collaborations. Let’s build something great.</p>
            </div>

            <a href="https://discord.com/users/kurodevelopment" target="_blank" className="bg-black/45 border border-white/10 rounded-3xl p-6 hover:border-purple-400/50 transition hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/25">
              <div className="text-purple-400 text-3xl mb-3">●</div>
              <h3 className="font-black text-purple-300">Discord</h3>
              <p className="text-gray-400 text-sm mt-2">kurodevelopment</p>
            </a>

            <a href="mailto:developerkuro@yahoo.com" className="bg-black/45 border border-white/10 rounded-3xl p-6 hover:border-purple-400/50 transition hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/25">
              <div className="text-purple-400 text-3xl mb-3">✉</div>
              <h3 className="font-black text-purple-300">Email</h3>
              <p className="text-gray-400 text-sm mt-2">developerkuro@yahoo.com</p>
            </a>

            <div className="bg-purple-950/20 border border-purple-500/30 rounded-3xl p-6 shadow-lg shadow-purple-900/25">
              <div className="text-purple-400 text-3xl mb-3">⚡</div>
              <h3 className="font-black text-purple-300">Fast Response</h3>
              <p className="text-gray-400 text-sm mt-2">I usually respond within a few hours.</p>
            </div>
          </div>
        </section>

        <footer className="text-center text-gray-500 py-8 border-t border-white/10">
          © 2026 Kuro Development. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
