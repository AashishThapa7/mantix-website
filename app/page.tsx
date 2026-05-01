import Image from "next/image";

export default function Home() {
  const products = [
    {
      name: "Black Football Drop Tee",
      price: "Rs. 1,499",
      fit: "Oversized Fit",
      detail: "Original football-inspired design",
    },
    {
      name: "Dark Green Matchday Tee",
      price: "Rs. 1,499",
      fit: "Regular / Oversized",
      detail: "Built for game-night energy",
    },
    {
      name: "MANTIX Passion Tee",
      price: "Rs. 1,399",
      fit: "Streetwear Fit",
      detail: "Limited first drop",
    },
  ];

  const features = [
    {
      title: "Original Designs",
      text: "Football-inspired tees without copying official FIFA, World Cup, or team logos.",
    },
    {
      title: "Limited Drop",
      text: "A small first collection to test demand before producing more stock.",
    },
    {
      title: "Built for Nepal",
      text: "Designed for Nepali football fans, game nights, and streetwear culture.",
    },
    {
      title: "Data-Driven Growth",
      text: "Customer interest, size choices, and design feedback will guide future drops.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-green-500/30 bg-black/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/MANTIX_LOGO.png"
              alt="MANTIX Logo"
              width={56}
              height={56}
              className="rounded-full drop-shadow-[0_0_14px_rgba(34,197,94,0.75)]"
              priority
            />

            <div>
              <h1 className="text-2xl font-black tracking-[0.22em] text-green-400">
                MANTIX
              </h1>
              <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                Football Drop
              </p>
            </div>
          </a>

          <nav className="hidden gap-8 text-sm font-medium text-gray-300 md:flex">
            <a href="#collection" className="hover:text-green-400">
              Collection
            </a>
            <a href="#why" className="hover:text-green-400">
              Why MANTIX
            </a>
            <a href="#preorder" className="hover:text-green-400">
              Pre-Order
            </a>
            <a href="#contact" className="hover:text-green-400">
              Contact
            </a>
          </nav>

          <a
            href="#preorder"
            className="hidden rounded-full bg-green-400 px-5 py-3 text-sm font-bold text-black hover:bg-green-300 md:inline-block"
          >
            Pre-Order Now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.12),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-300">
              <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(34,197,94,0.9)]" />
              World football season collection
            </div>

            <h2 className="text-5xl font-black uppercase tracking-tight md:text-7xl">
              MANTIX
              <span className="block text-green-400">Football Drop</span>
            </h2>

            <p className="mt-6 max-w-xl text-xl font-semibold uppercase tracking-[0.18em] text-gray-200">
              Wear the passion of the game.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              A limited football-inspired T-shirt collection by MANTIX, built
              for fans, streetwear energy, and Nepal’s new generation. Original
              designs. Sharp identity. Game-night ready.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#collection"
                className="rounded-full bg-green-400 px-8 py-4 text-center font-bold text-black hover:bg-green-300"
              >
                View Collection
              </a>

              <a
                href="#preorder"
                className="rounded-full border border-green-400 px-8 py-4 text-center font-bold text-green-400 hover:bg-green-400 hover:text-black"
              >
                Pre-Order Now
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-green-500/30 bg-zinc-950/80 p-4">
                <p className="text-sm uppercase tracking-widest text-green-400">
                  Original
                </p>
                <p className="mt-2 text-gray-300">
                  Football-inspired tees only
                </p>
              </div>

              <div className="rounded-2xl border border-green-500/30 bg-zinc-950/80 p-4">
                <p className="text-sm uppercase tracking-widest text-green-400">
                  Limited Drop
                </p>
                <p className="mt-2 text-gray-300">
                  Small batch for first launch
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-green-500/20 blur-3xl" />

              <div className="relative rounded-[2rem] border border-green-500/30 bg-zinc-950 p-8 shadow-[0_0_40px_rgba(34,197,94,0.2)]">
                <Image
                  src="/MANTIX_LOGO.png"
                  alt="MANTIX Logo"
                  width={360}
                  height={360}
                  className="drop-shadow-[0_0_32px_rgba(34,197,94,0.85)]"
                  priority
                />

                <div className="mt-8 rounded-2xl border border-green-500/30 bg-black p-5 text-center">
                  <p className="text-sm uppercase tracking-[0.25em] text-green-400">
                    Built Different
                  </p>
                  <p className="mt-2 text-2xl font-black">Made to Move</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Notice */}
      <section className="border-y border-green-500/30 bg-green-500/10 px-6 py-5">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-semibold text-green-300">
            Pre-orders opening soon — limited first drop for football fans.
          </p>
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold uppercase tracking-[0.3em] text-green-400">
            First Football Collection
          </p>

          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-4xl font-black md:text-6xl">
              Original football-inspired tees for the season.
            </h2>

            <p className="max-w-md text-gray-300">
              Start with three strong designs, collect demand, and print based
              on real pre-orders.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.name}
                className="group rounded-3xl border border-green-500/30 bg-zinc-950 p-6 transition hover:-translate-y-1 hover:border-green-400"
              >
                <div className="flex h-64 items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-900 via-black to-green-950/50">
                  <Image
                    src="/MANTIX_LOGO.png"
                    alt="MANTIX Product Logo"
                    width={130}
                    height={130}
                    className="drop-shadow-[0_0_22px_rgba(34,197,94,0.75)] transition group-hover:scale-105"
                  />
                </div>

                <p className="mt-6 text-sm uppercase tracking-[0.25em] text-green-400">
                  Limited Drop
                </p>
                <h3 className="mt-3 text-2xl font-bold">{product.name}</h3>
                <p className="mt-2 text-gray-400">{product.fit}</p>
                <p className="mt-2 text-gray-400">{product.detail}</p>

                <div className="mt-6 flex items-center justify-between">
                  <p className="text-2xl font-black text-green-400">
                    {product.price}
                  </p>

                  <a
                    href="#preorder"
                    className="rounded-full bg-green-400 px-5 py-3 text-sm font-bold text-black hover:bg-green-300"
                  >
                    Pre-Order
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold uppercase tracking-[0.3em] text-green-400">
            Why This Drop?
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-black md:text-6xl">
            A smart first campaign for MANTIX.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-black p-6"
              >
                <h3 className="text-xl font-bold text-green-400">
                  {feature.title}
                </h3>
                <p className="mt-4 leading-7 text-gray-400">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preorder */}
      <section id="preorder" className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-green-500/30 bg-zinc-950 p-8 shadow-[0_0_40px_rgba(34,197,94,0.12)] md:p-12">
          <div className="flex justify-center">
            <Image
              src="/MANTIX_LOGO.png"
              alt="MANTIX Logo"
              width={100}
              height={100}
              className="drop-shadow-[0_0_22px_rgba(34,197,94,0.75)]"
            />
          </div>

          <p className="mt-6 text-center font-semibold uppercase tracking-[0.3em] text-green-400">
            Pre-Order Interest
          </p>

          <h2 className="mt-4 text-center text-4xl font-black md:text-5xl">
            Reserve your football drop tee.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-center leading-8 text-gray-300">
            This form is currently for collecting interest. Next, we can connect
            it to Supabase, MongoDB, or a backend API so every order is saved.
          </p>

          <form className="mt-10 grid gap-4">
            <input
              className="rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-green-400"
              placeholder="Full Name"
            />

            <input
              className="rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-green-400"
              placeholder="Phone Number"
            />

            <input
              className="rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-green-400"
              placeholder="City / District"
            />

            <select className="rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-green-400">
              <option>Select T-Shirt</option>
              <option>Black Football Drop Tee</option>
              <option>Dark Green Matchday Tee</option>
              <option>MANTIX Passion Tee</option>
            </select>

            <select className="rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-green-400">
              <option>Preferred Size</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
            </select>

            <textarea
              className="rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-green-400"
              placeholder="Any design, color, or delivery suggestion?"
            />

            <button
              type="button"
              className="rounded-full bg-green-400 px-8 py-4 font-bold text-black hover:bg-green-300"
            >
              Submit Pre-Order Interest
            </button>
          </form>
        </div>
      </section>

      {/* Legal / Safety Note */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-yellow-500/30 bg-yellow-500/10 p-6 text-sm leading-7 text-yellow-100">
          <strong>Design note:</strong> MANTIX football tees should use original
          football-inspired artwork. Avoid official FIFA, World Cup, country
          federation, club, or player-owned logos unless proper permission is
          obtained.
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="border-t border-green-500/30 px-6 py-12 text-center text-gray-400"
      >
        <div className="flex justify-center">
          <Image
            src="/MANTIX_LOGO.png"
            alt="MANTIX Logo"
            width={80}
            height={80}
            className="mb-5 drop-shadow-[0_0_18px_rgba(34,197,94,0.75)]"
          />
        </div>

        <h2 className="text-2xl font-black tracking-[0.25em] text-green-400">
          MANTIX
        </h2>

        <p className="mt-3">Smart Fashion. Sharp Identity.</p>
        <p className="mt-3">Instagram • TikTok • Facebook</p>
        <p className="mt-4 text-sm text-gray-500">
          © 2026 MANTIX. Building smart fashion step by step.
        </p>
      </footer>
    </main>
  );
}