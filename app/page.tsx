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

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(130,45,255,0.22),transparent_28%),radial-gradient(circle_at_80%_65%,rgba(120,0,255,0.14),transparent_30%),linear-gradient(180deg,#050008,#000)]" />
      <div className="fixed inset-0 opacity-25 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:90px_90px]" />

      <div className="relative z-10">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="text-4xl font-black text-purple-400 drop-shadow-[0_0_18px_rgba(168,85,247,0.8)]">
              K
            </div>
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

          <a
            href="#contact"
            className="rounded-full border border-purple-500/40 px-5 py-2 text-sm hover:bg-purple-600/20 transition"
          >
            Contact Me
          </a>
        </nav>

        <section id="home" className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex rounded-full border border-purple-500/25 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 mb-7">
              &lt;/&gt; FiveM Developer
            </div>

            <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tight">
              Clean. Optimized.<br />
              Built for <span className="text-purple-500 drop-shadow-[0_0_18px_rgba(168,85,247,0.45)]">Roleplay.</span>
            </h2>

            <p className="mt-6 text-gray-300 max-w-xl leading-8">
              I develop custom FiveM scripts, systems, and full server solutions for serious roleplay communities.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#work"
                className="rounded-xl bg-purple-600 hover:bg-purple-500 px-7 py-4 font-bold shadow-lg shadow-purple-700/30 transition"
              >
                View My Work →
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-purple-500/30 bg-black/40 px-7 py-4 font-bold hover:bg-purple-500/10 transition"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 max-w-xl divide-x divide-white/10">
              <div className="pr-6">
                <p className="text-2xl font-black">20+</p>
                <p className="text-xs text-gray-400">Scripts Created</p>
              </div>
              <div className="px-6">
                <p className="text-2xl font-black">10+</p>
                <p className="text-xs text-gray-400">Servers Developed</p>
              </div>
              <div className="pl-6">
                <p className="text-2xl font-black">99%</p>
                <p className="text-xs text-gray-400">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          <motion.section
            id="about"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-black/40 border border-purple-500/25 rounded-2xl p-8 shadow-2xl shadow-purple-950/30 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-black mb-5">About Me</h3>
            <p className="text-gray-300 leading-8">
              I’m a FiveM developer with experience building custom scripts, user interfaces, and full server systems.
              My focus is performance, optimization, and creating smooth roleplay experiences.
            </p>

            <div className="mt-7 space-y-4 text-gray-300">
              {["Clean & Optimized Code", "Fast Delivery", "Custom Solutions", "Ongoing Support"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="h-5 w-5 rounded-full border border-purple-400 text-purple-400 flex items-center justify-center text-xs">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.section>
        </section>

        <section id="services" className="border-t border-white/10 max-w-7xl mx-auto px-6 py-14">
          <p className="text-purple-400 text-sm mb-2">What I Do</p>
          <h2 className="text-3xl font-black mb-7">Services I Provide</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-black/45 border border-purple-500/20 hover:border-purple-400/50 rounded-2xl p-6 transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-purple-600/15 text-purple-400 flex items-center justify-center font-black mb-5">
                  {service.icon}
                </div>
                <h3 className="font-black text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-400 leading-6">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="border-t border-white/10 max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-end justify-between mb-7">
            <div>
              <p className="text-purple-400 text-sm mb-2">Featured Servers</p>
              <h2 className="text-3xl font-black">Servers I’ve Developed</h2>
            </div>
            <a
              href="#contact"
              className="hidden md:flex rounded-xl border border-purple-500/25 bg-black/40 text-white hover:bg-purple-500/10 px-5 py-3 text-sm transition"
            >
              Work With Me →
            </a>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {servers.map((server) => (
              <div
                key={server.name}
                className="bg-black/45 border border-purple-500/20 hover:border-purple-400/50 rounded-2xl p-5 flex gap-5 transition-all"
              >
                <img
                  src={server.logo}
                  alt={server.name}
                  className="h-28 w-28 shrink-0 rounded-xl object-cover border border-purple-400/30 shadow-lg shadow-purple-900/20"
                />
                <div>
                  <h3 className="text-xl font-black">
                    {server.name} <span className="text-purple-400">✹</span>
                  </h3>
                  <p className="text-gray-400 text-sm mt-3 leading-6">{server.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {server.tags.map((tag) => (
                      <span key={tag} className="text-xs rounded-md bg-purple-500/15 text-purple-200 px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 max-w-7xl mx-auto px-6 py-14">
          <div className="grid lg:grid-cols-4 gap-6 items-stretch">
            <div>
              <p className="text-purple-400 text-sm mb-2">Let’s Work Together</p>
              <h2 className="text-3xl font-black">Have a Project in Mind?</h2>
              <p className="text-gray-400 mt-4 leading-7">
                I’m open for new projects and collaborations. Let’s build something great.
              </p>
            </div>

            <a
              href="https://discord.com/users/kurodevelopment"
              target="_blank"
              className="bg-black/45 border border-white/10 rounded-2xl p-6 hover:border-purple-400/40 transition"
            >
              <div className="text-purple-400 text-3xl mb-3">●</div>
              <h3 className="font-black text-purple-300">Discord</h3>
              <p className="text-gray-400 text-sm mt-2">kurodevelopment</p>
            </a>

            <a
              href="mailto:developerkuro@yahoo.com"
              className="bg-black/45 border border-white/10 rounded-2xl p-6 hover:border-purple-400/40 transition"
            >
              <div className="text-purple-400 text-3xl mb-3">✉</div>
              <h3 className="font-black text-purple-300">Email</h3>
              <p className="text-gray-400 text-sm mt-2">developerkuro@yahoo.com</p>
            </a>

            <div className="bg-purple-950/20 border border-purple-500/30 rounded-2xl p-6 shadow-lg shadow-purple-900/20">
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
