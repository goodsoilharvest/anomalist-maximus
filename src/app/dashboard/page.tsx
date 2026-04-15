"use client";

import { useState } from "react";
import Link from "next/link";
import { getNicheConfig } from "@/lib/dashboard-config";
import { scenarios, timeMultipliers, getScaledScorecard, type TimelinePoint } from "@/lib/dummy-data";

const platformIcons: Record<string, string> = {
  Facebook: "📘", Instagram: "📷", LinkedIn: "💼", "Google Business": "📍", Blog: "✍️", Email: "📧",
};

function TrendBadge({ value, suffix = "%" }: { value: number; suffix?: string }) {
  if (value === 0) return <span className="text-xs text-[var(--text-muted)]">—</span>;
  const color = value > 0 ? "text-green-400" : "text-red-400";
  return <span className={`text-xs font-semibold ${color}`}>{value > 0 ? "↑" : "↓"} {Math.abs(value)}{suffix}</span>;
}

export default function ClientDashboard() {
  const [scenarioKey, setScenarioKey] = useState("iron-oak-coffee");
  const [timeline, setTimeline] = useState<TimelinePoint>("month1");
  const [showTimeMachine, setShowTimeMachine] = useState(true);
  const [activeSection, setActiveSection] = useState<"overview" | "feed" | "competitors" | "reports" | "profile" | "messages">("overview");

  const scenario = scenarios[scenarioKey];
  const config = getNicheConfig(scenario.business.industry);
  const scorecard = getScaledScorecard(scenario, timeline);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Top nav */}
      <header className="border-b border-[var(--border)] bg-[var(--bg-secondary)] sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/"><img src="/logo.jpg" alt="Anomalist Studios" className="h-8 w-auto" /></Link>
            <span className="hidden sm:block text-xs text-[var(--text-muted)] border-l border-[var(--border)] pl-4">{scenario.business.name}</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/login" className="text-[var(--text-muted)] hover:text-[var(--text-primary)]">Sign Out</Link>
          </div>
        </div>
      </header>

      {/* Time Machine (testing tool) */}
      {showTimeMachine && (
        <div className="bg-[rgba(212,145,30,0.05)] border-b border-[var(--accent)]/20 py-3 px-4">
          <div className="max-w-[1200px] mx-auto flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-[var(--accent)] font-semibold">
              <span>⏰</span> TIME MACHINE
              <button onClick={() => setShowTimeMachine(false)} className="text-[var(--text-muted)] hover:text-[var(--text-primary)] ml-2">✕</button>
            </div>
            <select value={scenarioKey} onChange={e => setScenarioKey(e.target.value)}
              className="px-3 py-1.5 rounded border border-[var(--border)] bg-[var(--bg-card)] text-xs text-[var(--text-primary)]">
              {Object.entries(scenarios).map(([key, s]) => (
                <option key={key} value={key}>{s.business.name} ({s.business.industry})</option>
              ))}
            </select>
            <div className="flex gap-1">
              {(Object.keys(timeMultipliers) as TimelinePoint[]).map(t => (
                <button key={t} onClick={() => setTimeline(t)}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${timeline === t ? "bg-[var(--accent)] text-[var(--bg-primary)]" : "bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)]/50"}`}>
                  {timeMultipliers[t].label}
                </button>
              ))}
            </div>
            <span className="text-xs text-[var(--text-muted)] hidden md:block">{timeMultipliers[timeline].description}</span>
          </div>
        </div>
      )}

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6">
        {/* Section tabs */}
        <div className="flex gap-1 mb-6 overflow-x-auto border-b border-[var(--border)]">
          {([
            { key: "overview", label: "Overview", icon: "📊" },
            { key: "feed", label: "Activity", icon: "📱" },
            { key: "competitors", label: "Competitors", icon: "🔍" },
            { key: "reports", label: "Reports", icon: "📄" },
            { key: "profile", label: "My Business", icon: "🏢" },
            { key: "messages", label: "Messages", icon: "💬" },
          ] as { key: typeof activeSection; label: string; icon: string }[]).map(tab => (
            <button key={tab.key} onClick={() => setActiveSection(tab.key)}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap flex items-center gap-2 -mb-px border-b-2 transition-colors ${activeSection === tab.key ? "border-[var(--accent)] text-[var(--accent)]" : "border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)]"}`}>
              <span className="text-base">{tab.icon}</span>{tab.label}
            </button>
          ))}
        </div>

        {/* ── OVERVIEW ──────────────────────────────────────── */}
        {activeSection === "overview" && (
          <>
            <div className="mb-6">
              <h1 className="text-xl font-bold mb-1">Dashboard</h1>
              <p className="text-sm text-[var(--text-muted)]">{config.primaryGoal} — {scenario.business.plan} plan</p>
            </div>

            {/* Scorecard */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {config.metrics.map(metric => {
                const val = scorecard[metric.key as keyof typeof scorecard];
                if (val === undefined) return null;
                const trend = scorecard[(metric.key + "Trend") as keyof typeof scorecard] as number | undefined;
                return (
                  <div key={metric.key} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5 card-hover">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg">{metric.icon}</span>
                      {trend !== undefined && <TrendBadge value={trend} suffix={metric.format === "percent" ? " pts" : "%"} />}
                    </div>
                    <p className="text-2xl font-bold text-[var(--accent)]">
                      {metric.format === "percent" ? `${val}%` : metric.format === "currency" ? `$${(val as number).toLocaleString()}` : (val as number).toLocaleString()}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">{metric.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Quick competitor summary */}
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <span>🔍</span>
                <h2 className="font-bold">Competitor Snapshot</h2>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                {scenario.competitorIntel.competitors.map(c => (
                  <div key={c.name} className="bg-[var(--bg-primary)] rounded-lg p-4 border border-[var(--border)]/50">
                    <p className="font-semibold text-sm mb-1">{c.name}</p>
                    <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                      <span>{c.postsThisWeek} posts/wk</span>
                      <span>{c.engagementRate}% eng.</span>
                      <span className={c.trend === "up" ? "text-red-400" : c.trend === "down" ? "text-green-400" : "text-[var(--text-muted)]"}>
                        {c.trend === "up" ? "↑ Growing" : c.trend === "down" ? "↓ Falling" : "→ Flat"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed bg-[var(--bg-primary)] p-4 rounded-lg border-l-2 border-[var(--accent)]">{scenario.competitorIntel.insight}</p>
            </div>

            {/* Weekly report preview */}
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span>📄</span>
                  <h2 className="font-bold">This Week&apos;s Report</h2>
                </div>
                <button className="text-xs text-[var(--accent)] hover:underline">Download PDF</button>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{scenario.weeklyReport.summary}</p>
              <div className="bg-[var(--bg-primary)] rounded-lg p-4 border border-[var(--border)]/50 mb-4">
                <p className="text-xs text-[var(--accent)] font-semibold mb-1">🏆 Top Performing Post — {scenario.weeklyReport.topPost.platform}</p>
                <p className="text-sm text-[var(--text-primary)] leading-relaxed">&ldquo;{scenario.weeklyReport.topPost.body.slice(0, 100)}...&rdquo;</p>
                <p className="text-xs text-[var(--text-muted)] mt-2">{scenario.weeklyReport.topPost.engagement.toLocaleString()} total engagements</p>
              </div>
              <div className="bg-[var(--bg-primary)] rounded-lg p-4 border-l-2 border-[var(--accent)]">
                <p className="text-xs text-[var(--accent)] font-semibold mb-1">💡 Recommendation</p>
                <p className="text-sm text-[var(--text-secondary)]">{scenario.weeklyReport.recommendation}</p>
              </div>
            </div>
          </>
        )}

        {/* ── ACTIVITY FEED ─────────────────────────────────── */}
        {activeSection === "feed" && (
          <>
            <div className="mb-6">
              <h1 className="text-xl font-bold mb-1">Activity Feed</h1>
              <p className="text-sm text-[var(--text-muted)]">Everything Maximus has posted for you.</p>
            </div>
            <div className="space-y-3">
              {scenario.activityFeed.map((item, i) => (
                <div key={i} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5 card-hover">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl shrink-0">{platformIcons[item.platform] ?? "📄"}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold">{item.platform}</span>
                        <span className="text-xs text-[var(--text-muted)]">{new Date(item.postedAt).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}</span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">{item.body}</p>
                      {(item.likes > 0 || item.comments > 0) && (
                        <div className="flex gap-4 mt-3 text-xs text-[var(--text-muted)]">
                          {item.likes > 0 && <span>❤️ {item.likes.toLocaleString()}</span>}
                          {item.comments > 0 && <span>💬 {item.comments}</span>}
                          {item.shares > 0 && <span>🔄 {item.shares}</span>}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ── COMPETITORS ───────────────────────────────────── */}
        {activeSection === "competitors" && (
          <>
            <div className="mb-6">
              <h1 className="text-xl font-bold mb-1">Competitor Intelligence</h1>
              <p className="text-sm text-[var(--text-muted)]">Weekly analysis of your competitive landscape.</p>
            </div>
            <div className="space-y-4">
              {scenario.competitorIntel.competitors.map(c => (
                <div key={c.name} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 card-hover">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold">{c.name}</h3>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${c.trend === "up" ? "bg-red-500/10 text-red-400" : c.trend === "down" ? "bg-green-500/10 text-green-400" : "bg-[var(--bg-primary)] text-[var(--text-muted)]"}`}>
                      {c.trend === "up" ? "↑ Growing" : c.trend === "down" ? "↓ Declining" : "→ Steady"}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div><p className="text-xs text-[var(--text-muted)]">Posts/Week</p><p className="text-lg font-bold">{c.postsThisWeek}</p></div>
                    <div><p className="text-xs text-[var(--text-muted)]">Engagement Rate</p><p className="text-lg font-bold">{c.engagementRate}%</p></div>
                    <div><p className="text-xs text-[var(--text-muted)]">vs. You</p><p className="text-lg font-bold text-green-400">{scorecard.engagementRate > c.engagementRate ? "You lead" : "Behind"}</p></div>
                  </div>
                </div>
              ))}
              <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6">
                <h3 className="font-bold mb-3 flex items-center gap-2"><span>💡</span> This Week&apos;s Insight</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{scenario.competitorIntel.insight}</p>
              </div>
            </div>
          </>
        )}

        {/* ── REPORTS ───────────────────────────────────────── */}
        {activeSection === "reports" && (
          <>
            <div className="mb-6">
              <h1 className="text-xl font-bold mb-1">Reports</h1>
              <p className="text-sm text-[var(--text-muted)]">Automated weekly and monthly summaries.</p>
            </div>
            <div className="space-y-4">
              {["Week of Apr 7–13", "Week of Mar 31–Apr 6", "Week of Mar 24–30", "March 2026 Monthly"].map((period, i) => (
                <div key={period} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 flex items-center justify-between card-hover">
                  <div>
                    <p className="font-semibold text-sm">{period}</p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">{i === 3 ? "Monthly strategy brief" : "Weekly performance summary"}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded-full">Generated</span>
                    <button className="text-xs text-[var(--accent)] hover:underline font-medium">View →</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ── MY BUSINESS (profile) ─────────────────────────── */}
        {activeSection === "profile" && (
          <>
            <div className="mb-6">
              <h1 className="text-xl font-bold mb-1">Business Profile</h1>
              <p className="text-sm text-[var(--text-muted)]">What Maximus knows about your business. Update anytime.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6">
                <h3 className="font-bold mb-4">Business Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-[var(--text-muted)]">Name</span><span className="font-semibold">{scenario.business.name}</span></div>
                  <div className="flex justify-between"><span className="text-[var(--text-muted)]">Industry</span><span>{scenario.business.industry}</span></div>
                  <div className="flex justify-between"><span className="text-[var(--text-muted)]">Plan</span><span className="text-[var(--accent)] font-semibold">{scenario.business.plan}</span></div>
                  <div className="flex justify-between"><span className="text-[var(--text-muted)]">Website</span><span>{scenario.business.website}</span></div>
                  <div className="flex justify-between"><span className="text-[var(--text-muted)]">Client since</span><span>{new Date(scenario.business.startDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</span></div>
                </div>
              </div>
              <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6">
                <h3 className="font-bold mb-4">Connected Platforms</h3>
                <div className="space-y-2">
                  {scenario.business.connectedPlatforms.map(p => (
                    <div key={p} className="flex items-center justify-between py-2 border-b border-[var(--border)]/50 last:border-0">
                      <div className="flex items-center gap-2">
                        <span>{platformIcons[p] ?? "📱"}</span>
                        <span className="text-sm">{p}</span>
                      </div>
                      <span className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded-full">Connected</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 md:col-span-2">
                <h3 className="font-bold mb-4">Dashboard Features</h3>
                <p className="text-xs text-[var(--text-muted)] mb-3">Based on your industry ({config.label}), these features are active:</p>
                <div className="flex flex-wrap gap-2">
                  {config.features.map(f => (
                    <span key={f} className="text-xs bg-[var(--accent)]/10 text-[var(--accent)] px-3 py-1.5 rounded-full font-medium">
                      {f.replace(/_/g, " ")}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* ── MESSAGES ──────────────────────────────────────── */}
        {activeSection === "messages" && (
          <>
            <div className="mb-6">
              <h1 className="text-xl font-bold mb-1">Messages</h1>
              <p className="text-sm text-[var(--text-muted)]">Direct line to your content team.</p>
            </div>
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl overflow-hidden">
              <div className="p-6 space-y-4 max-h-[500px] overflow-y-auto">
                {scenario.messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.from === "client" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[70%] rounded-xl px-4 py-3 ${msg.from === "client" ? "bg-[var(--accent)]/10 border border-[var(--accent)]/20" : "bg-[var(--bg-primary)] border border-[var(--border)]"}`}>
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                      <p className="text-[10px] text-[var(--text-muted)] mt-1">{new Date(msg.ts).toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-[var(--border)] p-4 flex gap-3">
                <input placeholder="Type a message..." className="flex-1 px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]" />
                <button className="btn btn-primary !py-2.5 !px-5 text-sm">Send</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
