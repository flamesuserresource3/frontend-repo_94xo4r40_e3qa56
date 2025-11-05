import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'Next.js','React','Node.js','Redux','Express','MongoDB','JavaScript','TypeScript','Framer Motion','Python','C++','Sass','PostgreSQL','Three.js','Docker','Kubernetes','Kafka','Prometheus','Grafana','Azure DevOps','AWS','SQL','Redis','NoSQL','TailwindCSS','CI/CD','Linux','Git'
];

export default function Story() {
  return (
    <section className="relative bg-black py-20 text-white">
      <div className="absolute -top-32 left-1/2 h-72 w-[110vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.25),transparent)] blur-2xl" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          About Me — in Story Mode
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-3xl text-white/80"
        >
          Experienced Full Stack Developer specializing in AI-driven applications and scalable cloud solutions. Proficient in React.js, Next.js, and AWS, with a strong command of DevOps practices to optimize performance, slash costs, and build efficient data workflows from the ground up.
        </motion.p>

        {/* Skills Cloud */}
        <div className="mt-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl font-semibold text-white/90"
          >
            Tech I use
          </motion.h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <motion.span
                key={s + i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.6) }}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/90 backdrop-blur"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-black shadow-lg shadow-cyan-500/20 transition-transform hover:scale-[1.02]"
          >
            See my projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white/90 backdrop-blur transition-colors hover:bg-white/10"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
