import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Blog" };

const articles = [
  { slug: "why-most-small-businesses-fail-at-social-media", title: "Why Most Small Businesses Fail at Social Media (And What to Do Instead)", category: "Strategy", date: "April 9, 2026", readTime: "8 min", preview: "Social media can be a game-changer for small businesses, but most are doing it wrong. Learn the common mistakes and proven strategies that actually work.", featured: true },
  { slug: "website-speed-google-rankings", title: "Website Speed Is Killing Your Google Rankings: The Fix Most Small Businesses Miss", category: "SEO & Website Tips", date: "April 2026", readTime: "6 min", preview: "Your site looks great, but it loads in 6 seconds. Here's why that's costing you customers and how to fix it today." },
  { slug: "google-local-pack-guide", title: "How to Rank in Google's Local Pack: A Small Business Owner's Complete Guide", category: "SEO & Website Tips", date: "April 2026", readTime: "10 min", preview: "The top 3 local results get 44% of clicks. Here's how to make sure you're one of them." },
  { slug: "facebook-small-business-2026", title: "Facebook for Small Business in 2026: What Actually Works Now", category: "Platform", date: "April 2026", readTime: "7 min", preview: "The algorithm changed again. Here's what's working right now and what's wasting your time." },
  { slug: "social-media-insurance-agents-guide", title: "Social Media for Insurance Agents: The Complete 2026 Guide", category: "Insurance", date: "April 2026", readTime: "9 min", preview: "Independent agents compete against billion-dollar ad budgets. Here's how daily content levels the playing field." },
  { slug: "how-often-should-business-post", title: "How Often Should a Business Post on Social Media in 2026?", category: "Social Media", date: "April 2026", readTime: "5 min", preview: "The answer isn't 'when you feel like it.' Optimal posting frequency by platform, backed by data." },
  { slug: "social-media-firearms-training", title: "Social Media for Firearms Training: What Works (And What Gets You Banned)", category: "Firearms", date: "April 2026", readTime: "8 min", preview: "Platform compliance is a minefield. Here's how to build authority without triggering content removal." },
  { slug: "ai-content-marketing-explained", title: "AI Content Marketing: What It Actually Means for Your Business", category: "Strategy", date: "April 2026", readTime: "6 min", preview: "Cut through the hype. Here's what AI content marketing actually does, doesn't do, and why it matters." },
  { slug: "google-business-profile-posts", title: "Google Business Profile Posts: The Most Ignored Marketing Channel", category: "Strategy", date: "April 2026", readTime: "5 min", preview: "Most businesses ignore GBP posts entirely. That's a mistake — here's why and how to fix it." },
  { slug: "social-media-roi-local-business", title: "What's the ROI of Social Media for Local Businesses?", category: "Strategy", date: "April 2026", readTime: "7 min", preview: "How to measure what actually matters — not vanity metrics." },
  { slug: "linkedin-small-business", title: "LinkedIn for Small Business: Why You're Ignoring Your Best Platform", category: "Platform", date: "April 2026", readTime: "6 min", preview: "Organic reach on LinkedIn is still massive. Your competitors aren't there. You should be." },
  { slug: "sound-like-yourself-ai", title: "How to Sound Like Yourself on Social Media (Even When AI Writes It)", category: "Strategy", date: "April 2026", readTime: "5 min", preview: "The secret isn't better prompts. It's better onboarding." },
];

const categoryColors: Record<string, string> = {
  "Strategy": "text-[var(--accent)]",
  "SEO & Website Tips": "text-green-400",
  "Platform": "text-blue-400",
  "Insurance": "text-purple-400",
  "Social Media": "text-pink-400",
  "Firearms": "text-red-400",
};

export default function BlogPage() {
  const featured = articles.find(a => a.featured);
  const rest = articles.filter(a => !a.featured);

  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-[1000] bg-[var(--bg-primary)]/85 backdrop-blur-xl border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <Link href="/"><img src="/logo.jpg" alt="Anomalist Studios" className="h-[44px] w-auto" /></Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="nav-link text-[0.9rem] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Home</Link>
            <Link href="/about" className="nav-link text-[0.9rem] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]">About</Link>
            <Link href="/blog" className="nav-link text-[0.9rem] font-medium text-[var(--text-primary)]">Blog</Link>
            <Link href="/onboarding" className="btn btn-primary text-sm !py-2.5 !px-6">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-[140px] pb-[60px] text-center bg-[var(--bg-secondary)] border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="uppercase text-xs font-semibold tracking-[3px] text-[var(--accent)] mb-3">From the Blog</p>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4">Marketing insights for local businesses.</h1>
          <p className="text-[1.1rem] text-[var(--text-secondary)] max-w-[600px] mx-auto">Actionable strategies, platform guides, and industry-specific advice.</p>
        </div>
      </section>

      <section className="py-[60px] px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Featured article */}
          {featured && (
            <Link href={`/blog/${featured.slug}`} className="block mb-12 group">
              <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-10 card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-semibold uppercase tracking-wide ${categoryColors[featured.category] ?? "text-[var(--accent)]"}`}>{featured.category}</span>
                  <span className="text-xs text-[var(--text-muted)]">{featured.date}</span>
                  <span className="text-xs text-[var(--text-muted)]">{featured.readTime} read</span>
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-[var(--accent)] transition-colors">{featured.title}</h2>
                <p className="text-[var(--text-secondary)] leading-relaxed max-w-[700px]">{featured.preview}</p>
              </div>
            </Link>
          )}

          {/* Article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(article => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="group">
                <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-7 h-full card-hover">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-semibold uppercase tracking-wide ${categoryColors[article.category] ?? "text-[var(--accent)]"}`}>{article.category}</span>
                    <span className="text-xs text-[var(--text-muted)]">{article.readTime}</span>
                  </div>
                  <h3 className="font-bold text-[1.05rem] mb-2 leading-snug group-hover:text-[var(--accent)] transition-colors">{article.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">{article.preview}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)] py-12 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between gap-8">
          <img src="/logo.jpg" alt="Anomalist Studios" className="h-[44px] w-auto" />
          <div className="flex gap-8 text-sm text-[var(--text-secondary)]">
            <Link href="/" className="hover:text-[var(--text-primary)]">Home</Link>
            <Link href="/about" className="hover:text-[var(--text-primary)]">About</Link>
            <Link href="/privacy" className="hover:text-[var(--text-primary)]">Privacy</Link>
            <Link href="/terms" className="hover:text-[var(--text-primary)]">Terms</Link>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto mt-8 pt-8 border-t border-[var(--border)] text-xs text-[var(--text-muted)]">
          © {new Date().getFullYear()} Anomalist Studios. All rights reserved.
        </div>
      </footer>
    </>
  );
}
