"use client";

import { useState } from "react";
import Link from "next/link";

type Step = 1 | 2 | 3 | 4;

const industryOptions = [
  "Firearms Training", "Insurance", "Fitness & Gyms", "Restaurant & Food",
  "Real Estate", "Home Services", "Healthcare", "Legal", "Automotive",
  "Retail", "Construction", "Beauty & Wellness", "Other",
];

const platformOptions = [
  { key: "facebook", label: "Facebook", icon: "📘" },
  { key: "instagram", label: "Instagram", icon: "📷" },
  { key: "linkedin", label: "LinkedIn", icon: "💼" },
  { key: "google", label: "Google Business", icon: "📍" },
];

export default function OnboardingPage() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState({
    businessName: "",
    industry: "",
    website: "",
    email: "",
    name: "",
    platforms: [] as string[],
    competitors: "",
    brandVoice: "",
    goals: "",
    targetAudience: "",
    plan: "growth",
  });

  function update(key: string, value: string | string[]) {
    setForm(prev => ({ ...prev, [key]: value }));
  }

  function togglePlatform(p: string) {
    setForm(prev => ({
      ...prev,
      platforms: prev.platforms.includes(p) ? prev.platforms.filter(x => x !== p) : [...prev.platforms, p],
    }));
  }

  function next() { if (step < 4) setStep((step + 1) as Step); }
  function back() { if (step > 1) setStep((step - 1) as Step); }

  async function handleSubmit() {
    // TODO: POST to /api/onboarding once database is connected
    alert("Onboarding submitted! (Database not yet connected — this is a demo)");
  }

  return (
    <div className="min-h-screen bg-[var(--background)] px-4 py-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-[var(--accent)]">Maximus</span>
          </Link>
          <p className="text-sm text-[var(--text-muted)] mt-2">Let&apos;s get your content engine running.</p>
        </div>

        {/* Progress bar */}
        <div className="flex gap-2 mb-10">
          {[1, 2, 3, 4].map(s => (
            <div key={s} className={`flex-1 h-1.5 rounded-full transition-colors ${s <= step ? "bg-[var(--accent)]" : "bg-[var(--border)]"}`} />
          ))}
        </div>

        {/* Step 1: Business basics */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-1">Tell us about your business</h2>
              <p className="text-sm text-[var(--text-muted)]">Basic info so Maximus knows who you are.</p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Your name</label>
              <input value={form.name} onChange={e => update("name", e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)]"
                placeholder="John Smith" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" value={form.email} onChange={e => update("email", e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)]"
                placeholder="john@yourbusiness.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Business name</label>
              <input value={form.businessName} onChange={e => update("businessName", e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)]"
                placeholder="Iron Oak Coffee Co." />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Industry</label>
              <select value={form.industry} onChange={e => update("industry", e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)]">
                <option value="">Select your industry</option>
                {industryOptions.map(i => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Website (optional)</label>
              <input value={form.website} onChange={e => update("website", e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)]"
                placeholder="https://yourbusiness.com" />
            </div>
          </div>
        )}

        {/* Step 2: Brand & voice */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-1">Your brand voice</h2>
              <p className="text-sm text-[var(--text-muted)]">Help Maximus sound like you, not a robot.</p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Describe your brand voice</label>
              <textarea value={form.brandVoice} onChange={e => update("brandVoice", e.target.value)}
                rows={4}
                className="w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] resize-none"
                placeholder="Professional but approachable. We use humor occasionally but never at the expense of credibility. We're the expert friend, not the corporate suit." />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Who is your target audience?</label>
              <textarea value={form.targetAudience} onChange={e => update("targetAudience", e.target.value)}
                rows={3}
                className="w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] resize-none"
                placeholder="Local homeowners aged 30-55, middle class, value quality and reliability..." />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Top competitors (names or URLs)</label>
              <textarea value={form.competitors} onChange={e => update("competitors", e.target.value)}
                rows={2}
                className="w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] resize-none"
                placeholder="Smith's HVAC, Reliable Home Services, coolairinc.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">What are your main goals?</label>
              <textarea value={form.goals} onChange={e => update("goals", e.target.value)}
                rows={2}
                className="w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] resize-none"
                placeholder="More local leads, build brand awareness, dominate Google Business..." />
            </div>
          </div>
        )}

        {/* Step 3: Platforms */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-1">Where do you want to show up?</h2>
              <p className="text-sm text-[var(--text-muted)]">Select the platforms Maximus should create content for.</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {platformOptions.map(p => {
                const selected = form.platforms.includes(p.key);
                return (
                  <button key={p.key} type="button" onClick={() => togglePlatform(p.key)}
                    className={`p-4 rounded-xl border text-left transition-colors ${selected ? "border-[var(--accent)] bg-[var(--accent)]/10" : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/40"}`}>
                    <span className="text-2xl block mb-2">{p.icon}</span>
                    <p className="font-semibold text-sm">{p.label}</p>
                  </button>
                );
              })}
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-3 mt-6">Add-ons</h3>
              <div className="space-y-2">
                {[
                  { key: "blog", label: "Weekly blog articles", price: "$50/wk" },
                  { key: "email", label: "Email newsletters", price: "$38/wk" },
                  { key: "ads", label: "Ad copy sets", price: "$25/wk" },
                  { key: "intel", label: "Weekly competitor intelligence", price: "$100/mo" },
                  { key: "strategy", label: "Monthly strategy brief", price: "$75/mo" },
                  { key: "management", label: "Social media management", price: "$250/mo" },
                ].map(addon => {
                  const selected = form.platforms.includes(addon.key);
                  return (
                    <button key={addon.key} type="button" onClick={() => togglePlatform(addon.key)}
                      className={`w-full p-3 rounded-lg border text-left flex items-center justify-between text-sm transition-colors ${selected ? "border-[var(--accent)] bg-[var(--accent)]/10" : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/40"}`}>
                      <span>{addon.label}</span>
                      <span className="text-[var(--text-muted)]">{addon.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Review & plan selection */}
        {step === 4 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-1">Review & confirm</h2>
              <p className="text-sm text-[var(--text-muted)]">Everything look right? Your first week is free.</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-[var(--text-muted)]">Business</span><span className="font-semibold">{form.businessName || "—"}</span></div>
              <div className="flex justify-between"><span className="text-[var(--text-muted)]">Industry</span><span>{form.industry || "—"}</span></div>
              <div className="flex justify-between"><span className="text-[var(--text-muted)]">Contact</span><span>{form.name} ({form.email || "—"})</span></div>
              <div className="flex justify-between"><span className="text-[var(--text-muted)]">Platforms</span><span>{form.platforms.filter(p => ["facebook", "instagram", "linkedin", "google"].includes(p)).join(", ") || "—"}</span></div>
            </div>

            {/* Plan selection */}
            <div className="space-y-3">
              <h3 className="font-semibold">Choose your plan</h3>
              {[
                { key: "starter", name: "Starter", price: "$420/mo", desc: "Facebook + Instagram" },
                { key: "growth", name: "Growth", price: "$960/mo", desc: "FB + IG + LinkedIn + Competitor Intel", recommended: true },
                { key: "authority", name: "Authority", price: "$1,510/mo", desc: "Full service: all platforms + blog + management" },
                { key: "custom", name: "Custom", price: "Varies", desc: "Build your own package" },
              ].map(p => (
                <button key={p.key} type="button" onClick={() => update("plan", p.key)}
                  className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-colors ${form.plan === p.key ? "border-[var(--accent)] bg-[var(--accent)]/10" : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/40"}`}>
                  <div>
                    <p className="font-semibold text-sm flex items-center gap-2">
                      {p.name}
                      {p.recommended && <span className="text-[10px] bg-[var(--accent)] text-white px-2 py-0.5 rounded-full">Recommended</span>}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">{p.desc}</p>
                  </div>
                  <span className="font-bold text-sm">{p.price}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex justify-between mt-10">
          {step > 1 ? (
            <button onClick={back} className="px-6 py-2.5 rounded-lg border border-[var(--border)] text-sm font-semibold hover:bg-[var(--surface)] transition-colors">
              Back
            </button>
          ) : (
            <Link href="/" className="px-6 py-2.5 rounded-lg border border-[var(--border)] text-sm font-semibold hover:bg-[var(--surface)] transition-colors">
              Cancel
            </Link>
          )}
          {step < 4 ? (
            <button onClick={next} className="px-6 py-2.5 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-semibold transition-colors">
              Continue
            </button>
          ) : (
            <button onClick={handleSubmit} className="px-6 py-2.5 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-semibold transition-colors">
              Submit & Start Free Week
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
