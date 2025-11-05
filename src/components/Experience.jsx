import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2024',
    role: 'Full Stack Developer',
    org: 'Algorizz · Remote',
    period: 'June 2024 - Present',
    points: [
      'Optimized interactive tools for Qrizz, an AI-driven application, improving user engagement and reducing API costs by 25%',
      'Enhanced data workflows on Actian (HCL product), increasing conversion speed by 40%',
      'Collaborated with cross-functional teams to deliver scalable AI-powered solutions',
    ],
  },
  {
    year: '2024',
    role: 'Open Source Contributor',
    org: 'GirlScript Foundation · Remote',
    period: 'June 2024 - Aug 2024',
    points: [
      'Implemented accessibility-focused features and contributed to open-source documentation',
      'Earned Postman Student Expert Certification, showcasing API testing and development expertise',
    ],
  },
  {
    year: '2022',
    role: 'Bachelor of Engineering (Computer Science)',
    org: 'RNS Institute of Technology · Bengaluru',
    period: '2022 - 2026',
    points: [
      'Pursuing Computer Science Engineering',
      'Focus on AI, Machine Learning, and Full Stack Development',
    ],
  },
  {
    year: '2020',
    role: 'Class XII (Science)',
    org: 'Venkataramana PU College · Kundapur',
    period: '2020 - 2022',
    points: [
      'Completed Higher Secondary Education in Science',
      'Strong foundation in Mathematics and Computer Science',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-black py-20 text-white">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          My Experience
        </motion.h2>
        <p className="mt-2 max-w-2xl text-white/80">A timeline of my professional journey.</p>

        <div className="mt-10 grid gap-8">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-xs text-cyan-300">{item.year} • {item.period}</div>
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <div className="text-white/70">{item.org}</div>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-white/90 list-disc pl-5">
                {item.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
