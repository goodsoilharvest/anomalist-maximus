"use client";

import { useState } from "react";
import Link from "next/link";

// Mock data — replaced with real Prisma queries once DB is connected
const mockClients = [
  { id: "1", businessName: "Iron Oak Coffee Co.", industry: "Restaurant & Food", plan: "Growth", status: "ACTIVE", pendingContent: 3, email: "jake@ironoakcoffee.com", joinedAt: "2026-04-10" },
  { id: "2", businessName: "Guardian Firearms Training", industry: "Firearms Training", plan: "Authority", status: "ACTIVE", pendingContent: 0, email: "mike@guardianfirearms.com", joinedAt: "2026-04-08" },
  { id: "3", businessName: "Peak Performance Gym", industry: "Fitness & Gyms", plan: "Starter", status: "ACTIVE", pendingContent: 5, email: "sarah@peakperformance.com", joinedAt: "2026-04-12" },
  { id: "4", businessName: "Reliable Home HVAC", industry: "Home Services", plan: "Growth", status: "TRIALING", pendingContent: 8, email: "dan@reliablehvac.com", joinedAt: "2026-04-14" },
  { id: "5", businessName: "Crossroads Insurance", industry: "Insurance", plan: "Custom", status: "INTAKE", pendingContent: 0, email: "lisa@crossroadsins.com", joinedAt: "2026-04-14" },
];

const statusColors: Record<string, string> = {
  ACTIVE: "text-green-400 bg-green-500/10",
  TRIALING: "text-amber-400 bg-amber-500/10",
  INTAKE: "text-blue-400 bg-blue-500/10",
  PAUSED: "text-zinc-400 bg-zinc-500/10",
  CHURNED: "text-red-400 bg-red-500/10",
};

export default function AdminDashboard() {
  const [clients] = useState(mockClients);

  const active = clients.filter(c => c.status === "ACTIVE").length;
  const trialing = clients.filter(c => c.status === "TRIALING").length;
  const intake = clients.filter(c => c.status === "INTAKE").length;
  const totalPending = clients.reduce((sum, c) => sum + c.pendingContent, 0);
  const mrr = clients
    .filter(c => c.status === "ACTIVE" || c.status === "TRIALING")
    .reduce((sum, c) => {
      const prices: Record<string, number> = { Starter: 420, Growth: 960, Authority: 1510, Custom: 800 };
      return sum + (prices[c.plan] ?? 0);
    }, 0);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Top nav */}
      <header className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-bold text-lg">
              <span className="text-[var(--accent)]">Maximus</span>
              <span className="text-xs text-[var(--text-muted)] ml-2">Admin</span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/admin/content" className="text-sm text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">Content Queue</Link>
            <Link href="/admin/billing" className="text-sm text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">Billing</Link>
            <button className="text-sm text-red-400 hover:text-red-300 transition-colors">Sign Out</button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-2xl font-bold mb-1">Admin Dashboard</h1>
        <p className="text-sm text-[var(--text-muted)] mb-8">Manage clients, content, and billing.</p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-center">
            <p className="text-2xl font-bold text-green-400">{active}</p>
            <p className="text-xs text-[var(--text-muted)]">Active Clients</p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-center">
            <p className="text-2xl font-bold text-amber-400">{trialing}</p>
            <p className="text-xs text-[var(--text-muted)]">Trialing</p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-center">
            <p className="text-2xl font-bold text-blue-400">{intake}</p>
            <p className="text-xs text-[var(--text-muted)]">Onboarding</p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-center">
            <p className="text-2xl font-bold text-[var(--accent)]">{totalPending}</p>
            <p className="text-xs text-[var(--text-muted)]">Pending Content</p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-center">
            <p className="text-2xl font-bold text-green-400">${mrr.toLocaleString()}</p>
            <p className="text-xs text-[var(--text-muted)]">Est. MRR</p>
          </div>
        </div>

        {/* Client table */}
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden">
          <div className="px-5 py-4 border-b border-[var(--border)] flex items-center justify-between">
            <h2 className="font-bold">Clients</h2>
            <Link href="/admin/clients/new" className="px-3 py-1.5 rounded-lg bg-[var(--accent)] text-white text-xs font-semibold hover:bg-[var(--accent-hover)] transition-colors">
              + Add Client
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left px-5 py-3 text-[var(--text-muted)] font-medium">Business</th>
                  <th className="text-left px-5 py-3 text-[var(--text-muted)] font-medium hidden md:table-cell">Industry</th>
                  <th className="text-left px-5 py-3 text-[var(--text-muted)] font-medium">Plan</th>
                  <th className="text-left px-5 py-3 text-[var(--text-muted)] font-medium">Status</th>
                  <th className="text-center px-5 py-3 text-[var(--text-muted)] font-medium">Pending</th>
                  <th className="text-right px-5 py-3 text-[var(--text-muted)] font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {clients.map(client => (
                  <tr key={client.id} className="border-b border-[var(--border)]/50 hover:bg-[var(--surface-hover)] transition-colors">
                    <td className="px-5 py-3">
                      <p className="font-semibold">{client.businessName}</p>
                      <p className="text-xs text-[var(--text-muted)]">{client.email}</p>
                    </td>
                    <td className="px-5 py-3 text-[var(--text-muted)] hidden md:table-cell">{client.industry}</td>
                    <td className="px-5 py-3 font-medium">{client.plan}</td>
                    <td className="px-5 py-3">
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${statusColors[client.status] ?? "text-zinc-400 bg-zinc-500/10"}`}>
                        {client.status}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-center">
                      {client.pendingContent > 0 ? (
                        <span className="text-amber-400 font-semibold">{client.pendingContent}</span>
                      ) : (
                        <span className="text-[var(--text-muted)]">0</span>
                      )}
                    </td>
                    <td className="px-5 py-3 text-right">
                      <Link href={`/admin/clients/${client.id}`} className="text-[var(--accent)] hover:underline text-xs font-medium">
                        View →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
