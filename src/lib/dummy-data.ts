// Dummy data generator for dashboard prototyping.
// The "time machine" lets you pick a scenario and timeline to see
// how the dashboard looks at different stages of a client relationship.

export interface DummyScenario {
  business: {
    name: string;
    industry: string;
    plan: string;
    startDate: string;
    website: string;
    connectedPlatforms: string[];
  };
  scorecard: {
    reach: number;
    reachTrend: number;
    engagementRate: number;
    engagementTrend: number;
    followers: number;
    followersTrend: number;
    postsPublished: number;
    webTraffic: number;
    webTrafficTrend: number;
    leads: number;
    leadsTrend: number;
    reviews: number;
    subscribers?: number;
    views?: number;
    bookings?: number;
  };
  activityFeed: Array<{
    platform: string;
    body: string;
    postedAt: string;
    likes: number;
    comments: number;
    shares: number;
  }>;
  competitorIntel: {
    competitors: Array<{
      name: string;
      postsThisWeek: number;
      engagementRate: number;
      trend: "up" | "down" | "flat";
    }>;
    insight: string;
  };
  weeklyReport: {
    summary: string;
    topPost: { platform: string; body: string; engagement: number };
    recommendation: string;
  };
  messages: Array<{
    from: "client" | "team";
    text: string;
    ts: string;
  }>;
}

export const scenarios: Record<string, DummyScenario> = {
  "iron-oak-coffee": {
    business: {
      name: "Iron Oak Coffee Co.",
      industry: "Restaurant & Food",
      plan: "Growth",
      startDate: "2026-03-15",
      website: "ironoakcoffee.com",
      connectedPlatforms: ["Facebook", "Instagram", "LinkedIn", "Google Business"],
    },
    scorecard: {
      reach: 48200,
      reachTrend: 23,
      engagementRate: 4.7,
      engagementTrend: 0.8,
      followers: 342,
      followersTrend: 18,
      postsPublished: 124,
      webTraffic: 1840,
      webTrafficTrend: 31,
      leads: 0,
      leadsTrend: 0,
      reviews: 8,
    },
    activityFeed: [
      { platform: "Facebook", body: "There's a reason we still hand-label every bag. It's not efficient. Our roaster reminds us every Tuesday...", postedAt: "2026-04-15T10:00:00Z", likes: 142, comments: 23, shares: 8 },
      { platform: "Instagram", body: "Batch #347. Dark roast. Small batch. Hand-labeled because we're stubborn like that. Drop a ☕ if you're grabbing one this week.", postedAt: "2026-04-15T09:30:00Z", likes: 284, comments: 47, shares: 0 },
      { platform: "LinkedIn", body: "We turned down a wholesale deal last month. A regional chain wanted to stock our dark roast in 40 locations...", postedAt: "2026-04-15T08:00:00Z", likes: 1247, comments: 89, shares: 34 },
      { platform: "Google Business", body: "New batch alert: Dark Roast Batch #347 drops this Friday at 7 AM. Small batch, hand-labeled, roasted in-house.", postedAt: "2026-04-14T12:00:00Z", likes: 0, comments: 0, shares: 0 },
      { platform: "Facebook", body: "Weekend hours update: Open Saturday 6AM-3PM this week. Stop by for our new cold brew lineup — three origins, one iced flight.", postedAt: "2026-04-14T10:00:00Z", likes: 67, comments: 12, shares: 3 },
      { platform: "Instagram", body: "This is what 5AM looks like at the roastery. No filter needed. The light hits different before the world wakes up.", postedAt: "2026-04-14T06:00:00Z", likes: 198, comments: 31, shares: 0 },
      { platform: "LinkedIn", body: "The best business advice I ever got came from a coffee farmer in Guatemala. 'Don't grow fast. Grow deep.'", postedAt: "2026-04-13T09:00:00Z", likes: 892, comments: 67, shares: 28 },
      { platform: "Facebook", body: "Our cold brew process takes 18 hours. That's not a flex — it's just what the flavor demands. Good things take time.", postedAt: "2026-04-13T11:00:00Z", likes: 89, comments: 15, shares: 5 },
    ],
    competitorIntel: {
      competitors: [
        { name: "Sunrise Roasters", postsThisWeek: 4, engagementRate: 1.8, trend: "flat" },
        { name: "Bean & Barrel", postsThisWeek: 7, engagementRate: 2.3, trend: "up" },
        { name: "Daily Grind Co.", postsThisWeek: 2, engagementRate: 0.9, trend: "down" },
      ],
      insight: "Bean & Barrel increased their posting frequency this week with a new seasonal menu campaign. They're getting traction on Instagram Reels. Recommendation: Maximus is adding short-form video captions to your content mix next week to stay competitive.",
    },
    weeklyReport: {
      summary: "Strong week. Your LinkedIn posts are outperforming industry average by 3x. Instagram engagement is steady. Facebook reach increased 15% with the new storytelling format.",
      topPost: { platform: "LinkedIn", body: "We turned down a wholesale deal last month...", engagement: 1370 },
      recommendation: "Your audience responds well to behind-the-scenes content and founder stories. Maximus is increasing this content type by 20% next week.",
    },
    messages: [
      { from: "team", text: "Welcome to Maximus! Your content profile is built and your first posts go live tomorrow morning.", ts: "2026-03-16T09:00:00Z" },
      { from: "client", text: "Looks great so far! Can you make the LinkedIn posts a bit more casual? Less 'business speak.'", ts: "2026-03-20T14:30:00Z" },
      { from: "team", text: "Absolutely — we've adjusted your LinkedIn voice profile. You'll see the shift starting Monday.", ts: "2026-03-20T15:00:00Z" },
      { from: "client", text: "The weekend posts are killing it. Our Saturday foot traffic was noticeably up.", ts: "2026-04-06T10:00:00Z" },
      { from: "team", text: "That's great to hear! We're doubling down on the Friday preview + Saturday push format.", ts: "2026-04-06T10:15:00Z" },
    ],
  },
  "guardian-firearms": {
    business: {
      name: "Guardian Firearms Training",
      industry: "Firearms Training",
      plan: "Authority",
      startDate: "2026-03-01",
      website: "guardianfirearms.com",
      connectedPlatforms: ["Facebook", "Instagram", "Google Business"],
    },
    scorecard: {
      reach: 32100,
      reachTrend: 15,
      engagementRate: 3.9,
      engagementTrend: 0.5,
      followers: 218,
      followersTrend: 12,
      postsPublished: 98,
      webTraffic: 1200,
      webTrafficTrend: 22,
      leads: 0,
      leadsTrend: 0,
      reviews: 5,
      bookings: 34,
    },
    activityFeed: [
      { platform: "Facebook", body: "Trigger discipline isn't just a rule. It's a mindset. In our Fundamentals course, we don't rush the draw...", postedAt: "2026-04-15T10:00:00Z", likes: 89, comments: 14, shares: 6 },
      { platform: "Instagram", body: "Range day with our advanced tactical class. Controlled pairs, 15 yards, under 2 seconds. These students put in the work.", postedAt: "2026-04-15T08:00:00Z", likes: 156, comments: 22, shares: 0 },
      { platform: "Google Business", body: "April class schedule is up. Fundamentals, Advanced Pistol, and our new Low-Light Scenario course. Book early — last month sold out.", postedAt: "2026-04-14T09:00:00Z", likes: 0, comments: 0, shares: 0 },
    ],
    competitorIntel: {
      competitors: [
        { name: "Precision Arms Academy", postsThisWeek: 3, engagementRate: 2.1, trend: "flat" },
        { name: "Tactical Edge Training", postsThisWeek: 1, engagementRate: 1.2, trend: "down" },
      ],
      insight: "Your competitors are posting inconsistently. You're dominating local search presence on Google Business by posting 3x more frequently. Maintaining this pace keeps you at the top of local results.",
    },
    weeklyReport: {
      summary: "Bookings up 18% from last month. Instagram is your top platform for driving class sign-ups. The low-light course posts generated the most interest.",
      topPost: { platform: "Instagram", body: "Range day with our advanced tactical class...", engagement: 178 },
      recommendation: "Safety-focused educational content is performing best. Maximus is shifting 30% of your content toward 'training tip' format.",
    },
    messages: [
      { from: "team", text: "Your profile is live. Quick note: we're staying within platform compliance guidelines on all firearm content — no issues so far.", ts: "2026-03-02T09:00:00Z" },
      { from: "client", text: "Can we push the low-light course more? We have 8 spots left to fill.", ts: "2026-04-10T11:00:00Z" },
      { from: "team", text: "Done — Maximus is running a 3-day push on Facebook and Instagram with urgency copy. Should see results by Thursday.", ts: "2026-04-10T11:20:00Z" },
    ],
  },
  "reliable-hvac": {
    business: {
      name: "Reliable Home HVAC",
      industry: "Home Services",
      plan: "Growth",
      startDate: "2026-04-01",
      website: "reliablehvac.com",
      connectedPlatforms: ["Facebook", "Google Business", "LinkedIn"],
    },
    scorecard: {
      reach: 18400,
      reachTrend: 45,
      engagementRate: 2.8,
      engagementTrend: 1.2,
      followers: 87,
      followersTrend: 87,
      postsPublished: 42,
      webTraffic: 620,
      webTrafficTrend: 0,
      leads: 12,
      leadsTrend: 0,
      reviews: 3,
    },
    activityFeed: [
      { platform: "Facebook", body: "Your AC filter is probably overdue. Most manufacturers recommend every 60-90 days, but if you have pets? Every 30.", postedAt: "2026-04-15T09:00:00Z", likes: 34, comments: 8, shares: 12 },
      { platform: "Google Business", body: "Spring AC tune-up special: $89 for a full system inspection. Booking through the end of April. Call or book online.", postedAt: "2026-04-14T10:00:00Z", likes: 0, comments: 0, shares: 0 },
      { platform: "LinkedIn", body: "We just completed a full HVAC retrofit for a 1960s ranch home. The challenge: no existing ductwork...", postedAt: "2026-04-13T08:00:00Z", likes: 45, comments: 7, shares: 3 },
    ],
    competitorIntel: {
      competitors: [
        { name: "Cool Air Inc.", postsThisWeek: 1, engagementRate: 0.8, trend: "down" },
        { name: "Smith's HVAC", postsThisWeek: 0, engagementRate: 0, trend: "down" },
        { name: "Comfort Zone Heating", postsThisWeek: 3, engagementRate: 1.5, trend: "flat" },
      ],
      insight: "Smith's HVAC hasn't posted in 3 weeks — their Google Business ranking is dropping. You're now showing above them in local results for 'HVAC near me'. Keep posting to lock in this position.",
    },
    weeklyReport: {
      summary: "First full month. 12 leads generated from social — 4 converted to booked jobs ($3,200 in revenue directly attributable to content). Your Google Business profile is climbing in local pack.",
      topPost: { platform: "Facebook", body: "Your AC filter is probably overdue...", engagement: 54 },
      recommendation: "Seasonal content is driving the most engagement. Maximus is building a summer preparation series for the next 4 weeks to capture early AC demand.",
    },
    messages: [
      { from: "team", text: "Welcome! First content goes live tomorrow. We're leading with seasonal AC tips — perfect timing for spring.", ts: "2026-04-02T09:00:00Z" },
      { from: "client", text: "We got 3 calls this week mentioning they saw us on Facebook. That's never happened before.", ts: "2026-04-12T16:00:00Z" },
      { from: "team", text: "That's exactly what we like to hear. The educational posts (filter tips, seasonal maintenance) are converting best. More of that coming.", ts: "2026-04-12T16:30:00Z" },
    ],
  },
};

export type TimelinePoint = "week1" | "month1" | "month3" | "month6";

// Time machine multipliers — simulate how metrics grow over time
export const timeMultipliers: Record<TimelinePoint, { label: string; multiplier: number; description: string }> = {
  week1: { label: "Week 1", multiplier: 0.15, description: "Just getting started — profile built, first content going out" },
  month1: { label: "Month 1", multiplier: 1.0, description: "First full month — establishing presence, initial traction" },
  month3: { label: "Month 3", multiplier: 2.8, description: "Momentum building — algorithm favor, audience growing, content refined" },
  month6: { label: "Month 6", multiplier: 5.5, description: "Established presence — compound growth, strong brand voice, consistent leads" },
};

export function getScaledScorecard(scenario: DummyScenario, timeline: TimelinePoint) {
  const m = timeMultipliers[timeline].multiplier;
  const s = scenario.scorecard;
  return {
    reach: Math.round(s.reach * m),
    reachTrend: timeline === "week1" ? 0 : s.reachTrend,
    engagementRate: Math.min(+(s.engagementRate * (0.7 + m * 0.3)).toFixed(1), 12),
    engagementTrend: timeline === "week1" ? 0 : s.engagementTrend,
    followers: Math.round(s.followers * m),
    followersTrend: timeline === "week1" ? 0 : s.followersTrend,
    postsPublished: Math.round(s.postsPublished * m),
    webTraffic: Math.round(s.webTraffic * m),
    webTrafficTrend: timeline === "week1" ? 0 : s.webTrafficTrend,
    leads: Math.round(s.leads * m),
    leadsTrend: timeline === "week1" ? 0 : s.leadsTrend,
    reviews: Math.round(s.reviews * m),
    subscribers: s.subscribers ? Math.round(s.subscribers * m) : undefined,
    views: s.views ? Math.round(s.views * m) : undefined,
    bookings: s.bookings ? Math.round(s.bookings * m) : undefined,
  };
}
