export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-[#070a13] text-white">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-semibold">Let’s build something memorable</h3>
          <p className="mt-2 text-white/70 max-w-md">Open to freelance work, collaborations, and cool ideas. I reply within 24 hours.</p>
        </div>
        <div className="flex md:justify-end">
          <a href="mailto:hello@example.com" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 px-6 py-3 font-medium text-white shadow-lg hover:shadow-xl transition">Say hello</a>
        </div>
      </div>
      <div className="py-5 text-center text-xs text-white/50">© {new Date().getFullYear()} Your Name · Crafted with love and motion</div>
    </footer>
  );
}
