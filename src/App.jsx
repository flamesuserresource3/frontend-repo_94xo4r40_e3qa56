import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white antialiased">
      {/* Global ambient background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-0">
        {/* Aurora blobs */}
        <div className="absolute top-[-10%] left-[-10%] h-[40vh] w-[40vw] rounded-full bg-[radial-gradient(closest-side,rgba(56,189,248,0.35),transparent)] blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[45vh] w-[45vw] rounded-full bg-[radial-gradient(closest-side,rgba(168,85,247,0.28),transparent)] blur-3xl" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)'
        }} />
      </div>

      {/* Floating navbar */}
      <Navbar />

      {/* Immersive hero with Spline */}
      <Hero />

      {/* Section divider */}
      <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Feature work */}
      <Projects />

      {/* Footer & contact */}
      <Footer />
    </div>
  );
}
