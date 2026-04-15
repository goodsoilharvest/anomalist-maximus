import Link from "next/link";

const stats = [
  { value: "120+", label: "social posts/mo per client" },
  { value: "4", label: "platforms covered daily" },
  { value: "24 hrs", label: "from onboarding to first content" },
  { value: "$0", label: "to start — first week free" },
];

const industries = [
  { icon: "🎯", name: "Firearms Training", desc: "Daily content that builds authority while navigating platform compliance." },
  { icon: "🛡", name: "Insurance Agencies", desc: "Turn complex coverage into approachable content. Build trust and stay top-of-mind." },
  { icon: "💪", name: "Fitness & Gyms", desc: "Consistent social presence that fills classes and drives memberships." },
  { icon: "🍽", name: "Restaurants & Food", desc: "Menu highlights, seasonal specials, and community storytelling." },
  { icon: "🏠", name: "Real Estate", desc: "Market updates, listing showcases, and authority content." },
  { icon: "🔧", name: "Home Services", desc: "Before-and-after content, seasonal tips, and trust-building posts." },
];

const features = [
  { icon: "📱", title: "4 Daily Social Posts + More", desc: "One native post each for Facebook, Instagram, LinkedIn, and Google Business Profile. Plus blog articles, email campaigns, and ad copy." },
  { icon: "🔍", title: "Competitor Intelligence", desc: "Weekly competitive research on your market — what your competitors are doing and where they're falling short." },
  { icon: "📊", title: "Marketing Strategy", desc: "Weekly strategy briefs that drive your content direction, informed by top marketing insights." },
  { icon: "📧", title: "Email Marketing", desc: "Newsletters, drip sequences, and promotional emails crafted in your brand voice." },
  { icon: "📢", title: "Ad Copy & Campaigns", desc: "Promotional content, product highlights, event marketing — written and ready to run." },
  { icon: "✍️", title: "Blog & Website Copy", desc: "SEO-friendly blog articles and website copy that builds authority and drives organic traffic." },
];

const steps = [
  { num: "01", title: "Onboard", desc: "Complete our intake form — your brand, your voice, your competitors, your goals. Maximus builds a deep content profile." },
  { num: "02", title: "Research", desc: "Maximus runs weekly competitive intelligence and pulls marketing insights from top industry thought leaders." },
  { num: "03", title: "Generate", desc: "Every day, Maximus produces 4 platform-native social posts plus weekly blog articles, email campaigns, and ad copy." },
  { num: "04", title: "Deliver", desc: "Content delivered to your dashboard daily — ready to approve, edit, or auto-publish. Maximus gets sharper with every cycle." },
];

const plans = [
  {
    name: "Starter",
    price: 420,
    features: ["10 Facebook posts/wk (2/day)", "5 Instagram posts/wk (1/day M–F)", "All content in your brand voice", "Delivered to your dashboard", "First week free"],
    desc: "Facebook's algorithm buries single-daily posters. Two posts a day keeps you in feeds.",
  },
  {
    name: "Growth",
    price: 960,
    badge: "Recommended",
    features: ["10 Facebook posts/wk (2/day)", "5 Instagram posts/wk (1/day M–F)", "10 LinkedIn posts/wk (2/day)", "Weekly competitor intelligence", "All content in your brand voice", "Delivered to your dashboard", "First week free"],
    desc: "Everything in Starter, plus LinkedIn — the most underutilized platform in small business.",
  },
  {
    name: "Authority",
    price: 1510,
    features: ["10 Facebook posts/wk (2/day)", "5 Instagram posts/wk (1/day M–F)", "10 LinkedIn posts/wk (2/day)", "1 SEO blog article/wk", "Weekly competitor intelligence", "Monthly strategy brief", "Social media management included", "First week free"],
    desc: "Social posts disappear in 24 hours. Blog articles rank on Google for months. Full service.",
  },
];

const faqs = [
  { q: "Is this just ChatGPT with a wrapper?", a: "No. Maximus is a multi-agent system — not a single chatbot. It has dedicated intelligence for content writing, competitive research, marketing strategy, and email triage." },
  { q: "How fast do I get my first content?", a: "After onboarding, we build your content profile within 24-48 hours. Your first batch typically lands in your dashboard within a few business days." },
  { q: "What platforms does Maximus create content for?", a: "Facebook, Instagram, LinkedIn, and Google Business Profile for daily social posts. Plus blog articles, email newsletters, and ad copy." },
  { q: "Do I have to use your recommended content?", a: "No. You review everything in your dashboard before it goes live. Edit, skip, or approve with one click." },
  { q: "What if I'm not happy with the first week?", a: "We retrain. Maximus learns from your feedback — the system gets better with every interaction." },
  { q: "Can I cancel anytime?", a: "Yes. No contracts, no lock-in periods. Cancel anytime. You can also pause and restart when ready." },
  { q: "How is this different from hiring a social media manager?", a: "A social media manager costs $3,000-$5,000/month and still needs direction. Maximus handles content creation, competitive research, and strategy at a fraction of the cost. Never misses a deadline." },
];

const comparison = [
  { feature: "Learn new software", maximus: "No", diy: "Yes", freelancer: "No" },
  { feature: "Brand voice match", maximus: "Deep", diy: "Basic", freelancer: "Varies" },
  { feature: "Daily posts", maximus: "4/day", diy: "You write them", freelancer: "1-2/day" },
  { feature: "Competitor intel", maximus: "Included", diy: "No", freelancer: "No" },
  { feature: "Blog + email", maximus: "Yes", diy: "No", freelancer: "Extra $$" },
  { feature: "Time to start", maximus: "24 hrs", diy: "Hours of setup", freelancer: "Weeks" },
];

export default function HomePage() {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg">
            <span className="text-[var(--accent)]">Maximus</span>
            <span className="text-[var(--text-muted)] text-sm font-normal ml-2 hidden sm:inline">by Anomalist Studios</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="#pricing" className="text-sm text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors hidden sm:block">Pricing</Link>
            <Link href="#faq" className="text-sm text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors hidden sm:block">FAQ</Link>
            <Link href="/login" className="text-sm text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">Client Login</Link>
            <Link href="/onboarding" className="px-4 py-2 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-semibold transition-colors">
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-semibold mb-8">
            First week free — no credit card required to start
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Stop Posting.{" "}
            <span className="gradient-text">Start Growing.</span>
          </h1>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed">
            Maximus creates 120+ brand-matched social media posts per month across Facebook, Instagram,
            LinkedIn, and Google Business Profile — so you can run your business instead of running your socials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/onboarding" className="px-8 py-3.5 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-[var(--accent)]/25">
              Start Free — First Week On Us
            </Link>
            <Link href="#examples" className="px-8 py-3.5 rounded-lg border border-[var(--border)] hover:border-[var(--accent)]/50 text-[var(--foreground)] font-semibold transition-colors hover:bg-[var(--surface)]">
              See Real Examples
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(s => (
              <div key={s.label} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-center">
                <p className="text-2xl font-bold text-[var(--accent)]">{s.value}</p>
                <p className="text-xs text-[var(--text-muted)] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example comparison */}
      <section id="examples" className="py-20 px-4 sm:px-6 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">But will it actually sound like <span className="gradient-text">me</span>?</h2>
          <p className="text-center text-[var(--text-muted)] mb-12 max-w-2xl mx-auto">
            Here&apos;s a fictional brand — Iron Oak Coffee Co. — run through Maximus. Same brand, six platforms, every post native.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6">
              <p className="text-xs font-semibold text-red-400 uppercase tracking-wide mb-3">Generic AI</p>
              <p className="text-[var(--text-muted)] italic leading-relaxed">
                &ldquo;Looking for great coffee? Visit our shop for the best beans in town! We offer a variety of roasts and brewing methods. Come see us today! ☕ #coffee #coffeeshop #bestcoffee&rdquo;
              </p>
              <p className="text-xs text-red-400 mt-3">Sounds like every other coffee shop on earth.</p>
            </div>
            <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-6">
              <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wide mb-3">Maximus</p>
              <p className="text-[var(--foreground)] leading-relaxed">
                &ldquo;We don&apos;t do light roasts. Nothing against them — they&apos;re just not what we wake up for. Our dark roast is slow-roasted in small batches, the way it was done before coffee got complicated. Stop by. Bring your thermos.&rdquo;
              </p>
              <p className="text-xs text-[var(--accent)] mt-3">Opinionated. Confident. Sounds like a real person.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Built for businesses that serve their community.</h2>
          <p className="text-center text-[var(--text-muted)] mb-12 max-w-2xl mx-auto">
            Industry-specific content that sounds like it came from inside your business.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map(ind => (
              <div key={ind.name} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--accent)]/40 transition-colors">
                <span className="text-3xl block mb-3">{ind.icon}</span>
                <h3 className="font-bold text-lg mb-2">{ind.name}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">AI-Powered Content for <span className="gradient-text">Every Platform</span></h2>
          <p className="text-center text-[var(--text-muted)] mb-12">One system. Unlimited content. All the platforms you&apos;re already on.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map(f => (
              <div key={f.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-6">
                <span className="text-2xl block mb-3">{f.icon}</span>
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-center text-[var(--text-muted)] mb-12">Tell us about your brand. Maximus does the rest.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map(s => (
              <div key={s.num} className="flex gap-4 p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                <span className="text-3xl font-bold text-[var(--accent)]/30 shrink-0">{s.num}</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">{s.title}</h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 px-4 sm:px-6 bg-[var(--surface)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How Maximus Compares</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left py-3 px-4 text-[var(--text-muted)] font-medium">Feature</th>
                  <th className="text-center py-3 px-4 text-[var(--accent)] font-bold">Maximus</th>
                  <th className="text-center py-3 px-4 text-[var(--text-muted)] font-medium">DIY AI Tools</th>
                  <th className="text-center py-3 px-4 text-[var(--text-muted)] font-medium">Freelancer</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(row => (
                  <tr key={row.feature} className="border-b border-[var(--border)]/50">
                    <td className="py-3 px-4 text-[var(--foreground)]">{row.feature}</td>
                    <td className="py-3 px-4 text-center font-semibold text-[var(--accent)]">{row.maximus}</td>
                    <td className="py-3 px-4 text-center text-[var(--text-muted)]">{row.diy}</td>
                    <td className="py-3 px-4 text-center text-[var(--text-muted)]">{row.freelancer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Choose a plan or build your own.</h2>
          <p className="text-center text-[var(--text-muted)] mb-4">Pre-built packages to get you started fast.</p>
          <p className="text-center text-[var(--accent)] text-sm font-semibold mb-12">First week of content free after onboarding</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map(plan => (
              <div key={plan.name} className={`rounded-2xl p-7 flex flex-col ${plan.badge ? "border-2 border-[var(--accent)] bg-[var(--accent)]/5 relative" : "border border-[var(--border)] bg-[var(--surface)]"}`}>
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--accent)] text-white text-xs font-bold px-3 py-1 rounded-full">{plan.badge}</div>
                )}
                <h3 className="font-bold text-xl mb-1">{plan.name}</h3>
                <p className="text-3xl font-bold mb-1">${plan.price}<span className="text-sm font-normal text-[var(--text-muted)]">/mo</span></p>
                <p className="text-xs text-[var(--text-muted)] mb-6">{plan.desc}</p>
                <ul className="space-y-2 text-sm flex-1 mb-6">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-[var(--accent)] mt-0.5 shrink-0">✓</span>
                      <span className="text-[var(--text-muted)]">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/onboarding" className={`block text-center py-3 rounded-lg font-semibold text-sm transition-colors ${plan.badge ? "bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white" : "border border-[var(--border)] hover:border-[var(--accent)]/50 hover:bg-[var(--accent)]/5"}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 bg-[var(--surface)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Questions before you start.</h2>
          <div className="space-y-4">
            {faqs.map(faq => (
              <details key={faq.q} className="group rounded-xl border border-[var(--border)] bg-[var(--background)]">
                <summary className="cursor-pointer p-5 font-semibold text-sm flex items-center justify-between">
                  {faq.q}
                  <span className="text-[var(--text-muted)] group-open:rotate-45 transition-transform text-lg">+</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-[var(--text-muted)] leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to never worry about content again?</h2>
          <p className="text-[var(--text-muted)] mb-8 text-lg">Complete our intake form and Maximus starts learning your brand immediately. First week is on us.</p>
          <Link href="/onboarding" className="inline-block px-8 py-3.5 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-[var(--accent)]/25">
            Start Onboarding
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-8">
          <div>
            <p className="font-bold text-lg"><span className="text-[var(--accent)]">Maximus</span> <span className="text-[var(--text-muted)] text-sm font-normal">by Anomalist Studios</span></p>
            <p className="text-sm text-[var(--text-muted)] mt-2">AI-powered content and marketing, delivered to your dashboard.</p>
          </div>
          <div className="flex gap-8 text-sm text-[var(--text-muted)]">
            <div className="space-y-2">
              <Link href="/about" className="block hover:text-[var(--foreground)] transition-colors">About</Link>
              <Link href="/blog" className="block hover:text-[var(--foreground)] transition-colors">Blog</Link>
              <Link href="/onboarding" className="block hover:text-[var(--foreground)] transition-colors">Get Started</Link>
            </div>
            <div className="space-y-2">
              <Link href="/privacy" className="block hover:text-[var(--foreground)] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="block hover:text-[var(--foreground)] transition-colors">Terms of Service</Link>
              <Link href="/contact" className="block hover:text-[var(--foreground)] transition-colors">Contact</Link>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-[var(--border)] text-xs text-[var(--text-muted)]">
          © {new Date().getFullYear()} Anomalist Studios. All rights reserved. Powered by Maximus AI
        </div>
      </footer>
    </>
  );
}
