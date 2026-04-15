"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const techStats = [
  { number: "16", label: "AI Agents Working Together" },
  { number: "6", label: "Content Channels Covered" },
  { number: "0", label: "Hours You Spend on Content" },
  { number: "24hrs", label: "From Onboarding to First Content" },
];

function MatrixCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w: number, h: number, columns: number, drops: number[];
    const chars = "MAXIMUSANOMALST01アイウエオカキクケコサシスセソ";
    const fontSize = 14;

    function resize() {
      const rect = canvas!.parentElement!.getBoundingClientRect();
      w = canvas!.width = rect.width;
      h = canvas!.height = rect.height;
      columns = Math.floor(w / fontSize);
      drops = Array(columns).fill(1).map(() => Math.random() * -100);
    }

    function draw() {
      ctx!.fillStyle = "rgba(10, 10, 10, 0.08)";
      ctx!.fillRect(0, 0, w, h);
      ctx!.font = fontSize + "px monospace";

      for (let i = 0; i < columns; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const brightness = Math.random();
        if (brightness > 0.92) {
          ctx!.fillStyle = "rgba(212, 145, 30, 0.9)";
        } else if (brightness > 0.7) {
          ctx!.fillStyle = "rgba(212, 145, 30, 0.4)";
        } else {
          ctx!.fillStyle = "rgba(212, 145, 30, 0.15)";
        }

        ctx!.fillText(char, x, y);

        if (y > h && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-[1]" />;
}

export default function AboutPage() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-[1000] bg-[rgba(10,10,10,0.85)] backdrop-blur-xl border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <Link href="/" className="flex items-center h-full">
            <img src="/logo.jpg" alt="Anomalist Studios" className="h-[44px] w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="nav-link text-[0.9rem] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Home</Link>
            <Link href="/about" className="nav-link text-[0.9rem] font-medium text-[var(--text-primary)]">About</Link>
            <Link href="/blog" className="nav-link text-[0.9rem] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Blog</Link>
            <Link href="/onboarding" className="btn btn-primary text-sm !py-2.5 !px-6">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Page header */}
      <section className="pt-[140px] pb-[60px] text-center bg-[var(--bg-secondary)] border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="uppercase text-xs font-semibold tracking-[3px] text-[var(--accent)] mb-3">About Us</p>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4">The team behind Maximus.</h1>
          <p className="text-[1.1rem] text-[var(--text-secondary)] max-w-[600px] mx-auto">We built the AI content engine we always wished existed — then made it available to every business.</p>
        </div>
      </section>

      {/* Problem — text left, Matrix canvas right */}
      <section className="py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-6">Content shouldn&apos;t be this hard.</h2>
              <div className="space-y-5 text-[1.05rem] text-[var(--text-secondary)] leading-[1.8]">
                <p>Every small business owner knows the drill. You need to post on social media. You need to be consistent. You need to sound professional but still sound like yourself. You need to do it across Facebook, Instagram, LinkedIn, Google Business Profile — and somehow keep up with a blog, email list, and ad campaigns on top of it.</p>
                <p>Most businesses start strong. They post for a week or two, maybe a month. Then a busy season hits, or a key employee leaves, or life just gets in the way. The accounts go quiet. The algorithm buries them.</p>
                <p>Hiring a social media manager costs <strong className="text-[var(--text-primary)]">$3,000–$5,000 a month</strong> — and they still need direction, content briefs, and constant feedback. Freelancers are cheaper but inconsistent. DIY tools put the work back on you.</p>
              </div>
            </div>
            {/* Matrix canvas */}
            <div className="relative h-[400px] rounded-xl overflow-hidden bg-[var(--bg-primary)]">
              <MatrixCanvas />
              <div className="absolute inset-0 flex items-center justify-center z-[2]">
                <span className="text-[8rem] font-black text-[var(--accent)] drop-shadow-[0_0_40px_rgba(212,145,30,0.3)] select-none" style={{ textShadow: "0 0 40px rgba(212,145,30,0.3), 0 0 80px rgba(212,145,30,0.1)" }}>M</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution — reversed layout */}
      <section className="py-[100px] px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl font-extrabold text-[var(--accent)]">120+</span>
                  <span className="text-sm text-[var(--text-muted)]">Posts/Month</span>
                </div>
                <p className="text-xs text-[var(--text-muted)]">Per client, across all platforms</p>
              </div>
              <div className="p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl font-extrabold text-[var(--accent)]">🔍</span>
                  <span className="text-sm font-semibold">Competitive Intel</span>
                </div>
                <p className="text-xs text-[var(--text-muted)]">Weekly competitor research built into every content cycle</p>
              </div>
              <div className="p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl font-extrabold text-[var(--accent)]">📬</span>
                  <span className="text-sm font-semibold">Delivered, Not DIY</span>
                </div>
                <p className="text-xs text-[var(--text-muted)]">Content arrives in your dashboard. No software to learn.</p>
              </div>
            </div>
            <div>
              <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-6">We built the engine we always wished existed.</h2>
              <div className="space-y-5 text-[1.05rem] text-[var(--text-secondary)] leading-[1.8]">
                <p>Anomalist Studios started in production — cameras, microphones, editing bays. We spent years helping businesses tell their stories. But we kept running into the same problem: the content looked great, but nobody could keep the momentum going after the shoot was over.</p>
                <p>Businesses didn&apos;t need another one-time deliverable. They needed a system that could produce content every single day, across every platform, in their voice — without requiring them to think about it.</p>
                <p>So we built <strong className="text-[var(--text-primary)]">Maximus</strong> — a content engine that ingests everything about your brand and produces platform-native content that sounds like the business owner wrote it themselves.</p>
                <p>Content gets delivered straight to your dashboard. You can post it yourself, hand it to your team, or let our social media management team handle everything.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <p className="uppercase text-xs font-semibold tracking-[3px] text-[var(--accent)] mb-3">The Technology</p>
            <h2 className="text-[clamp(2rem,4vw,3rem)] mb-4">A multi-agent AI system. Not a chatbot.</h2>
            <p className="text-[1.1rem] text-[var(--text-secondary)] max-w-[600px] mx-auto">
              Maximus isn&apos;t one AI doing everything. It&apos;s a team of specialized agents — each handling a different aspect of your content strategy.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStats.map(s => (
              <div key={s.label} className="text-center p-9 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl card-hover">
                <p className="metric-number">{s.number}</p>
                <p className="text-[0.85rem] font-semibold mt-3 text-[var(--text-secondary)]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[100px] px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="cta-gradient rounded-2xl p-[60px_48px] text-center">
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold mb-4">Ready to see what Maximus writes for you?</h2>
            <p className="text-[1.05rem] text-[var(--text-secondary)] max-w-[500px] mx-auto mb-8">
              Complete our intake form. Tell us about your brand, your voice, and your competitors. Your first week of content is free.
            </p>
            <Link href="/onboarding" className="btn btn-primary">Start Onboarding →</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)] py-12 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between gap-8">
          <div>
            <img src="/logo.jpg" alt="Anomalist Studios" className="h-[60px] w-auto mb-2" />
            <p className="text-sm text-[var(--text-muted)] mt-2">Maximus by Anomalist Studios</p>
          </div>
          <div className="flex gap-8 text-sm text-[var(--text-secondary)]">
            <div className="space-y-2">
              <Link href="/" className="block hover:text-[var(--text-primary)]">Home</Link>
              <Link href="/about" className="block hover:text-[var(--text-primary)]">About</Link>
              <Link href="/blog" className="block hover:text-[var(--text-primary)]">Blog</Link>
            </div>
            <div className="space-y-2">
              <Link href="/privacy" className="block hover:text-[var(--text-primary)]">Privacy</Link>
              <Link href="/terms" className="block hover:text-[var(--text-primary)]">Terms</Link>
              <Link href="/contact" className="block hover:text-[var(--text-primary)]">Contact</Link>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto mt-8 pt-8 border-t border-[var(--border)] text-xs text-[var(--text-muted)]">
          © {new Date().getFullYear()} Anomalist Studios. All rights reserved.
        </div>
      </footer>
    </>
  );
}
