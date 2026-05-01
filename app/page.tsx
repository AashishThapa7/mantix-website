export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-green-500/30">
        <h1 className="text-2xl font-bold tracking-widest text-green-400">
          MANTIX
        </h1>

        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-green-400">About</a>
          <a href="#collection" className="hover:text-green-400">Collection</a>
          <a href="#why" className="hover:text-green-400">Why MANTIX</a>
          <a href="#contact" className="hover:text-green-400">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-8 py-24 text-center">
        <p className="text-green-400 font-semibold mb-4">
          AI-Powered Fashion Brand for Nepal
        </p>

        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          MANTIX
        </h2>

        <h3 className="mt-4 text-2xl md:text-4xl font-bold text-green-400">
          Smart Fashion. Sharp Identity.
        </h3>

        <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-lg">
          MANTIX is starting with premium T-shirts for Nepal’s new generation.
          We combine smart design, global sourcing, and future-ready e-commerce
          to build fashion step by step.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#early-access"
            className="rounded-full bg-green-400 px-8 py-4 font-bold text-black hover:bg-green-300"
          >
            Join Early Access
          </a>

          <a
            href="#collection"
            className="rounded-full border border-green-400 px-8 py-4 font-bold text-green-400 hover:bg-green-400 hover:text-black"
          >
            View First Drop
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-green-400 font-semibold uppercase tracking-widest">
            What is MANTIX?
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            A humble beginning for a smart clothing brand.
          </h2>

          <p className="mt-6 text-gray-300 text-lg leading-8">
            MANTIX is a fashion-tech brand starting with premium T-shirts for
            Nepal. Our goal is to use customer feedback, online shopping
            behavior, and AI recommendations to create better products over time.
          </p>
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-green-400 font-semibold uppercase tracking-widest">
            First Drop
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            Essential T-Shirts
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Black Oversized Tee", "Rs. 1,499", "Oversized Fit"],
              ["White Essential Tee", "Rs. 1,399", "Regular / Oversized"],
              ["Dark Green Street Tee", "Rs. 1,499", "Oversized Fit"],
            ].map(([name, price, fit]) => (
              <div
                key={name}
                className="rounded-3xl border border-green-500/30 bg-zinc-950 p-6"
              >
                <div className="h-56 rounded-2xl bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center">
                  <span className="text-green-400 text-5xl font-black">
                    M
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold">{name}</h3>
                <p className="mt-2 text-gray-400">{fit}</p>
                <p className="mt-4 text-2xl font-bold text-green-400">
                  {price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="px-8 py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <p className="text-green-400 font-semibold uppercase tracking-widest">
            Why MANTIX?
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            Built for trust, style, and future AI growth.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              ["Premium Quality", "Comfort-focused T-shirts for everyday wear."],
              ["Affordable Style", "Modern streetwear at a practical price."],
              ["AI-Powered Future", "Customer data will guide future drops."],
              ["Built for Nepal", "Designed around local customers and demand."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-black p-6"
              >
                <h3 className="text-xl font-bold text-green-400">{title}</h3>
                <p className="mt-3 text-gray-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Access */}
      <section id="early-access" className="px-8 py-20">
        <div className="max-w-3xl mx-auto rounded-3xl border border-green-500/30 bg-zinc-950 p-8">
          <p className="text-green-400 font-semibold uppercase tracking-widest text-center">
            Early Access
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-center">
            Help shape the first MANTIX collection.
          </h2>

          <form className="mt-8 grid gap-4">
            <input className="rounded-xl bg-black border border-white/10 px-4 py-3" placeholder="Full Name" />
            <input className="rounded-xl bg-black border border-white/10 px-4 py-3" placeholder="Phone Number" />
            <input className="rounded-xl bg-black border border-white/10 px-4 py-3" placeholder="City / District" />
            <select className="rounded-xl bg-black border border-white/10 px-4 py-3">
              <option>Preferred Size</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
            <textarea className="rounded-xl bg-black border border-white/10 px-4 py-3" placeholder="What kind of design should MANTIX create?" />

            <button className="rounded-full bg-green-400 px-8 py-4 font-bold text-black hover:bg-green-300">
              Join MANTIX Early Access
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-green-500/30 px-8 py-10 text-center text-gray-400">
        <h2 className="text-2xl font-bold tracking-widest text-green-400">
          MANTIX
        </h2>
        <p className="mt-3">Building smart fashion step by step.</p>
        <p className="mt-3">Instagram • TikTok • Facebook</p>
      </footer>
    </main>
  );
}