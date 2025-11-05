import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail } from 'lucide-react';

const SocialButton = ({ href, children, ariaLabel }) => (
  <a
    href={href}
    aria-label={ariaLabel}
    className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors backdrop-blur border border-white/20"
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradients for tech vibe */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />
      <div className="pointer-events-none absolute -inset-x-20 -top-20 h-64 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.35),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col px-6">
        {/* Nav */}
        <nav className="flex items-center justify-between py-6 text-white">
          <div className="text-lg font-semibold tracking-wide">VIPUL • Portfolio</div>
          <div className="hidden gap-6 md:flex">
            <a href="#home" className="hover:text-cyan-300">Home</a>
            <a href="#projects" className="hover:text-cyan-300">Projects</a>
            <a href="#experience" className="hover:text-cyan-300">Experience</a>
            <a href="#contact" className="hover:text-cyan-300">Contact</a>
          </div>
        </nav>

        {/* Hero Copy */}
        <div className="mt-auto mb-16 max-w-3xl text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            Hey! It's me <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">VIPUL</span>
          </h1>
          <p className="mt-4 text-lg/relaxed text-white/90">
            A full-stack developer and DevOps enthusiast, building and deploying seamless cloud experiences.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <SocialButton href="https://github.com/" ariaLabel="GitHub">
              <Github className="h-5 w-5" /> GitHub
            </SocialButton>
            <SocialButton href="https://www.linkedin.com/" ariaLabel="LinkedIn">
              <Linkedin className="h-5 w-5" /> LinkedIn
            </SocialButton>
            <SocialButton href="mailto:vipul@example.com" ariaLabel="Email">
              <Mail className="h-5 w-5" /> Email
            </SocialButton>
          </div>
        </div>
      </div>
    </section>
  );
}
