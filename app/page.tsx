import Image from "next/image";

export default function Home() {
  const products = [
    {
      name: "Black Oversized Tee",
      price: "Rs. 1,499",
      fit: "Oversized Fit",
      detail: "Premium everyday streetwear essential",
    },
    {
      name: "White Essential Tee",
      price: "Rs. 1,399",
      fit: "Regular / Oversized",
      detail: "Clean minimal design for daily wear",
    },
    {
      name: "Dark Green Signature Tee",
      price: "Rs. 1,499",
      fit: "Oversized Fit",
      detail: "Core MANTIX identity colorway",
    },
  ];

  const features = [
    {
      title: "Premium T-Shirts",
      text: "Soft, comfortable, and clean designs made for everyday wear.",
    },
    {
      title: "Modern Streetwear",
      text: "Minimal, bold, and youth-focused fashion for Nepal’s new generation.",
    },
    {
      title: "Affordable Style",
      text: "A premium look at a practical price for early customers.",
    },
    {
      title: "AI-Powered Growth",
      text: "Customer choices and feedback will guide future collections.",
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
                Premium T-Shirts
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
              Early Access
            </a>
            <a href="#contact" className="hover:text-green-400">
              Contact
            </a>
          </nav>

          <a
            href="#preorder"
            className="hidden rounded-full bg-green-400 px-5 py-3 text-sm font-bold text-black hover:bg-green-300 md:inline-block"
          >
            Join Early Access
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
              First MANTIX T-Shirt Collection
            </div>

            <h2 className="text-5xl font-black uppercase tracking-tight md:text-7xl">
              MANTIX
              <span className="block text-green-400">T-Shirt Drop</span>
            </h2>

            <p className="mt-6 max-w-xl text-xl font-semibold uppercase tracking-[0.18em] text-gray-200">
              Smart Fashion. Sharp Identity.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              MANTIX is starting with premium T-shirts for Nepal’s new
              generation. Clean designs, strong identity, affordable pricing,
              and a future AI-powered shopping experience.
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
                Join Early Access
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-green-500/30 bg-zinc-950/80 p-4">
                <p className="text-sm uppercase tracking-widest text-green-400">
                  First Product
                </p>
                <p className="mt-2 text-gray-300">
                  Premium T-shirts only
                </p>
              </div>

              <div className="rounded-2xl border border-green-500/30 bg-zinc-950/80 p-4">
                <p className="text-sm uppercase tracking-widest text-green-400">
                  Limited Test Drop
                </p>
                <p className="mt-2 text-gray-300">
                  Small batch before scaling
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
                    First Drop
                  </p>
                  <p className="mt-2 text-2xl font-black">
                    Premium T-Shirts
                  </p>
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
            Early access opening soon — help us choose the first MANTIX T-shirt designs.
          </p>
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold uppercase tracking-[0.3em] text-green-400">
            First Collection
          </p>

          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-4xl font-black md:text-6xl">
              Premium essentials built for everyday identity.
            </h2>

            <p className="max-w-md text-gray-300">
              Start with three strong T-shirt designs, collect demand, and
              improve future drops using real customer feedback.
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
                  First Drop
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
                    Vote / Reserve
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
            Why MANTIX?
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-black md:text-6xl">
            A simple start with a scalable fashion vision.
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

      {/* Early Access */}
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
            Early Access
          </p>

          <h2 className="mt-4 text-center text-4xl font-black md:text-5xl">
            Help choose the first MANTIX T-shirt drop.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-center leading-8 text-gray-300">
            This form is currently for collecting interest. Next, we can connect
            it to Supabase, MongoDB, or a backend API so every response is saved.
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
              <option>Black Oversized Tee</option>
              <option>White Essential Tee</option>
              <option>Dark Green Signature Tee</option>
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
              Submit Early Access Interest
            </button>
          </form>
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