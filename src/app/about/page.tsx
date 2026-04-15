import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

const techStats = [
  { number: "16", label: "AI Agents Working Together" },
  { number: "6", label: "Content Channels Covered" },
  { number: "0", label: "Hours You Spend on Content" },
  { number: "24hrs", label: "From Onboarding to First Content" },
];

export default function AboutPage() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-[1000] bg-[var(--bg-primary)]/85 backdrop-blur-xl border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">Anomalist <span className="accent">Studios</span></Link>
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

      {/* Problem */}
      <section className="py-[100px] px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-6">Content shouldn&apos;t be this hard.</h2>
          <div className="space-y-6 text-[1.05rem] text-[var(--text-secondary)] leading-[1.8]">
            <p>
              Every small business owner knows they need to post on social media. Facebook, Instagram, LinkedIn, Google Business Profile — every day, every platform, every audience expects something different.
            </p>
            <p>
              Then there&apos;s the blog. The email list. The ad campaigns. The seasonal promotions. The competitor who seems to be everywhere at once while you&apos;re trying to remember your Instagram password.
            </p>
            <p>
              Hiring a social media manager costs <strong className="text-[var(--text-primary)]">$3,000–$5,000 a month</strong>. Freelancers come and go. DIY AI tools make you do all the work yourself — writing prompts, editing output, scheduling posts, managing accounts. You saved $20 on a subscription and spent 15 hours a week doing marketing.
            </p>
            <p>That&apos;s not a solution. That&apos;s just a different kind of job.</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-[100px] px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-6">We built the engine we always wished existed.</h2>
          <div className="space-y-6 text-[1.05rem] text-[var(--text-secondary)] leading-[1.8]">
            <p>
              Anomalist Studios began in production services. We built websites, ran campaigns, and produced content for clients across dozens of industries.
            </p>
            <p>
              We kept hearing the same thing: <em>&ldquo;I know I need to post consistently, but I just don&apos;t have the time.&rdquo;</em>
            </p>
            <p>
              So we built <strong className="text-[var(--text-primary)]">Maximus</strong> — a content engine that ingests everything about your brand — your voice, your audience, your competitors, your goals — and produces platform-native content every single day. No prompts. No scheduling. No uploading. Content shows up in your dashboard, you approve it, and it goes live.
            </p>
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
            <Link href="/onboarding" className="btn btn-primary">Start Onboarding</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)] py-12 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between gap-8">
          <div>
            <p className="font-bold text-lg">Anomalist <span className="accent">Studios</span></p>
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
