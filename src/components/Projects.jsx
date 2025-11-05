import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'EcoEarn',
    tag: 'Full Stack',
    desc: 'Sustainable rewards platform encouraging eco-friendly actions with real-time engagement.',
    url: '#',
  },
  {
    title: 'CollabAI',
    tag: 'Full Stack',
    desc: 'Collaborative AI workspace for teams to prototype and deploy AI-powered tools.',
    url: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-gradient-to-b from-black to-zinc-950 py-20 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          My Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 max-w-2xl text-white/80"
        >
          A selection of my work, from web apps to open-source.
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-transform hover:scale-[1.01]"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-400/30 to-purple-500/30 blur-2xl" />
              <div className="relative">
                <div className="text-xs uppercase tracking-wider text-cyan-300">{p.tag}</div>
                <h3 className="mt-1 text-2xl font-bold">{p.title}</h3>
                <p className="mt-2 text-white/80">{p.desc}</p>
                <a
                  href={p.url}
                  className="mt-4 inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
