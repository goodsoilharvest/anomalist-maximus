"use client";

import { useState } from "react";
import Link from "next/link";

// Mock data for skeleton — will be replaced with real Prisma queries once DB is connected
const mockContent = [
  { id: "1", platform: "FACEBOOK", title: "New batch drops Friday", body: "There's a reason we still hand-label every bag...", status: "PENDING_REVIEW", scheduledAt: "2026-04-15T10:00:00Z" },
  { id: "2", platform: "INSTAGRAM", title: "Batch #347", body: "Dark roast. Small batch. Hand-labeled because we're stubborn like that.", status: "PENDING_REVIEW", scheduledAt: "2026-04-15T10:00:00Z" },
  { id: "3", platform: "LINKEDIN", title: "We turned down a wholesale deal", body: "A regional chain wanted to stock our dark roast in 40 locations...", status: "APPROVED", scheduledAt: "2026-04-15T09:00:00Z" },
  { id: "4", platform: "GOOGLE_BUSINESS", title: "New batch alert", body: "Dark Roast Batch #347 drops this Friday at 7 AM...", status: "PUBLISHED", publishedAt: "2026-04-14T07:00:00Z" },
  { id: "5", platform: "FACEBOOK", title: "Weekend hours update", body: "Open Saturday 6AM-3PM this week. Stop by for our new cold brew lineup.", status: "DRAFT", scheduledAt: "2026-04-16T08:00:00Z" },
  { id: "6", platform: "BLOG", title: "Dark Roast vs. Medium Roast: What Nobody Tells You", body: "Most people think dark roast means stronger coffee. It doesn't.", status: "PENDING_REVIEW", scheduledAt: "2026-04-17T12:00:00Z" },
  { id: "7", platform: "EMAIL", title: "Batch #347 drops Friday", body: "Hey [First Name], Quick one this week. Batch #347 is our first roast from...", status: "APPROVED", scheduledAt: "2026-04-15T14:00:00Z" },
  { id: "8", platform: "INSTAGRAM", title: "Behind the scenes", body: "This is what 5AM looks like at the roastery. No filter needed.", status: "DRAFT", scheduledAt: "2026-04-16T10:00:00Z" },
];

const platformColors: Record<string, string> = {
  FACEBOOK: "bg-blue-500",
  INSTAGRAM: "bg-pink-500",
  LINKEDIN: "bg-blue-700",
  GOOGLE_BUSINESS: "bg-green-500",
  BLOG: "bg-purple-500",
  EMAIL: "bg-amber-500",
  AD_COPY: "bg-red-500",
};

const platformIcons: Record<string, string> = {
  FACEBOOK: "📘",
  INSTAGRAM: "📷",
  LINKEDIN: "💼",
  GOOGLE_BUSINESS: "📍",
  BLOG: "✍️",
  EMAIL: "📧",
  AD_COPY: "📢",
};

const statusStyles: Record<string, { bg: string; text: string; label: string }> = {
  DRAFT: { bg: "bg-zinc-500/10", text: "text-zinc-400", label: "Draft" },
  PENDING_REVIEW: { bg: "bg-amber-500/10", text: "text-amber-400", label: "Needs Review" },
  APPROVED: { bg: "bg-green-500/10", text: "text-green-400", label: "Approved" },
  PUBLISHED: { bg: "bg-[var(--accent)]/10", text: "text-[var(--accent)]", label: "Published" },
  REJECTED: { bg: "bg-red-500/10", text: "text-red-400", label: "Rejected" },
};

type Filter = "all" | "PENDING_REVIEW" | "APPROVED" | "PUBLISHED" | "DRAFT";

export default function ClientDashboard() {
  const [filter, setFilter] = useState<Filter>("all");
  const [content, setContent] = useState(mockContent);

  const filtered = filter === "all" ? content : content.filter(c => c.status === filter);
  const pending = content.filter(c => c.status === "PENDING_REVIEW").length;
  const approved = content.filter(c => c.status === "APPROVED").length;
  const published = content.filter(c => c.status === "PUBLISHED").length;

  function approve(id: string) {
    setContent(prev => prev.map(c => c.id === id ? { ...c, status: "APPROVED" } : c));
  }

  function reject(id: string) {
    setContent(prev => prev.map(c => c.id === id ? { ...c, status: "REJECTED" } : c));
  }

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Top nav */}
      <header className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-bold text-lg">
              <span className="text-[var(--accent)]">Maximus</span>
            </Link>
            <span className="text-xs text-[var(--text-muted)] hidden sm:block">Iron Oak Coffee Co.</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/dashboard/settings" className="text-sm text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">Settings</Link>
            <Link href="/dashboard/billing" className="text-sm text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">Billing</Link>
            <button className="text-sm text-red-400 hover:text-red-300 transition-colors">Sign Out</button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Welcome + stats */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-1">Content Dashboard</h1>
          <p className="text-sm text-[var(--text-muted)]">Review, approve, and track your content across all platforms.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-center">
            <p className="text-2xl font-bold text-amber-400">{pending}</p>
            <p className="text-xs text-[var(--text-muted)]">Needs Review</p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-center">
            <p className="text-2xl font-bold text-green-400">{approved}</p>
            <p className="text-xs text-[var(--text-muted)]">Approved</p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-center">
            <p className="text-2xl font-bold text-[var(--accent)]">{published}</p>
            <p className="text-xs text-[var(--text-muted)]">Published</p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-center">
            <p className="text-2xl font-bold">{content.length}</p>
            <p className="text-xs text-[var(--text-muted)]">Total This Week</p>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {([
            { key: "all", label: "All" },
            { key: "PENDING_REVIEW", label: `Needs Review (${pending})` },
            { key: "APPROVED", label: "Approved" },
            { key: "PUBLISHED", label: "Published" },
            { key: "DRAFT", label: "Drafts" },
          ] as { key: Filter; label: string }[]).map(tab => (
            <button key={tab.key} onClick={() => setFilter(tab.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${filter === tab.key ? "bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30" : "text-[var(--text-muted)] hover:text-[var(--foreground)] border border-transparent"}`}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content cards */}
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-[var(--text-muted)]">
              <p className="text-4xl mb-3">📭</p>
              <p>No content in this category.</p>
            </div>
          ) : filtered.map(item => {
            const st = statusStyles[item.status] ?? statusStyles.DRAFT;
            return (
              <div key={item.id} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 flex flex-col sm:flex-row gap-4">
                {/* Platform badge */}
                <div className="flex items-start gap-3 sm:w-36 shrink-0">
                  <span className="text-2xl">{platformIcons[item.platform] ?? "📄"}</span>
                  <div>
                    <p className="text-sm font-semibold">{item.platform.replace("_", " ")}</p>
                    <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full mt-1 ${st.bg} ${st.text}`}>{st.label}</span>
                  </div>
                </div>

                {/* Content preview */}
                <div className="flex-1 min-w-0">
                  {item.title && <p className="font-semibold text-sm mb-1">{item.title}</p>}
                  <p className="text-sm text-[var(--text-muted)] line-clamp-2 leading-relaxed">{item.body}</p>
                  {item.scheduledAt && (
                    <p className="text-xs text-[var(--text-muted)] mt-2 opacity-60">
                      Scheduled: {new Date(item.scheduledAt).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}
                    </p>
                  )}
                </div>

                {/* Actions */}
                {item.status === "PENDING_REVIEW" && (
                  <div className="flex sm:flex-col gap-2 shrink-0 sm:justify-center">
                    <button onClick={() => approve(item.id)}
                      className="px-4 py-1.5 rounded-lg bg-green-500/10 text-green-400 text-xs font-semibold hover:bg-green-500/20 transition-colors">
                      Approve
                    </button>
                    <button onClick={() => reject(item.id)}
                      className="px-4 py-1.5 rounded-lg bg-red-500/10 text-red-400 text-xs font-semibold hover:bg-red-500/20 transition-colors">
                      Reject
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
