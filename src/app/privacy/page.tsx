import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[1000] bg-[var(--bg-primary)]/85 backdrop-blur-xl border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <Link href="/"><img src="/logo.jpg" alt="Anomalist Studios" className="h-[44px] w-auto" /></Link>
          <Link href="/onboarding" className="btn btn-primary text-sm !py-2.5 !px-6">Get Started</Link>
        </div>
      </nav>

      <section className="pt-[140px] pb-[60px] text-center bg-[var(--bg-secondary)] border-b border-[var(--border)]">
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-[var(--text-muted)]">Last updated: April 2026</p>
      </section>

      <section className="py-[60px] px-6">
        <div className="max-w-[700px] mx-auto text-[0.95rem] text-[var(--text-secondary)] leading-[1.8] space-y-6">
          <p>Anomalist Studios (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates anomalistmaximus.com. This Privacy Policy explains what information we collect, how we use it, and your rights.</p>

          <h2 className="text-xl font-bold text-[var(--text-primary)] !mt-10">Information We Collect</h2>
          <p><strong className="text-[var(--text-primary)]">Account Information:</strong> When you sign up, we collect your name, email address, business name, and password (stored as a cryptographic hash).</p>
          <p><strong className="text-[var(--text-primary)]">Business Profile:</strong> During onboarding, we collect brand voice descriptions, competitor information, target audience details, social media URLs, and business goals. This is used exclusively to generate content for your business.</p>
          <p><strong className="text-[var(--text-primary)]">Payment Information:</strong> Payment processing is handled by Stripe. We do not store credit card numbers. We store your Stripe customer ID and subscription status.</p>
          <p><strong className="text-[var(--text-primary)]">Usage Data:</strong> We collect basic technical data (IP address, browser type) for security and performance.</p>

          <h2 className="text-xl font-bold text-[var(--text-primary)] !mt-10">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To generate and deliver content matched to your brand</li>
            <li>To manage your account and subscription</li>
            <li>To improve our services</li>
            <li>To communicate with you about your account</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className="text-xl font-bold text-[var(--text-primary)] !mt-10">Data Sharing</h2>
          <p>We do not sell your personal information. We share data only with: Stripe (payment processing), AI model providers (content generation — your brand profile is used as input), and hosting providers (Vercel, Neon).</p>

          <h2 className="text-xl font-bold text-[var(--text-primary)] !mt-10">Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal data at any time by contacting us at hello@anomaliststudios.com.</p>

          <h2 className="text-xl font-bold text-[var(--text-primary)] !mt-10">Contact</h2>
          <p>Questions? Email <a href="mailto:hello@anomaliststudios.com" className="text-[var(--accent)]">hello@anomaliststudios.com</a> or use our <Link href="/contact" className="text-[var(--accent)]">contact form</Link>.</p>
        </div>
      </section>

      <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)] py-8 px-6 text-center text-xs text-[var(--text-muted)]">
        © {new Date().getFullYear()} Anomalist Studios. All rights reserved.
      </footer>
    </>
  );
}
