"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Wire to API route
    setStatus("sent");
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[1000] bg-[var(--bg-primary)]/85 backdrop-blur-xl border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <Link href="/"><img src="/logo.jpg" alt="Anomalist Studios" className="h-[44px] w-auto" /></Link>
          <Link href="/onboarding" className="btn btn-primary text-sm !py-2.5 !px-6">Get Started</Link>
        </div>
      </nav>

      <section className="pt-[140px] pb-[60px] text-center bg-[var(--bg-secondary)] border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold mb-4">Contact Us</h1>
          <p className="text-[1.1rem] text-[var(--text-secondary)]">Questions? We&apos;d love to hear from you.</p>
        </div>
      </section>

      <section className="py-[80px] px-6">
        <div className="max-w-[500px] mx-auto">
          {status === "sent" ? (
            <div className="text-center py-16">
              <p className="text-4xl mb-4">✓</p>
              <h2 className="text-xl font-bold mb-2">Message sent!</h2>
              <p className="text-[var(--text-secondary)]">We&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Name</label>
                <input value={name} onChange={e => setName(e.target.value)} required
                  className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                  className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Message</label>
                <textarea value={message} onChange={e => setMessage(e.target.value)} rows={5} required
                  className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] resize-none" />
              </div>
              <button type="submit" className="btn btn-primary w-full justify-center">Send Message</button>
            </form>
          )}
        </div>
      </section>

      <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)] py-8 px-6 text-center text-xs text-[var(--text-muted)]">
        © {new Date().getFullYear()} Anomalist Studios. All rights reserved.
      </footer>
    </>
  );
}
