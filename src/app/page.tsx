import Link from "next/link";

const proofItems = [
  { number: "120+", text: "social posts/mo" },
  { number: "4", text: "platforms daily" },
  { number: "24hrs", text: "to first content" },
  { number: "$0", text: "to start" },
];

const services = [
  { icon: "📱", title: "4 Daily Social Posts + More", desc: "One native post each for Facebook, Instagram, LinkedIn, and Google Business Profile. Plus blog articles, email campaigns, and ad copy." },
  { icon: "🔍", title: "Competitor Intelligence", desc: "Weekly competitive research on your market — what your competitors are doing and where they're falling short." },
  { icon: "📊", title: "Marketing Strategy", desc: "Weekly strategy briefs that drive your content direction, informed by top marketing insights." },
  { icon: "📧", title: "Email Marketing", desc: "Newsletters, drip sequences, and promotional emails crafted in your brand voice." },
  { icon: "📢", title: "Ad Copy & Campaigns", desc: "Promotional content, product highlights, event marketing — written and ready to run." },
  { icon: "✍️", title: "Blog & Website Copy", desc: "SEO-friendly blog articles and website copy that builds authority and drives organic traffic." },
];

const industries = [
  { icon: "🎯", name: "Firearms Training", desc: "Daily content that builds authority while navigating platform compliance. Social strategy for ranges, instructors, and tactical training businesses." },
  { icon: "🛡️", name: "Insurance Agencies", desc: "Turn complex coverage into approachable content. Build trust, educate prospects, and stay top-of-mind in your local market." },
  { icon: "💪", name: "Fitness & Gyms", desc: "Consistent social presence that fills classes, drives memberships, and builds community around your brand." },
  { icon: "🍽️", name: "Restaurants & Food", desc: "Menu highlights, seasonal specials, and community storytelling that brings locals through the door." },
  { icon: "🏠", name: "Real Estate", desc: "Market updates, listing showcases, and authority content that positions you as the local expert." },
  { icon: "🔧", name: "Home Services", desc: "HVAC, plumbing, electrical, roofing — before-and-after content, seasonal tips, and trust-building posts." },
];

const steps = [
  { num: "1", title: "Onboard", desc: "Complete our intake form — your brand, your voice, your competitors, your goals. Maximus builds a deep content profile for your business." },
  { num: "2", title: "Research", desc: "Maximus runs weekly competitive intelligence on your market and pulls marketing insights from top industry thought leaders to inform your strategy." },
  { num: "3", title: "Generate", desc: "Every day, Maximus produces 4 platform-native social posts plus weekly blog articles, email campaigns, and ad copy — informed by your brand profile." },
  { num: "4", title: "Deliver", desc: "Content delivered to your dashboard daily — ready to approve, edit, or auto-publish. Maximus gets sharper with every cycle." },
];

const metrics = [
  { number: "120", suffix: "+", label: "Social Posts Monthly", detail: "Plus blog articles, email campaigns, and ad copy" },
  { number: "4", suffix: "", label: "Platforms Daily", detail: "Facebook, Instagram, LinkedIn, Google Business Profile" },
  { number: "52", suffix: "", label: "Intel Reports/Year", detail: "Weekly research on what your competition is doing" },
  { number: "0", suffix: "", label: "Hours You Spend", detail: "Maximus does the work. You review or don't." },
];

const plans = [
  {
    name: "Starter", price: 420,
    features: ["10 Facebook posts/wk (2/day)", "5 Instagram posts/wk (1/day M–F)", "All content in your brand voice", "Delivered to your dashboard", "First week free"],
    pitch: "Facebook's algorithm buries single-daily posters. Two posts a day keeps you in feeds. Pair that with daily Instagram consistency and your brand stays visible — without you touching a thing.",
  },
  {
    name: "Growth", price: 960, featured: true,
    features: ["10 Facebook posts/wk (2/day)", "5 Instagram posts/wk (1/day M–F)", "10 LinkedIn posts/wk (2/day)", "Weekly competitor intelligence", "All content in your brand voice", "Delivered to your dashboard", "First week free"],
    pitch: "Everything in Starter, plus LinkedIn — the most underutilized platform in small business. Organic reach on LinkedIn is still massive. Your competitors aren't posting twice a day there. You will be.",
  },
  {
    name: "Authority", price: 1510,
    features: ["10 Facebook posts/wk (2/day)", "5 Instagram posts/wk (1/day M–F)", "10 LinkedIn posts/wk (2/day)", "1 SEO blog article/wk", "Weekly competitor intelligence", "Monthly strategy brief", "Social media management included", "First week free"],
    pitch: "Social posts disappear in 24 hours. Blog articles are permanent assets that rank on Google and drive traffic for months. Maximus writes them with real SEO research — while our team handles your entire social presence.",
  },
];

const comparison = [
  { feature: "Learn new software", m: "No", d: "Yes", f: "No" },
  { feature: "Brand voice match", m: "Deep", d: "Basic", f: "Varies" },
  { feature: "Daily posts", m: "4/day", d: "You write them", f: "1-2/day" },
  { feature: "Competitor intel", m: "Included", d: "No", f: "No" },
  { feature: "Blog + email", m: "Yes", d: "No", f: "Extra $$" },
  { feature: "Time to start", m: "24 hrs", d: "Hours of setup", f: "Weeks" },
];

const faqs = [
  { q: "Is this just ChatGPT with a wrapper?", a: "No. Maximus is a multi-agent system — not a single chatbot. It has dedicated intelligence for content writing, competitive research, marketing strategy, and email triage, all working together." },
  { q: "How fast do I get my first content?", a: "After you submit the intake form, we build your content profile within 24-48 hours. Your first batch of content typically lands in your dashboard within a few business days." },
  { q: "What platforms does Maximus create content for?", a: "Facebook, Instagram, LinkedIn, and Google Business Profile for daily social posts. Plus blog articles, email newsletters, and ad copy as add-ons." },
  { q: "Do I have to use your recommended content?", a: "No. You review everything in your dashboard before it goes live. Edit, skip, or approve with one click. If you want us to manage posting for you, our Social Media Management add-on handles that completely." },
  { q: "What if I have a really niche industry?", a: "Maximus works across dozens of industries. During onboarding, we ask detailed questions about your specific niche, competitors, and audience. The more specific you are, the better the content." },
  { q: "Can I export the content and use it elsewhere?", a: "Absolutely. Your content is yours. You can edit it, republish it, use it anywhere you want." },
  { q: "What if I'm not happy with the first week?", a: "We'll take feedback and retrain. Maximus learns from your feedback — tell us what's working and what isn't, and the next batch will be sharper." },
  { q: "Can I cancel anytime?", a: "Yes. No contracts, no lock-in periods. Cancel anytime. You can also pause your subscription and restart it when you're ready." },
  { q: "What industries does Maximus work with?", a: "Any local service business — firearms training, insurance agencies, fitness studios, restaurants, real estate, home services, healthcare, legal, automotive, and more." },
  { q: "How is this different from hiring a social media manager?", a: "A social media manager costs $3,000–$5,000/month and still needs direction. Maximus handles content creation, competitive research, and strategy at a fraction of the cost. And it never takes PTO or misses a deadline." },
];

export default function HomePage() {
  return (
    <>
      {/* ── Nav ────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-[1000] bg-[var(--bg-primary)]/85 backdrop-blur-xl border-b border-transparent hover:border-[var(--border)] transition-colors">
        <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <Link href="/" className="flex items-center h-full">
            <span className="text-xl font-bold text-[var(--text-primary)]">Anomalist <span className="text-[var(--accent)]">Studios</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="nav-link text-[0.9rem] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Home</Link>
            <Link href="/about" className="nav-link text-[0.9rem] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">About</Link>
            <Link href="/blog" className="nav-link text-[0.9rem] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Blog</Link>
            <Link href="/onboarding" className="btn btn-primary text-sm !py-2.5 !px-6">Get Started</Link>
          </div>
          <Link href="/onboarding" className="md:hidden btn btn-primary text-sm !py-2 !px-5">Get Started</Link>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="min-h-screen flex items-center relative overflow-hidden pt-[72px]">
        {/* Video background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="https://anomalistmaximus.com/images/intro.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[var(--bg-primary)]/80 z-[1]" />
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[var(--bg-primary)] to-transparent z-[1]" />

        <div className="relative z-[2] max-w-[1200px] mx-auto px-6">
          <div className="max-w-[750px]">
            <p className="animate-fade-up uppercase text-xs font-semibold tracking-[4px] text-[var(--accent)] mb-6">AI-Powered Content Marketing</p>
            <h1 className="animate-fade-up animate-delay-1 text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-1.5px] mb-6">
              Stop Posting.<br /><span className="accent">Start Growing.</span>
            </h1>
            <p className="animate-fade-up animate-delay-2 text-[1.2rem] text-[var(--text-secondary)] max-w-[550px] mb-10 leading-[1.7]">
              Maximus creates 120+ brand-matched social media posts per month across Facebook, Instagram,
              LinkedIn, and Google Business Profile — so you can run your business instead of running your socials.
            </p>
            <div className="animate-fade-up animate-delay-3 flex gap-4 flex-wrap">
              <Link href="/onboarding" className="btn btn-primary">Start Free — First Week On Us</Link>
              <Link href="#examples" className="btn btn-outline">See Real Examples</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Proof Strip ────────────────────────────────────── */}
      <section className="py-8 bg-[var(--bg-secondary)] border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-center gap-8 flex-wrap">
          {proofItems.map((item, i) => (
            <div key={item.text} className="flex items-baseline gap-2" style={{ opacity: 0, animation: `fadeUp 0.5s ease ${0.3 + i * 0.15}s forwards` }}>
              <span className="proof-number">{item.number}</span>
              <span className="text-[0.8rem] text-[var(--text-muted)] font-medium">{item.text}</span>
              {i < proofItems.length - 1 && <span className="hidden md:block w-px h-7 bg-[var(--border)] ml-6" />}
            </div>
          ))}
        </div>
      </section>

      {/* ── Example Comparison ─────────────────────────────── */}
      <section id="examples" className="py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <p className="uppercase text-xs font-semibold tracking-[3px] text-[var(--accent)] mb-3">See It In Action</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] mb-5">But will it actually sound like <span className="accent">me</span>?</h2>
          <p className="text-[1.1rem] text-[var(--text-secondary)] max-w-[600px] mb-12">
            Here&apos;s a fictional brand — Iron Oak Coffee Co., a small-town roastery — run through Maximus. Same brand, six platforms, every post native.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-8">
              <p className="uppercase text-xs font-semibold tracking-[3px] text-red-400 mb-4">Generic AI</p>
              <p className="text-[var(--text-secondary)] italic leading-relaxed mb-4">
                &ldquo;Looking for great coffee? Visit our shop for the best beans in town! We offer a variety of roasts and brewing methods. Come see us today! ☕ #coffee #coffeeshop #bestcoffee #coffeelover&rdquo;
              </p>
              <p className="text-xs text-red-400">Sounds like every other coffee shop on earth. No voice. No personality. Pure template.</p>
            </div>
            <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-8">
              <p className="uppercase text-xs font-semibold tracking-[3px] text-[var(--accent)] mb-4">Maximus</p>
              <p className="text-[var(--text-primary)] leading-relaxed mb-4">
                &ldquo;We don&apos;t do light roasts. Nothing against them — they&apos;re just not what we wake up for. Our dark roast is slow-roasted in small batches, the way it was done before coffee got complicated. Stop by. Bring your thermos. You&apos;ll taste the difference before you leave the parking lot.&rdquo;
              </p>
              <p className="text-xs text-[var(--accent)]">Opinionated. Confident. Sounds like a real person who gives a damn about their coffee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────── */}
      <section className="py-[100px] px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <p className="uppercase text-xs font-semibold tracking-[3px] text-[var(--accent)] mb-3">Meet Maximus</p>
            <h2 className="text-[clamp(2rem,4vw,3rem)] mb-4">AI-Powered Content for Every Platform</h2>
            <p className="text-[1.1rem] text-[var(--text-secondary)] max-w-[600px] mx-auto">One system. Unlimited content. All the platforms you&apos;re already on.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.title} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-9 card-hover">
                <div className="service-icon mb-5"><span>{s.icon}</span></div>
                <h3 className="text-[1.15rem] font-bold mb-2.5">{s.title}</h3>
                <p className="text-[0.9rem] text-[var(--text-secondary)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ─────────────────────────────────────── */}
      <section className="py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <p className="uppercase text-xs font-semibold tracking-[3px] text-[var(--accent)] mb-3">Industries</p>
            <h2 className="text-[clamp(2rem,4vw,3rem)] mb-4">Built for businesses that serve their community.</h2>
            <p className="text-[1.1rem] text-[var(--text-secondary)] max-w-[600px] mx-auto">Industry-specific content that sounds like it came from inside your business.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map(ind => (
              <div key={ind.name} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-9 card-hover">
                <span className="text-3xl block mb-4">{ind.icon}</span>
                <h3 className="text-[1.15rem] font-bold mb-2.5">{ind.name}</h3>
                <p className="text-[0.9rem] text-[var(--text-secondary)] leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ───────────────────────────────────── */}
      <section className="py-[100px] px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <p className="uppercase text-xs font-semibold tracking-[3px] text-[var(--accent)] mb-3">Process</p>
            <h2 className="text-[clamp(2rem,4vw,3rem)] mb-4">How AI Content Marketing Works</h2>
            <p className="text-[1.1rem] text-[var(--text-secondary)]">Tell us about your brand. Maximus does the rest.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(s => (
              <div key={s.num} className="text-center">
                <div className="step-circle mx-auto mb-5">{s.num}</div>
                <h3 className="text-[1.1rem] font-bold mb-2.5">{s.title}</h3>
                <p className="text-[0.9rem] text-[var(--text-secondary)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Numbers ────────────────────────────────────── */}
      <section className="py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <p className="uppercase text-xs font-semibold tracking-[3px] text-[var(--accent)] mb-3">The Numbers</p>
            <h2 className="text-[clamp(2rem,4vw,3rem)] mb-4">What happens when Maximus runs your content.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map(m => (
              <div key={m.label} className="text-center p-9 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl card-hover">
                <div><span className="metric-number">{m.number}</span>{m.suffix && <span className="text-[2rem] font-bold text-[var(--accent)]">{m.suffix}</span>}</div>
                <p className="text-[0.95rem] font-semibold mt-3 mb-1.5">{m.label}</p>
                <p className="text-[0.8rem] text-[var(--text-muted)] leading-relaxed">{m.detail}</p>
              </div>
            ))}
          </div>
          {/* Comparison bars */}
          <div className="max-w-[700px] mx-auto mt-16">
            <h3 className="text-center text-lg font-bold mb-8">Monthly Content Volume</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-[0.85rem] font-semibold text-[var(--text-secondary)] w-[140px] text-right">Without Maximus</span>
                <div className="flex-1 bg-[var(--bg-card)] rounded-md h-8 overflow-hidden">
                  <div className="comparison-bar bg-[var(--border-light)] text-[var(--text-muted)]" style={{ width: "10%" }}>~12</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[0.85rem] font-semibold text-[var(--text-secondary)] w-[140px] text-right">With Maximus</span>
                <div className="flex-1 bg-[var(--bg-card)] rounded-md h-8 overflow-hidden">
                  <div className="comparison-bar bg-[var(--accent)] text-[var(--bg-primary)]" style={{ width: "100%" }}>120+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison Table ───────────────────────────────── */}
      <section className="py-[100px] px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <p className="uppercase text-xs font-semibold tracking-[3px] text-[var(--accent)] mb-3">Why Maximus</p>
            <h2 className="text-[clamp(2rem,4vw,3rem)] mb-4">How Maximus compares.</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left py-4 px-4 text-[var(--text-muted)] font-medium">Feature</th>
                  <th className="text-center py-4 px-4 text-[var(--accent)] font-bold">Maximus</th>
                  <th className="text-center py-4 px-4 text-[var(--text-muted)] font-medium">DIY AI Tools</th>
                  <th className="text-center py-4 px-4 text-[var(--text-muted)] font-medium">Freelancer</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(row => (
                  <tr key={row.feature} className="border-b border-[var(--border)]/50">
                    <td className="py-3 px-4">{row.feature}</td>
                    <td className="py-3 px-4 text-center font-semibold text-[var(--accent)]">{row.m}</td>
                    <td className="py-3 px-4 text-center text-[var(--text-muted)]">{row.d}</td>
                    <td className="py-3 px-4 text-center text-[var(--text-muted)]">{row.f}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Pricing ────────────────────────────────────────── */}
      <section id="pricing" className="py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-4">
            <p className="uppercase text-xs font-semibold tracking-[3px] text-[var(--accent)] mb-3">Pricing</p>
            <h2 className="text-[clamp(2rem,4vw,3rem)] mb-4">Choose a plan or build your own.</h2>
            <p className="text-[1.1rem] text-[var(--text-secondary)] max-w-[600px] mx-auto mb-2">Pre-built packages to get you started fast.</p>
            <p className="text-[var(--accent)] text-sm font-semibold mb-12">First week of content free after onboarding</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map(plan => (
              <div key={plan.name} className={`bg-[var(--bg-card)] border border-[var(--border)] rounded-[14px] p-9 relative card-hover ${plan.featured ? "pricing-featured" : ""}`}>
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--accent)] text-[var(--bg-primary)] text-[0.7rem] font-bold uppercase tracking-[1.5px] py-1.5 px-5 rounded-full">Recommended</div>
                )}
                <div className="mb-5">
                  <h3 className="text-[1.35rem] font-bold mb-1.5">{plan.name}</h3>
                </div>
                <div className="mb-6 pb-5 border-b border-[var(--border)]">
                  <span className={`text-[2.5rem] font-extrabold tracking-[-1px] ${plan.featured ? "text-[var(--accent)]" : ""}`}>${plan.price}</span>
                  <span className="text-[0.9rem] text-[var(--text-muted)] ml-1">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-baseline gap-2.5 text-[0.88rem] text-[var(--text-secondary)]">
                      <span className="text-[var(--accent)] text-[0.7rem] shrink-0 mt-0.5">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="pricing-pitch mb-6">{plan.pitch}</div>
                <Link href="/onboarding" className={`btn w-full justify-center text-sm ${plan.featured ? "btn-primary" : "btn-outline"}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section id="faq" className="py-[100px] px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <p className="uppercase text-xs font-semibold tracking-[3px] text-[var(--accent)] mb-3">FAQ</p>
            <h2 className="text-[clamp(2rem,4vw,3rem)]">Questions before you start.</h2>
          </div>
          <div className="space-y-2">
            {faqs.map(faq => (
              <details key={faq.q} className="group bg-[var(--bg-card)] border border-[var(--border)] rounded-[10px] overflow-hidden transition-colors open:border-[var(--border-light)]">
                <summary className="cursor-pointer p-[18px_22px] font-semibold text-[0.95rem] flex items-center justify-between gap-4 hover:text-[var(--accent)] transition-colors">
                  {faq.q}
                  <span className="text-[var(--text-muted)] text-xs group-open:rotate-180 transition-transform shrink-0">▼</span>
                </summary>
                <div className="px-[22px] pb-5 text-[0.9rem] text-[var(--text-secondary)] leading-[1.7]">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────── */}
      <section className="py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="cta-gradient rounded-2xl p-[60px_48px] text-center">
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold mb-4">Ready to never worry about content again?</h2>
            <p className="text-[1.05rem] text-[var(--text-secondary)] max-w-[500px] mx-auto mb-8">
              Complete our intake form and Maximus starts learning your brand immediately. Your first week of content is on us.
            </p>
            <Link href="/onboarding" className="btn btn-primary">Start Onboarding</Link>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="sm:col-span-2 md:col-span-1">
              <p className="text-lg font-bold mb-2">Anomalist <span className="text-[var(--accent)]">Studios</span></p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">Maximus by Anomalist Studios — AI-powered content and marketing, delivered to your dashboard.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">Pages</h4>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <Link href="/" className="block hover:text-[var(--text-primary)] transition-colors">Home</Link>
                <Link href="/about" className="block hover:text-[var(--text-primary)] transition-colors">About</Link>
                <Link href="/blog" className="block hover:text-[var(--text-primary)] transition-colors">Blog</Link>
                <Link href="/onboarding" className="block hover:text-[var(--text-primary)] transition-colors">Get Started</Link>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">Legal</h4>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <Link href="/privacy" className="block hover:text-[var(--text-primary)] transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="block hover:text-[var(--text-primary)] transition-colors">Terms of Service</Link>
                <Link href="/contact" className="block hover:text-[var(--text-primary)] transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">Client</h4>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <Link href="/login" className="block hover:text-[var(--text-primary)] transition-colors">Client Login</Link>
                <Link href="/dashboard" className="block hover:text-[var(--text-primary)] transition-colors">Dashboard</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-[var(--border)] pt-8 text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} Anomalist Studios. All rights reserved. Powered by Maximus AI
          </div>
        </div>
      </footer>
    </>
  );
}
