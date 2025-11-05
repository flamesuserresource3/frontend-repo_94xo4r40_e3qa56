import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function StoryTimeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 1]);
  const x = useTransform(scrollYProgress, [0, 1], ['-10%', '0%']);

  const steps = [
    {
      title: 'Curiosity Sparks',
      text: 'It started with a desire to make pixels feel human. I began exploring interactive worlds and playful UX.',
    },
    {
      title: 'Systems + Aesthetics',
      text: 'I learned to design scalable UI systems that balance beauty and practicality.',
    },
    {
      title: 'Motion as Meaning',
      text: 'Animations aren\'t decoration — they guide attention and tell stories users remember.',
    },
    {
      title: 'Building with Joy',
      text: 'Today, I create delightful products where performance, accessibility, and emotion meet.',
    },
  ];

  return (
    <section id="about" ref={ref} className="relative py-28 bg-[#0a0d18] text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_300px_at_20%_10%,rgba(99,102,241,0.2),transparent),radial-gradient(600px_300px_at_80%_90%,rgba(236,72,153,0.16),transparent)]" />
      <div className="relative container mx-auto px-6">
        <motion.h2
          style={{ opacity, x }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          A story-led approach
        </motion.h2>
        <p className="mt-3 max-w-2xl text-white/70">
          I craft product journeys that unfold as you scroll — revealing context with motion and breathing room.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {steps.map((step, idx) => (
            <StoryCard key={idx} index={idx + 1} title={step.title} text={step.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryCard({ index, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 shadow-xl"
    >
      <div className="absolute -top-3 -left-3">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 text-white grid place-items-center font-semibold">
          {index}
        </div>
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-white/70 leading-relaxed">{text}</p>
    </motion.div>
  );
}
