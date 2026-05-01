"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    {
      name: "Black Oversized Tee",
      price: "Rs. 1,499",
      fit: "Oversized Fit",
      detail: "Premium everyday streetwear essential",
      tag: "BESTSELLER",
      color: "from-neutral-900 to-black",
      accent: "#22c55e",
    },
    {
      name: "White Essential Tee",
      price: "Rs. 1,399",
      fit: "Regular / Oversized",
      detail: "Clean minimal design for daily wear",
      tag: "CLASSIC",
      color: "from-zinc-800 to-neutral-900",
      accent: "#d4d4d4",
    },
    {
      name: "Dark Green Signature",
      price: "Rs. 1,499",
      fit: "Oversized Fit",
      detail: "Core MANTIX identity colorway",
      tag: "SIGNATURE",
      color: "from-green-950 to-black",
      accent: "#4ade80",
    },
  ];

  const stats = [
    { value: "3", label: "Signature Designs" },
    { value: "Rs.1,399", label: "Starting Price" },
    { value: "100%", label: "Nepal-Focused" },
    { value: "∞", label: "Identity" },
  ];

  return (
    <main
      className="min-h-screen overflow-x-hidden"
      style={{
        background: "#080808",
        color: "#f0f0f0",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;0,9..40,900;1,9..40,300;1,9..40,400&family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap');

        :root {
          --green: #22c55e;
          --green-dim: #16a34a;
          --green-glow: rgba(34,197,94,0.18);
          --surface: #0f0f0f;
          --surface-2: #141414;
          --border: rgba(255,255,255,0.07);
          --text-muted: #6b6b6b;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        html { scroll-behavior: smooth; }

        ::selection { background: var(--green); color: #000; }

        .bebas { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.04em; }
        .mono { font-family: 'Space Mono', monospace; }

        .noise-overlay {
          position: fixed; inset: 0; pointer-events: none; z-index: 100; opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 128px 128px;
        }

        .scanline {
          position: fixed; top: 0; left: 0; width: 100%; height: 2px;
          background: linear-gradient(to right, transparent, var(--green), transparent);
          opacity: 0.6; z-index: 200; pointer-events: none;
          animation: scanDown 8s linear infinite;
        }
        @keyframes scanDown {
          0% { top: -2px; opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { top: 100vh; opacity: 0; }
        }

        .ticker-wrap {
          overflow: hidden; white-space: nowrap;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          background: #0a0a0a;
        }
        .ticker-track {
          display: inline-flex; gap: 0;
          animation: ticker 28s linear infinite;
        }
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        .product-card {
          position: relative; overflow: hidden;
          border: 1px solid var(--border);
          border-radius: 2px;
          transition: border-color 0.3s, transform 0.4s;
          background: var(--surface);
          cursor: pointer;
        }
        .product-card:hover { border-color: var(--green); transform: translateY(-4px); }
        .product-card::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, var(--green-glow), transparent 60%);
          opacity: 0; transition: opacity 0.4s;
        }
        .product-card:hover::before { opacity: 1; }

        .glow-btn {
          position: relative; overflow: hidden;
          background: var(--green); color: #000;
          border: none; border-radius: 2px;
          font-weight: 700; font-size: 0.75rem;
          letter-spacing: 0.14em; text-transform: uppercase;
          padding: 14px 32px; cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .glow-btn:hover { background: #4ade80; transform: scale(1.02); }

        .outline-btn {
          border: 1px solid var(--green); color: var(--green);
          background: transparent; border-radius: 2px;
          font-weight: 700; font-size: 0.75rem;
          letter-spacing: 0.14em; text-transform: uppercase;
          padding: 14px 32px; cursor: pointer;
          transition: background 0.2s, color 0.2s;
          text-decoration: none; display: inline-block;
        }
        .outline-btn:hover { background: var(--green); color: #000; }

        .feature-item {
          border-bottom: 1px solid var(--border);
          padding: 28px 0;
          display: grid; grid-template-columns: 3rem 1fr auto;
          align-items: start; gap: 20px;
          transition: background 0.2s;
        }
        .feature-item:last-child { border-bottom: none; }

        .marquee-hero {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(80px, 15vw, 200px);
          line-height: 0.9;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.12);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          animation: marqueeSlide 22s linear infinite;
        }
        @keyframes marqueeSlide {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .badge {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem; letter-spacing: 0.18em;
          padding: 4px 10px; border-radius: 1px;
          text-transform: uppercase;
          border: 1px solid var(--green);
          color: var(--green);
          display: inline-block;
        }

        .grid-cross {
          position: absolute;
          width: 12px; height: 12px;
          border: 1px solid var(--green);
          opacity: 0.5;
        }
        .grid-cross::before {
          content: ''; position: absolute;
          left: 50%; top: -4px;
          width: 1px; height: 20px;
          background: var(--green); transform: translateX(-50%);
        }
        .grid-cross::after {
          content: ''; position: absolute;
          top: 50%; left: -4px;
          height: 1px; width: 20px;
          background: var(--green); transform: translateY(-50%);
        }

        .stat-block {
          border-left: 1px solid var(--border);
          padding-left: 28px;
        }
        .stat-block:first-child { border-left: none; padding-left: 0; }

        .input-field {
          width: 100%;
          background: #0a0a0a;
          border: 1px solid var(--border);
          border-radius: 2px;
          padding: 14px 18px;
          color: #f0f0f0;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .input-field:focus { border-color: var(--green); }
        .input-field::placeholder { color: var(--text-muted); }

        .section-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem; letter-spacing: 0.24em;
          text-transform: uppercase; color: var(--green);
        }

        .corner-bracket {
          position: absolute;
          width: 18px; height: 18px;
          border-color: var(--green); border-style: solid;
          opacity: 0.6;
        }
        .tl { top: 10px; left: 10px; border-width: 1px 0 0 1px; }
        .tr { top: 10px; right: 10px; border-width: 1px 1px 0 0; }
        .bl { bottom: 10px; left: 10px; border-width: 0 0 1px 1px; }
        .br { bottom: 10px; right: 10px; border-width: 0 1px 1px 0; }

        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>

      {/* Atmosphere overlays */}
      <div className="noise-overlay" />
      <div className="scanline" />

      {/* Header */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          borderBottom: `1px solid ${scrollY > 40 ? "rgba(34,197,94,0.2)" : "transparent"}`,
          background: scrollY > 40 ? "rgba(8,8,8,0.92)" : "transparent",
          backdropFilter: scrollY > 40 ? "blur(20px)" : "none",
          transition: "all 0.4s",
          padding: "0 40px",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <div style={{ position: "relative" }}>
            <div style={{
              position: "absolute", inset: -4,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(34,197,94,0.25), transparent 70%)",
            }} />
            <Image src="/MANTIX_LOGO.png" alt="MANTIX" width={42} height={42} style={{ borderRadius: "50%", position: "relative" }} />
          </div>
          <div>
            <div className="bebas" style={{ fontSize: "1.5rem", color: "#22c55e", lineHeight: 1, letterSpacing: "0.2em" }}>MANTIX</div>
            <div className="mono" style={{ fontSize: "0.5rem", letterSpacing: "0.3em", color: "#6b6b6b", textTransform: "uppercase" }}>Designed T-Shirts</div>
          </div>
        </a>

        <nav className="hide-mobile" style={{ display: "flex", gap: "40px", listStyle: "none" }}>
          {["Collection", "Why MANTIX", "Early Access", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              style={{
                textDecoration: "none",
                color: "#8a8a8a",
                fontSize: "0.75rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#22c55e")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#8a8a8a")}
            >
              {item}
            </a>
          ))}
        </nav>

        <a href="#early-access" className="glow-btn hide-mobile" style={{ textDecoration: "none" }}>
          Join Early Access
        </a>

        <button
          className="show-mobile"
          style={{ display: "none", background: "none", border: "1px solid rgba(34,197,94,0.4)", color: "#22c55e", padding: "8px 12px", fontSize: "0.65rem", letterSpacing: "0.14em", cursor: "pointer", borderRadius: "2px" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 49,
          background: "#080808", padding: "100px 40px 40px",
          display: "flex", flexDirection: "column", gap: "32px",
        }}>
          {["Collection", "Why MANTIX", "Early Access", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="bebas"
              style={{ fontSize: "3rem", color: "#f0f0f0", textDecoration: "none" }}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {/* Hero */}
      <section ref={heroRef} style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>

        {/* Background grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(34,197,94,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, black 30%, transparent 100%)",
        }} />

        {/* Radial glow */}
        <div style={{
          position: "absolute", top: "15%", right: "10%",
          width: "600px", height: "600px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)",
          filter: "blur(40px)", pointerEvents: "none",
        }} />

        {/* Corner decoration */}
        <div style={{ position: "absolute", top: "100px", left: "40px", opacity: 0.4 }}>
          <div className="mono" style={{ fontSize: "0.55rem", color: "#22c55e", letterSpacing: "0.2em" }}>SYS.001</div>
          <div className="mono" style={{ fontSize: "0.55rem", color: "#4a4a4a", letterSpacing: "0.2em", marginTop: "4px" }}>FIRST DROP / 2026</div>
        </div>

        <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "120px 40px 60px", maxWidth: "1320px", margin: "0 auto", width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center", width: "100%" }}>

            {/* Left */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "32px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 14px #22c55e", display: "block", animation: "pulse 2s ease-in-out infinite" }} />
                <span className="mono" style={{ fontSize: "0.6rem", letterSpacing: "0.22em", color: "#22c55e", textTransform: "uppercase" }}>First MANTIX Drop — Nepal</span>
              </div>
              <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>

              <h1 className="bebas" style={{
                fontSize: "clamp(72px, 10vw, 140px)",
                lineHeight: 0.92,
                color: "#f5f5f5",
                marginBottom: "8px",
              }}>
                WEAR YOUR
              </h1>
              <h1 className="bebas" style={{
                fontSize: "clamp(72px, 10vw, 140px)",
                lineHeight: 0.92,
                color: "#22c55e",
                marginBottom: "32px",
                textShadow: "0 0 60px rgba(34,197,94,0.4)",
              }}>
                IDENTITY
              </h1>

              <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "#8a8a8a", maxWidth: "460px", marginBottom: "40px" }}>
                MANTIX launches with three statement T-shirts built for Nepal's new generation — clean graphics, sharp identity, premium feel at a real price.
              </p>

              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "56px" }}>
                <a href="#collection" className="glow-btn" style={{ textDecoration: "none" }}>View Designs</a>
                <a href="#early-access" className="outline-btn">Join Early Access</a>
              </div>

              {/* Stats */}
              <div style={{ display: "flex", gap: "0" }}>
                {stats.map((s) => (
                  <div key={s.label} className="stat-block" style={{ flex: 1 }}>
                    <div className="bebas" style={{ fontSize: "2rem", color: "#22c55e", lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontSize: "0.65rem", color: "#4a4a4a", marginTop: "4px", letterSpacing: "0.12em", textTransform: "uppercase" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — logo display */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative", width: "420px", height: "480px" }}>

                {/* Outer ring decoration */}
                <div style={{
                  position: "absolute", inset: 0,
                  border: "1px solid rgba(34,197,94,0.15)",
                  borderRadius: "4px",
                }} />
                <div style={{ position: "absolute", inset: "12px", border: "1px dashed rgba(34,197,94,0.08)", borderRadius: "2px" }} />

                {/* Corner brackets */}
                <div className="corner-bracket tl" />
                <div className="corner-bracket tr" />
                <div className="corner-bracket bl" />
                <div className="corner-bracket br" />

                {/* Top label */}
                <div className="mono" style={{
                  position: "absolute", top: "24px", left: 0, right: 0,
                  textAlign: "center", fontSize: "0.55rem", letterSpacing: "0.28em",
                  color: "rgba(34,197,94,0.5)", textTransform: "uppercase",
                }}>MANTIX / SS-2026 / NP</div>

                {/* Main logo */}
                <div style={{
                  position: "absolute", inset: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <div style={{ position: "relative" }}>
                    <div style={{
                      position: "absolute", inset: "-60px",
                      background: "radial-gradient(circle, rgba(34,197,94,0.2) 0%, transparent 70%)",
                      borderRadius: "50%", filter: "blur(20px)",
                    }} />
                    <Image
                      src="/MANTIX_LOGO.png"
                      alt="MANTIX"
                      width={280}
                      height={280}
                      style={{
                        filter: "drop-shadow(0 0 50px rgba(34,197,94,0.7))",
                        position: "relative",
                        animation: "float 6s ease-in-out infinite",
                      }}
                    />
                  </div>
                  <style>{`@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }`}</style>
                </div>

                {/* Bottom label */}
                <div style={{
                  position: "absolute", bottom: "24px", left: "24px", right: "24px",
                  borderTop: "1px solid rgba(34,197,94,0.2)",
                  paddingTop: "14px",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                  <span className="mono" style={{ fontSize: "0.55rem", color: "rgba(34,197,94,0.5)", letterSpacing: "0.18em" }}>DESIGNED T-SHIRTS</span>
                  <span className="badge">LIMITED</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee bottom */}
        <div style={{ overflow: "hidden", paddingBottom: "0px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div style={{ display: "flex", width: "max-content" }}>
            <div className="marquee-hero">
              MANTIX &nbsp;·&nbsp; DESIGNED T-SHIRTS &nbsp;·&nbsp; NEPAL &nbsp;·&nbsp; SMART FASHION &nbsp;·&nbsp; SHARP IDENTITY &nbsp;·&nbsp; 2026 &nbsp;·&nbsp;&nbsp;
            </div>
            <div className="marquee-hero" aria-hidden>
              MANTIX &nbsp;·&nbsp; DESIGNED T-SHIRTS &nbsp;·&nbsp; NEPAL &nbsp;·&nbsp; SMART FASHION &nbsp;·&nbsp; SHARP IDENTITY &nbsp;·&nbsp; 2026 &nbsp;·&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </section>

      {/* Ticker bar */}
      <div className="ticker-wrap" style={{ padding: "10px 0" }}>
        <div className="ticker-track">
          {Array(8).fill(null).map((_, i) => (
            <span key={i} className="mono" style={{ fontSize: "0.6rem", letterSpacing: "0.22em", color: "#4a4a4a", padding: "0 32px", textTransform: "uppercase" }}>
              LIMITED TEST DROP &nbsp;·&nbsp; EARLY ACCESS OPEN &nbsp;·&nbsp; NEPAL ONLY &nbsp;·&nbsp; FIRST COLLECTION &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Collection */}
      <section id="collection" style={{ padding: "120px 40px", maxWidth: "1320px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "64px", flexWrap: "wrap", gap: "24px" }}>
          <div>
            <div className="section-label" style={{ marginBottom: "16px" }}>— First Collection / 2026</div>
            <h2 className="bebas" style={{ fontSize: "clamp(48px, 7vw, 96px)", lineHeight: 0.93, color: "#f5f5f5" }}>
              THREE DROPS.<br /><span style={{ color: "#22c55e" }}>ONE IDENTITY.</span>
            </h2>
          </div>
          <p style={{ maxWidth: "340px", color: "#6b6b6b", lineHeight: 1.8, fontSize: "0.9rem" }}>
            Each design is built around MANTIX's core visual language. Vote for your pick to shape what gets made first.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.05)" }}>
          {products.map((product, i) => (
            <div key={product.name} className="product-card" style={{ background: "#0b0b0b" }}>
              {/* Image zone */}
              <div style={{
                height: "340px",
                background: `linear-gradient(160deg, ${product.color.replace("from-", "").replace(" to-", ", ")})`,
                position: "relative", overflow: "hidden",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "linear-gradient(rgba(34,197,94,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.03) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }} />
                <div style={{
                  position: "absolute", top: "14px", right: "14px",
                }}>
                  <span className="mono" style={{ fontSize: "0.55rem", letterSpacing: "0.2em", padding: "5px 10px", border: "1px solid rgba(34,197,94,0.3)", color: "#22c55e", textTransform: "uppercase" }}>
                    {product.tag}
                  </span>
                </div>
                <div style={{
                  position: "absolute", bottom: "14px", left: "14px",
                }}>
                  <span className="mono" style={{ fontSize: "0.5rem", letterSpacing: "0.18em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase" }}>
                    {String(i + 1).padStart(2, "0")} / 03
                  </span>
                </div>
                <div style={{ position: "relative" }}>
                  <div style={{
                    position: "absolute", inset: "-40px",
                    background: `radial-gradient(circle, ${product.accent}30 0%, transparent 70%)`,
                    filter: "blur(10px)", borderRadius: "50%",
                  }} />
                  <Image
                    src="/MANTIX_LOGO.png"
                    alt={product.name}
                    width={160}
                    height={160}
                    style={{
                      filter: `drop-shadow(0 0 30px ${product.accent}80)`,
                      position: "relative",
                    }}
                  />
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: "28px" }}>
                <div style={{ fontSize: "0.65rem", letterSpacing: "0.18em", color: "#22c55e", textTransform: "uppercase", marginBottom: "10px" }}>
                  Designed Tee
                </div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#f0f0f0", marginBottom: "6px" }}>{product.name}</h3>
                <p style={{ fontSize: "0.8rem", color: "#5a5a5a", marginBottom: "4px", letterSpacing: "0.06em" }}>{product.fit}</p>
                <p style={{ fontSize: "0.85rem", color: "#7a7a7a", marginBottom: "28px" }}>{product.detail}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="bebas" style={{ fontSize: "1.8rem", color: "#22c55e", letterSpacing: "0.06em" }}>{product.price}</span>
                  <a href="#early-access" className="glow-btn" style={{ textDecoration: "none", padding: "10px 22px" }}>
                    Vote / Reserve
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why MANTIX — accordion style */}
      <section id="why-mantix" style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "120px 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>

            <div style={{ position: "sticky", top: "100px" }}>
              <div className="section-label" style={{ marginBottom: "20px" }}>— Why MANTIX?</div>
              <h2 className="bebas" style={{ fontSize: "clamp(48px, 6vw, 82px)", lineHeight: 0.93, color: "#f5f5f5", marginBottom: "24px" }}>
                A SMALL START.<br /><span style={{ color: "#22c55e" }}>A BIG VISION.</span>
              </h2>
              <p style={{ color: "#5a5a5a", lineHeight: 1.8, fontSize: "0.9rem", marginBottom: "40px" }}>
                MANTIX is Nepal's next streetwear identity — starting with three designed T-shirts and scaling with AI-driven fashion intelligence.
              </p>
              <div style={{ position: "relative", display: "inline-block" }}>
                <Image
                  src="/MANTIX_LOGO.png"
                  alt="MANTIX"
                  width={180}
                  height={180}
                  style={{ filter: "drop-shadow(0 0 30px rgba(34,197,94,0.5)) grayscale(20%)", opacity: 0.8 }}
                />
              </div>
            </div>

            <div>
              {[
                { num: "01", title: "Designed T-Shirts", desc: "Original MANTIX T-shirt designs made for everyday style and identity. Every graphic means something." },
                { num: "02", title: "Modern Streetwear", desc: "Minimal, bold, and youth-focused fashion for Nepal's next generation. No compromise on vision." },
                { num: "03", title: "Affordable Premium", desc: "We believe premium design shouldn't cost premium money. Early customers get the best prices." },
                { num: "04", title: "AI-Powered Growth", desc: "Customer choices and feedback will directly guide future collections. Fashion that learns from you." },
              ].map((item) => (
                <div key={item.num} className="feature-item">
                  <span className="mono" style={{ fontSize: "0.65rem", color: "#22c55e", letterSpacing: "0.1em", paddingTop: "4px" }}>{item.num}</span>
                  <div>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#e0e0e0", marginBottom: "8px" }}>{item.title}</h3>
                    <p style={{ color: "#5a5a5a", fontSize: "0.9rem", lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                  <div style={{ width: "8px", height: "8px", border: "1px solid rgba(34,197,94,0.3)", borderRadius: "50%", marginTop: "6px", flexShrink: 0 }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full-width CTA strip */}
      <div style={{
        background: "linear-gradient(90deg, #0d2010 0%, #0a0a0a 50%, #0d2010 100%)",
        borderTop: "1px solid rgba(34,197,94,0.2)",
        borderBottom: "1px solid rgba(34,197,94,0.2)",
        padding: "28px 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px",
      }}>
        <p className="bebas" style={{ fontSize: "1.6rem", letterSpacing: "0.1em", color: "#f5f5f5" }}>
          EARLY ACCESS OPENING SOON — <span style={{ color: "#22c55e" }}>HELP CHOOSE THE FIRST DROP</span>
        </p>
        <a href="#early-access" className="glow-btn" style={{ textDecoration: "none", whiteSpace: "nowrap" }}>
          Join Now →
        </a>
      </div>

      {/* Early Access Form */}
      <section id="early-access" style={{ padding: "120px 40px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div className="section-label" style={{ marginBottom: "20px", textAlign: "center" }}>— Early Access</div>
            <h2 className="bebas" style={{ fontSize: "clamp(48px, 7vw, 88px)", lineHeight: 0.92, color: "#f5f5f5", marginBottom: "20px" }}>
              CLAIM YOUR<br /><span style={{ color: "#22c55e" }}>SPOT.</span>
            </h2>
            <p style={{ color: "#6b6b6b", lineHeight: 1.8, fontSize: "0.95rem" }}>
              Fill in your details to vote on designs and get early access pricing before we launch publicly.
            </p>
          </div>

          {/* Form card */}
          <div style={{
            position: "relative",
            border: "1px solid rgba(34,197,94,0.2)",
            borderRadius: "4px",
            background: "#0b0b0b",
            padding: "48px",
            overflow: "hidden",
          }}>
            <div className="corner-bracket tl" />
            <div className="corner-bracket tr" />
            <div className="corner-bracket bl" />
            <div className="corner-bracket br" />

            <div style={{
              position: "absolute", top: 0, right: 0,
              width: "300px", height: "300px",
              background: "radial-gradient(circle, rgba(34,197,94,0.07) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            <div style={{ display: "grid", gap: "16px", position: "relative" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <input className="input-field" placeholder="Full Name" />
                <input className="input-field" placeholder="Phone Number" />
              </div>
              <input className="input-field" placeholder="City / District" />
              <select className="input-field" style={{ appearance: "none", cursor: "pointer" }}>
                <option value="">Select T-Shirt Design</option>
                <option>Black Oversized Tee — Rs. 1,499</option>
                <option>White Essential Tee — Rs. 1,399</option>
                <option>Dark Green Signature Tee — Rs. 1,499</option>
              </select>
              <select className="input-field" style={{ appearance: "none", cursor: "pointer" }}>
                <option value="">Preferred Size</option>
                {["S", "M", "L", "XL", "XXL"].map(s => <option key={s}>{s}</option>)}
              </select>
              <textarea
                className="input-field"
                placeholder="Any design, color, or delivery suggestion?"
                style={{ minHeight: "100px", resize: "vertical" }}
              />

              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "8px" }}>
                <button type="button" className="glow-btn" style={{ flex: 1, fontSize: "0.8rem" }}>
                  Submit Early Access Interest →
                </button>
              </div>

              <p className="mono" style={{ fontSize: "0.55rem", color: "#3a3a3a", letterSpacing: "0.14em", textAlign: "center" }}>
                YOUR DATA IS SAFE. MANTIX DOES NOT SHARE YOUR INFORMATION.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        background: "#050505",
        padding: "80px 40px 40px",
      }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "60px", marginBottom: "80px", flexWrap: "wrap" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <Image src="/MANTIX_LOGO.png" alt="MANTIX" width={44} height={44} style={{ filter: "drop-shadow(0 0 14px rgba(34,197,94,0.6))", borderRadius: "50%" }} />
                <span className="bebas" style={{ fontSize: "1.5rem", color: "#22c55e", letterSpacing: "0.2em" }}>MANTIX</span>
              </div>
              <p style={{ color: "#4a4a4a", fontSize: "0.85rem", lineHeight: 1.8, maxWidth: "240px" }}>
                Smart Fashion. Sharp Identity.<br />Nepal's next streetwear identity starts here.
              </p>
            </div>
            <div>
              <div className="section-label" style={{ marginBottom: "20px" }}>Navigate</div>
              {["Collection", "Why MANTIX", "Early Access", "Contact"].map(l => (
                <div key={l} style={{ marginBottom: "12px" }}>
                  <a href={`#${l.toLowerCase().replace(" ", "-")}`} style={{ color: "#4a4a4a", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "#22c55e")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "#4a4a4a")}
                  >{l}</a>
                </div>
              ))}
            </div>
            <div>
              <div className="section-label" style={{ marginBottom: "20px" }}>Follow MANTIX</div>
              {["Instagram", "TikTok", "Facebook"].map(s => (
                <div key={s} style={{ marginBottom: "12px" }}>
                  <a href="#" style={{ color: "#4a4a4a", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "#22c55e")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "#4a4a4a")}
                  >↗ {s}</a>
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
            <span className="mono" style={{ fontSize: "0.55rem", color: "#2a2a2a", letterSpacing: "0.18em" }}>© 2026 MANTIX. ALL RIGHTS RESERVED.</span>
            <span className="mono" style={{ fontSize: "0.55rem", color: "#2a2a2a", letterSpacing: "0.18em" }}>BUILDING SMART FASHION — STEP BY STEP.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
