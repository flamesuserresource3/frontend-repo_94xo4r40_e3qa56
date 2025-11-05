import { useState } from 'react';
import { Rocket, Github, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[86%]">
      <nav className="backdrop-blur-xl bg-white/10 border border-white/15 shadow-2xl rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 text-white">
            <Rocket size={18} />
          </span>
          <span className="hidden sm:block">My Portfolio</span>
        </a>

        <button
          className="md:hidden text-white/80 hover:text-white transition"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <ul className={`md:flex items-center gap-6 text-white/80 hidden`}>
          <li><a href="#about" className="hover:text-white transition">About</a></li>
          <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          <li className="flex items-center gap-3">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white"><Github size={18} /></a>
            <a href="#contact" className="hover:text-white"><Mail size={18} /></a>
          </li>
        </ul>
      </nav>

      {open && (
        <div className="md:hidden mt-2 backdrop-blur-xl bg-white/10 border border-white/15 shadow-2xl rounded-2xl px-4 py-3 text-white/80">
          <a href="#about" className="block py-2" onClick={() => setOpen(false)}>About</a>
          <a href="#projects" className="block py-2" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" className="block py-2" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}
