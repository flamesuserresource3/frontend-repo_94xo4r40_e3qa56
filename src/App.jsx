import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black font-inter text-white">
      {/* Top navigation */}
      <Navbar />

      {/* 3D Hero section with Spline background */}
      <Hero />

      {/* Work showcase */}
      <Projects />

      {/* Contact + footer */}
      <Footer />
    </div>
  );
}
