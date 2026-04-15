"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

// ── Data ─────────────────────────────────────────────────────────────────────

const proofItems = [
  { number: "120+", text: "social posts/mo per client" },
  { number: "4", text: "platforms covered daily" },
  { number: "24hrs", text: "from onboarding to first content" },
  { number: "$0", text: "to start — first week free" },
];

const platformExamples = [
  {
    key: "facebook", icon: "📘", label: "Facebook",
    avatar: "IO", name: "Iron Oak Coffee Co.", sub: "Sponsored · ",
    body: "There's a reason we still hand-label every bag.\n\nIt's not efficient. Our roaster reminds us every Tuesday. But there's something about writing out \"Dark Roast — Batch #347\" by hand that keeps us honest. You can automate a lot of things. The stuff that matters isn't one of them.\n\nNew batch drops Friday. First 30 bags get a handwritten note with your order. Link in comments.",
    stats: "142 likes · 23 comments · 8 shares",
    why: "Storytelling + personal touch. Facebook rewards longer posts that generate comments. The \"first 30 bags\" creates urgency. The tone is warm but opinionated — it reads like the owner wrote it on their lunch break.",
  },
  {
    key: "instagram", icon: "📷", label: "Instagram",
    avatar: "IO", name: "ironoakcoffee", sub: "Original",
    body: "Batch #347. Dark roast. Small batch. Hand-labeled because we're stubborn like that.\n\nDrop a ☕ if you're grabbing one this week.\n\n#ironoakcoffee #darkroast #smallbatchcoffee #localroaster #coffeecommunity #handcrafted #fridaydrop",
    stats: "284 likes · 47 comments",
    why: "Short, punchy, visual-first caption. Doesn't bury the lead. Hashtags are targeted, not stuffed. The CTA (\"drop a ☕\") is low-friction and boosts engagement rate for the algorithm.",
  },
  {
    key: "linkedin", icon: "💼", label: "LinkedIn",
    avatar: "IO", name: "Jake Mercer", sub: "Founder, Iron Oak Coffee Co.",
    body: "We turned down a wholesale deal last month.\n\nA regional chain wanted to stock our dark roast in 40 locations. The volume would've tripled our revenue overnight.\n\nWe said no.\n\nNot because we don't want to grow — we do. But our roast profile only works in small batches. We tested it at scale. It tasted different. Not bad. Just… not ours.\n\nThe hardest part of running a small business isn't the hours. It's knowing when to say no to money that would change what you built.\n\nHas anyone else walked away from a deal that looked great on paper?",
    stats: "1,247 likes · 89 comments · 34 reposts",
    why: "Personal narrative from the founder. Vulnerable, contrarian take. Short paragraphs for scanability. Ends with a question that drives massive comment engagement.",
  },
  {
    key: "gbp", icon: "📍", label: "Google Business",
    avatar: "IO", name: "Iron Oak Coffee Co.", sub: "Local business",
    body: "New batch alert: Dark Roast Batch #347 drops this Friday at 7 AM. Small batch, hand-labeled, roasted in-house. Last month's batch sold out in 3 days — grab yours early.\n\nStop by the roastery or order online for local delivery. Open Tuesday–Saturday, 6 AM – 2 PM.\n\n📍 127 Oak Street, downtown",
    stats: "",
    why: "GBP posts boost local search visibility — most small businesses ignore them entirely. This is action-oriented with location, hours, and a clear reason to visit.",
  },
  {
    key: "blog", icon: "✍️", label: "Blog",
    avatar: "IO", name: "Iron Oak Coffee Co.", sub: "Blog",
    body: "Dark Roast vs. Medium Roast: What Nobody Tells You About Flavor\n\nMost people think dark roast means stronger coffee. It doesn't. Here's the difference nobody in the grocery aisle is explaining — and why it changes what you should be buying.",
    stats: "",
    why: "Targets a high-volume search query that people actually Google. Educational content builds authority and ranks for months — unlike social posts that disappear in 24 hours.",
  },
  {
    key: "email", icon: "📧", label: "Email",
    avatar: "IO", name: "Iron Oak Coffee Co.", sub: "Newsletter",
    body: "Subject: Batch #347 drops Friday — here's what's different this time\n\nHey [First Name],\n\nQuick one this week. Batch #347 is our first roast from a new single-origin source in Guatemala — Finca El Volcán, grown at 5,200 feet.\n\nWe tested it three times before committing. Twice it was close. The third time, our roaster said \"that's the one\" before it even finished cooling.\n\nFirst 50 orders get a handwritten tasting note with the bag.\n\nSee you Friday.\n— Jake, Iron Oak",
    stats: "",
    why: "Personal tone from the founder, not a corporate blast. Tells a story that makes you want to try the product. Creates scarcity without being pushy. One clear CTA.",
  },
];

const services = [
  { icon: "✍️", title: "4 Daily Social Posts + More", desc: "One native post each for Facebook, Instagram, LinkedIn, and Google Business Profile. Plus blog articles, email campaigns, and ad copy." },
  { icon: "🔍", title: "Competitor Intelligence", desc: "Weekly competitive research on your market — what your competitors are doing and where they're falling short." },
  { icon: "📊", title: "Marketing Strategy", desc: "Weekly strategy briefs that drive your content direction, informed by top marketing insights." },
  { icon: "📧", title: "Email Marketing", desc: "Newsletters, drip sequences, and promotional emails crafted in your brand voice." },
  { icon: "📢", title: "Ad Copy & Campaigns", desc: "Promotional content, product highlights, event marketing — written and ready to run." },
  { icon: "🌐", title: "Blog & Website Copy", desc: "SEO-friendly blog articles and website copy that builds authority and drives organic traffic." },
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
  { num: "2", title: "Research", desc: "Maximus runs weekly competitive intelligence on your market and pulls marketing insights from top industry thought leaders." },
  { num: "3", title: "Generate", desc: "Every day, Maximus produces 4 platform-native social posts plus weekly blog articles, email campaigns, and ad copy." },
  { num: "4", title: "Deliver", desc: "Content delivered to your dashboard daily — ready to approve, edit, or auto-publish. Maximus gets sharper with every cycle." },
];

const metrics = [
  { target: 120, suffix: "+", label: "Social Posts Monthly", detail: "Plus blog articles, email campaigns, and ad copy — vs. the 8–12 posts most businesses manage on their own" },
  { target: 4, suffix: "", label: "Platforms Daily", detail: "Facebook, Instagram, LinkedIn, Google Business Profile" },
  { target: 52, suffix: "", label: "Intel Reports/Year", detail: "Weekly research on what your competition is doing — and where they're falling short" },
  { target: 0, suffix: "", label: "Hours You Spend", detail: "Maximus does the work. You review what shows up in your inbox — or don't. Your call." },
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
  { q: "Do I have to use your recommended content?", a: "No. You review everything in your dashboard before it goes live. Edit, skip, or approve with one click." },
  { q: "What if I have a really niche industry?", a: "Maximus works across dozens of industries. During onboarding, we ask detailed questions about your specific niche, competitors, and audience. The more specific you are, the better the content." },
  { q: "Can I export the content and use it elsewhere?", a: "Absolutely. Your content is yours. You can edit it, republish it, use it anywhere you want." },
  { q: "What if I'm not happy with the first week?", a: "We'll take feedback and retrain. Maximus learns from your feedback — the system gets better with every interaction." },
  { q: "Can I cancel anytime?", a: "Yes. No contracts, no lock-in periods. Cancel anytime. You can also pause and restart when ready." },
  { q: "What industries does Maximus work with?", a: "Any local service business — firearms training, insurance agencies, fitness studios, restaurants, real estate, home services, healthcare, legal, automotive, and more." },
  { q: "How is this different from hiring a social media manager?", a: "A social media manager costs $3,000–$5,000/month and still needs direction. Maximus handles content creation, competitive research, and strategy at a fraction of the cost. Never misses a deadline." },
];

// ── Scroll reveal hook ───────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, className: `transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}` };
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const r = useReveal();
  return <div ref={r.ref} className={`${r.className} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

// ── Counter component ────────────────────────────────────────────────────────
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) { setStarted(true); obs.disconnect(); } }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);
  useEffect(() => {
    if (!started) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) { setValue(target); clearInterval(interval); }
      else setValue(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, target]);
  return <span ref={ref}>{value}{suffix}</span>;
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [activeTab, setActiveTab] = useState("facebook");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      {/* ── Nav ───────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-[1000] bg-[rgba(10,10,10,0.85)] backdrop-blur-xl border-b border-[var(--border)] transition-all">
        <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <Link href="/" className="flex items-center h-full">
            <img src="/logo.jpg" alt="Anomalist Studios" className="h-[44px] w-auto" />
          </Link>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="nav-link text-[0.9rem] font-medium text-[var(--text-primary)]">Home</Link>
            <Link href="/about" className="nav-link text-[0.9rem] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]">About</Link>
            <Link href="/blog" className="nav-link text-[0.9rem] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Blog</Link>
            <Link href="/onboarding" className="nav-link text-[0.9rem] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Get Started</Link>
            <span className="w-px h-5 bg-[var(--border)]" />
            <Link href="/login" className="text-[0.85rem] font-medium text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">Client Login</Link>
          </div>
          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMobileNavOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[var(--text-primary)] transition-all duration-200 ${mobileNavOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[var(--text-primary)] transition-all duration-200 ${mobileNavOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[var(--text-primary)] transition-all duration-200 ${mobileNavOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
        {/* Mobile dropdown */}
        {mobileNavOpen && (
          <div className="md:hidden border-t border-[var(--border)] bg-[rgba(10,10,10,0.97)] px-6 py-4 flex flex-col gap-4">
            <Link href="/" onClick={() => setMobileNavOpen(false)} className="text-[0.95rem] font-medium text-[var(--text-primary)]">Home</Link>
            <Link href="/about" onClick={() => setMobileNavOpen(false)} className="text-[0.95rem] font-medium text-[var(--text-secondary)]">About</Link>
            <Link href="/blog" onClick={() => setMobileNavOpen(false)} className="text-[0.95rem] font-medium text-[var(--text-secondary)]">Blog</Link>
            <Link href="/onboarding" onClick={() => setMobileNavOpen(false)} className="text-[0.95rem] font-medium text-[var(--text-secondary)]">Get Started</Link>
            <div className="w-full h-px bg-[var(--border)]" />
            <Link href="/login" onClick={() => setMobileNavOpen(false)} className="text-[0.9rem] font-medium text-[var(--text-muted)]">Client Login</Link>
          </div>
        )}
      </nav>

      {/* ── Hero (left-aligned) ────────────────────────────── */}
      <section className="min-h-screen flex items-center relative overflow-hidden pt-[72px]">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="https://anomalistmaximus.com/images/intro.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-[rgba(10,10,10,0.80)] z-[1]" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[var(--bg-primary)] to-transparent z-[1]" />

        <div className="relative z-[2] max-w-[1200px] mx-auto px-6 w-full">
          <div className="max-w-[750px]">
            <Reveal><p className="uppercase text-xs font-semibold tracking-[4px] text-[var(--accent)] mb-6">AI-Powered Content Marketing</p></Reveal>
            <Reveal delay={100}><h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-1.5px] mb-6">
              Stop Posting.<br /><span className="accent">Start Growing.</span>
            </h1></Reveal>
            <Reveal delay={200}><p className="text-[1.2rem] text-[var(--text-secondary)] max-w-[550px] mb-10 leading-[1.7]">
              Maximus creates 120+ brand-matched social media posts per month across Facebook, Instagram,
              LinkedIn, and Google Business Profile — so you can run your business instead of running your socials.
            </p></Reveal>
            <Reveal delay={300}><div className="flex gap-4 flex-wrap">
              <Link href="/onboarding" className="btn btn-primary">Start Free — First Week On Us →</Link>
              <Link href="#examples" className="btn btn-outline">See Real Examples ▶</Link>
            </div></Reveal>
          </div>
        </div>
      </section>

      {/* ── Proof Strip ────────────────────────────────────── */}
      <section className="py-8 bg-[var(--bg-secondary)] border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-center gap-8 flex-wrap">
          {proofItems.map((item, i) => (
            <Reveal key={item.text} delay={i * 100}>
              <div className="flex items-baseline gap-2">
                <span className="proof-number">{item.number}</span>
                <span className="text-[0.8rem] text-[var(--text-muted)] font-medium">{item.text}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── See It In Action (centered) ────────────────────── */}
      <section id="examples" className="py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <Reveal><p className="uppercase text-xs font-semibold tracking-[3px] text-[var(--accent)] mb-3">See It In Action</p></Reveal>
          <Reveal delay={100}><h2 className="text-[clamp(2rem,4vw,3rem)] mb-5">&ldquo;But will it actually sound like <span className="accent">me</span>?&rdquo;</h2></Reveal>
          <Reveal delay={200}><p className="text-[1.1rem] text-[var(--text-secondary)] max-w-[600px] mx-auto mb-12">
            Here&apos;s a fictional brand — <strong className="text-[var(--text-primary)]">Iron Oak Coffee Co.</strong>, a small-town roastery — run through Maximus. Same brand, six platforms, every post native.
          </p></Reveal>

          {/* Before / After cards */}
          <Reveal delay={300}>
            <div className="grid md:grid-cols-2 gap-6 mb-14 text-left">
              <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-7 h-7 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 text-xs">✕</span>
                  <span className="uppercase text-xs font-semibold tracking-[2px] text-red-400">Generic AI</span>
                </div>
                <p className="text-[var(--text-secondary)] italic leading-relaxed mb-4">
                  &ldquo;Looking for great coffee? Visit our shop for the best beans in town! We offer a variety of roasts and brewing methods. Come see us today! ☕ #coffee #coffeeshop #bestcoffee #coffeelover&rdquo;
                </p>
                <p className="text-xs text-[var(--text-muted)]">Sounds like every other coffee shop on earth. No voice. No personality. Pure template.</p>
              </div>
              <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] text-xs">✓</span>
                  <span className="uppercase text-xs font-semibold tracking-[2px] text-[var(--accent)]">Maximus</span>
                </div>
                <p className="text-[var(--text-primary)] leading-relaxed mb-4">
                  &ldquo;We don&apos;t do light roasts. Nothing against them — they&apos;re just not what we wake up for. Our dark roast is slow-roasted in small batches, the way it was done before coffee got complicated. Stop by. Bring your thermos. You&apos;ll taste the difference before you leave the parking lot.&rdquo;
                </p>
                <p className="text-xs text-[var(--accent)]">Opinionated. Confident. Sounds like a real person who gives a damn about their coffee.</p>
              </div>
            </div>
          </Reveal>

          {/* Platform tabs */}
          <Reveal delay={400}>
            <h3 className="text-[1.15rem] text-[var(--text-secondary)] font-medium mb-8">Same brand. Four platforms + blog + email. Each one native.</h3>
            <div className="flex flex-wrap justify-center gap-1.5 mb-6">
              {platformExamples.map(p => {
                const faIcons: Record<string, string> = { facebook: "fab fa-facebook-f", instagram: "fab fa-instagram", linkedin: "fab fa-linkedin-in", gbp: "fab fa-google", blog: "fas fa-blog", email: "fas fa-envelope" };
                return (
                  <button key={p.key} onClick={() => setActiveTab(p.key)}
                    className={`px-[18px] py-2.5 rounded-lg text-[0.85rem] font-medium flex items-center gap-1.5 transition-all ${activeTab === p.key ? "bg-[rgba(212,145,30,0.1)] border border-[var(--accent)] text-[var(--accent)]" : "bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-light)] hover:text-[var(--text-primary)]"}`}>
                    <i className={faIcons[p.key] ?? "fas fa-file"} /> {p.label}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Active panel */}
          {platformExamples.filter(p => p.key === activeTab).map(p => (
            <div key={p.key} className="max-w-[700px] mx-auto text-left">
              <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-8 mb-4">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-sm font-bold text-[var(--accent)]">{p.avatar}</div>
                  <div>
                    <p className="font-semibold text-sm">{p.name}</p>
                    <p className="text-xs text-[var(--text-muted)]">{p.sub}</p>
                  </div>
                </div>
                <p className="text-[var(--text-primary)] leading-[1.7] whitespace-pre-line text-[0.95rem]">{p.body}</p>
                {p.stats && <p className="text-xs text-[var(--text-muted)] mt-4 pt-4 border-t border-[var(--border)]">{p.stats}</p>}
              </div>
              <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6">
                <p className="text-sm"><strong className="text-[var(--accent)]">Why it works on {p.label}:</strong>{" "}
                  <span className="text-[var(--text-secondary)]">{p.why}</span>
                </p>
              </div>
            </div>
          ))}

          <Reveal>
            <div className="mt-12">
              <p className="text-[var(--text-muted)] text-[0.9rem] max-w-[550px] mx-auto mb-5">
                This is what Maximus produces — platform-native, voice-matched content that sounds like the brand owner wrote it. Every day. For every client.
              </p>
              <Link href="/onboarding" className="btn btn-primary">See What Maximus Writes for You →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Industries ─────────────────────────────────────── */}
      <section className="py-[100px] px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-[1200px] mx-auto">
          <Reveal><p className="uppercase text-xs font-semibold tracking-[3px] text-[var(--accent)] mb-3">Industries</p></Reveal>
          <Reveal delay={100}><h2 className="text-[clamp(2rem,4vw,3rem)] mb-4">Built for businesses that serve their community.</h2></Reveal>
          <Reveal delay={200}><p className="text-[1.1rem] text-[var(--text-secondary)] max-w-[600px] mb-12">Industry-specific content that sounds like it came from inside your business — because it learned from inside your business.</p></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 80}>
                <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-9 card-hover h-full">
                  <div className="service-icon mb-5"><span>{ind.icon}</span></div>
                  <h3 className="text-[1.15rem] font-bold mb-2.5">{ind.name}</h3>
                  <p className="text-[0.9rem] text-[var(--text-secondary)] leading-relaxed">{ind.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────── */}
      <section className="py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <Reveal><p className="uppercase text-xs font-semibold tracking-[3px] text-[var(--accent)] mb-3">Meet Maximus</p></Reveal>
            <Reveal delay={100}><h2 className="text-[clamp(2rem,4vw,3rem)] mb-4">AI-Powered Social Media Content for Every Platform</h2></Reveal>
            <Reveal delay={200}><p className="text-[1.1rem] text-[var(--text-secondary)] max-w-[600px] mx-auto">One system. Unlimited content. All the platforms you&apos;re already on.</p></Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-9 card-hover h-full">
                  <div className="service-icon mb-5"><span>{s.icon}</span></div>
                  <h3 className="text-[1.15rem] font-bold mb-2.5">{s.title}</h3>
                  <p className="text-[0.9rem] text-[var(--text-secondary)] leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ───────────────────────────────────── */}
      <section className="py-[100px] px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <Reveal><p className="uppercase text-xs font-semibold tracking-[3px] text-[var(--accent)] mb-3">Process</p></Reveal>
            <Reveal delay={100}><h2 className="text-[clamp(2rem,4vw,3rem)] mb-4">How AI Content Marketing Works — 4 Simple Steps</h2></Reveal>
            <Reveal delay={200}><p className="text-[1.1rem] text-[var(--text-secondary)]">Tell us about your brand. Maximus does the rest.</p></Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 100}>
                <div className="text-center">
                  <div className="step-circle mx-auto mb-5">{s.num}</div>
                  <h3 className="text-[1.1rem] font-bold mb-2.5">{s.title}</h3>
                  <p className="text-[0.9rem] text-[var(--text-secondary)] leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Numbers (with counters) ────────────────────── */}
      <section className="py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <Reveal><p className="uppercase text-xs font-semibold tracking-[3px] text-[var(--accent)] mb-3">The Numbers</p></Reveal>
            <Reveal delay={100}><h2 className="text-[clamp(2rem,4vw,3rem)] mb-4">What happens when Maximus runs your content.</h2></Reveal>
            <Reveal delay={200}><p className="text-[1.1rem] text-[var(--text-secondary)]">Most businesses post 3–4 times a week and call it marketing. Here&apos;s what changes.</p></Reveal>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 100}>
                <div className="text-center p-9 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl card-hover">
                  <div className="metric-number"><Counter target={m.target} suffix={m.suffix} /></div>
                  <p className="text-[0.95rem] font-semibold mt-3 mb-1.5">{m.label}</p>
                  <p className="text-[0.8rem] text-[var(--text-muted)] leading-relaxed">{m.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="max-w-[700px] mx-auto mt-16">
            <Reveal>
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
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Comparison Table ───────────────────────────────── */}
      <section className="py-[100px] px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <Reveal><p className="uppercase text-xs font-semibold tracking-[3px] text-[var(--accent)] mb-3">Why Maximus</p></Reveal>
            <Reveal delay={100}><h2 className="text-[clamp(2rem,4vw,3rem)]">How Maximus compares.</h2></Reveal>
          </div>
          <Reveal delay={200}>
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
          </Reveal>
        </div>
      </section>

      {/* ── Pricing ────────────────────────────────────────── */}
      <section id="pricing" className="py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-4">
            <Reveal><p className="uppercase text-xs font-semibold tracking-[3px] text-[var(--accent)] mb-3">Pricing</p></Reveal>
            <Reveal delay={100}><h2 className="text-[clamp(2rem,4vw,3rem)] mb-4">Choose a plan or build your own.</h2></Reveal>
            <Reveal delay={200}><p className="text-[1.1rem] text-[var(--text-secondary)] max-w-[600px] mx-auto mb-2">Pre-built packages to get you started fast.</p></Reveal>
            <p className="text-[var(--accent)] text-sm font-semibold mb-12">First week of content free after onboarding</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 100}>
                <div className={`bg-[var(--bg-card)] border border-[var(--border)] rounded-[14px] p-9 relative card-hover ${plan.featured ? "pricing-featured" : ""}`}>
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--accent)] text-[var(--bg-primary)] text-[0.7rem] font-bold uppercase tracking-[1.5px] py-1.5 px-5 rounded-full">Recommended</div>
                  )}
                  <h3 className="text-[1.35rem] font-bold mb-1.5">{plan.name}</h3>
                  <div className="mb-6 pb-5 border-b border-[var(--border)]">
                    <span className={`text-[2.5rem] font-extrabold tracking-[-1px] ${plan.featured ? "text-[var(--accent)]" : ""}`}>${plan.price}</span>
                    <span className="text-[0.9rem] text-[var(--text-muted)] ml-1">/month</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-baseline gap-2.5 text-[0.88rem] text-[var(--text-secondary)]">
                        <span className="text-[var(--accent)] text-[0.7rem] shrink-0 mt-0.5">✦</span>{f}
                      </li>
                    ))}
                  </ul>
                  <div className="pricing-pitch mb-6">{plan.pitch}</div>
                  <Link href="/onboarding" className={`btn w-full justify-center text-sm ${plan.featured ? "btn-primary" : "btn-outline"}`}>Get Started</Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section id="faq" className="py-[100px] px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <Reveal><p className="uppercase text-xs font-semibold tracking-[3px] text-[var(--accent)] mb-3">FAQ</p></Reveal>
            <Reveal delay={100}><h2 className="text-[clamp(2rem,4vw,3rem)]">Questions before you start.</h2></Reveal>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 40}>
                <details className="group bg-[var(--bg-card)] border border-[var(--border)] rounded-[10px] overflow-hidden transition-colors open:border-[var(--border-light)]">
                  <summary className="cursor-pointer p-[18px_22px] font-semibold text-[0.95rem] flex items-center justify-between gap-4 hover:text-[var(--accent)] transition-colors">
                    {faq.q}
                    <span className="text-[var(--text-muted)] text-xs group-open:rotate-180 transition-transform shrink-0">▼</span>
                  </summary>
                  <div className="px-[22px] pb-5 text-[0.9rem] text-[var(--text-secondary)] leading-[1.7]">{faq.a}</div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────── */}
      <section className="py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="cta-gradient rounded-2xl p-[60px_48px] text-center">
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold mb-4">Ready to never worry about content again?</h2>
              <p className="text-[1.05rem] text-[var(--text-secondary)] max-w-[500px] mx-auto mb-8">
                Complete our intake form and Maximus starts learning your brand immediately. Your first week of content is on us.
              </p>
              <Link href="/onboarding" className="btn btn-primary">Start Onboarding →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="sm:col-span-2 md:col-span-1">
              <img src="/logo.jpg" alt="Anomalist Studios" className="h-[60px] w-auto mb-2" />
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">Maximus by Anomalist Studios — AI-powered content and marketing, delivered to your dashboard.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">Pages</h4>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <Link href="/" className="block hover:text-[var(--text-primary)]">Home</Link>
                <Link href="/about" className="block hover:text-[var(--text-primary)]">About</Link>
                <Link href="/blog" className="block hover:text-[var(--text-primary)]">Blog</Link>
                <Link href="/onboarding" className="block hover:text-[var(--text-primary)]">Get Started</Link>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">Legal</h4>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <Link href="/privacy" className="block hover:text-[var(--text-primary)]">Privacy Policy</Link>
                <Link href="/terms" className="block hover:text-[var(--text-primary)]">Terms of Service</Link>
                <Link href="/contact" className="block hover:text-[var(--text-primary)]">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">Client</h4>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <Link href="/login" className="block hover:text-[var(--text-primary)]">Client Login</Link>
                <Link href="/dashboard" className="block hover:text-[var(--text-primary)]">Dashboard</Link>
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
