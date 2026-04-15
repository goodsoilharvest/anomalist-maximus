// Dashboard adapts based on business niche — onboarding determines which
// metrics, features, and benchmarks are most relevant to each client.

export type NicheKey =
  | "restaurant"
  | "fitness"
  | "home_services"
  | "insurance"
  | "real_estate"
  | "firearms"
  | "content_creator"
  | "healthcare"
  | "legal"
  | "automotive"
  | "retail"
  | "default";

export interface NicheConfig {
  label: string;
  primaryGoal: string;
  metrics: MetricConfig[];
  platforms: string[];
  features: FeatureFlag[];
  benchmarks: { engagementRate: number; postFrequency: number };
}

export interface MetricConfig {
  key: string;
  label: string;
  icon: string;
  format: "number" | "percent" | "currency" | "time";
  description: string;
}

export type FeatureFlag =
  | "foot_traffic"
  | "reservations"
  | "leads"
  | "quote_requests"
  | "subscriber_growth"
  | "view_counts"
  | "listener_stats"
  | "review_monitoring"
  | "local_seo"
  | "class_bookings"
  | "membership_signups"
  | "appointment_booking"
  | "website_traffic"
  | "competitor_intel"
  | "content_feed"
  | "reports"
  | "support_chat";

const baseMetrics: MetricConfig[] = [
  { key: "reach", label: "Total Reach", icon: "👁", format: "number", description: "How many people saw your content" },
  { key: "engagement", label: "Engagement Rate", icon: "💬", format: "percent", description: "Likes, comments, shares as % of reach" },
  { key: "followers", label: "Follower Growth", icon: "📈", format: "number", description: "Net new followers this month" },
  { key: "posts", label: "Content Published", icon: "📝", format: "number", description: "Posts across all platforms this month" },
];

const websiteTraffic: MetricConfig = { key: "web_traffic", label: "Website Traffic from Social", icon: "🌐", format: "number", description: "Clicks to your website from social posts" };
const leads: MetricConfig = { key: "leads", label: "Leads Generated", icon: "📞", format: "number", description: "Contact form fills, calls, quote requests from social" };
const reviews: MetricConfig = { key: "reviews", label: "New Reviews", icon: "⭐", format: "number", description: "Reviews received across Google & social" };
const subscribers: MetricConfig = { key: "subscribers", label: "Subscriber Growth", icon: "🔔", format: "number", description: "New subscribers/followers gained" };
const views: MetricConfig = { key: "views", label: "Total Views", icon: "▶️", format: "number", description: "Views across all content" };
const bookings: MetricConfig = { key: "bookings", label: "Bookings / Sign-ups", icon: "📅", format: "number", description: "New bookings or membership sign-ups" };

export const nicheConfigs: Record<NicheKey, NicheConfig> = {
  restaurant: {
    label: "Restaurant & Food",
    primaryGoal: "Drive foot traffic and reservations",
    metrics: [...baseMetrics, websiteTraffic, reviews],
    platforms: ["FACEBOOK", "INSTAGRAM", "GOOGLE_BUSINESS"],
    features: ["foot_traffic", "reservations", "review_monitoring", "local_seo", "competitor_intel", "content_feed", "reports", "support_chat"],
    benchmarks: { engagementRate: 3.5, postFrequency: 14 },
  },
  fitness: {
    label: "Fitness & Gyms",
    primaryGoal: "Fill classes and drive memberships",
    metrics: [...baseMetrics, bookings, websiteTraffic],
    platforms: ["FACEBOOK", "INSTAGRAM", "GOOGLE_BUSINESS"],
    features: ["class_bookings", "membership_signups", "review_monitoring", "competitor_intel", "content_feed", "reports", "support_chat"],
    benchmarks: { engagementRate: 4.0, postFrequency: 14 },
  },
  home_services: {
    label: "Home Services",
    primaryGoal: "Generate leads and quote requests",
    metrics: [...baseMetrics, leads, reviews, websiteTraffic],
    platforms: ["FACEBOOK", "GOOGLE_BUSINESS", "LINKEDIN"],
    features: ["leads", "quote_requests", "review_monitoring", "local_seo", "competitor_intel", "content_feed", "reports", "support_chat"],
    benchmarks: { engagementRate: 2.5, postFrequency: 10 },
  },
  insurance: {
    label: "Insurance Agency",
    primaryGoal: "Build trust and generate qualified leads",
    metrics: [...baseMetrics, leads, websiteTraffic, reviews],
    platforms: ["FACEBOOK", "LINKEDIN", "GOOGLE_BUSINESS"],
    features: ["leads", "review_monitoring", "local_seo", "competitor_intel", "content_feed", "reports", "support_chat"],
    benchmarks: { engagementRate: 2.0, postFrequency: 10 },
  },
  real_estate: {
    label: "Real Estate",
    primaryGoal: "Position as the local expert and generate listings",
    metrics: [...baseMetrics, leads, websiteTraffic],
    platforms: ["FACEBOOK", "INSTAGRAM", "LINKEDIN", "GOOGLE_BUSINESS"],
    features: ["leads", "local_seo", "competitor_intel", "content_feed", "reports", "support_chat", "website_traffic"],
    benchmarks: { engagementRate: 3.0, postFrequency: 14 },
  },
  firearms: {
    label: "Firearms Training",
    primaryGoal: "Build authority and fill training classes",
    metrics: [...baseMetrics, bookings, websiteTraffic],
    platforms: ["FACEBOOK", "INSTAGRAM", "GOOGLE_BUSINESS"],
    features: ["class_bookings", "review_monitoring", "competitor_intel", "content_feed", "reports", "support_chat"],
    benchmarks: { engagementRate: 3.5, postFrequency: 10 },
  },
  content_creator: {
    label: "Podcast / Content Creator",
    primaryGoal: "Grow audience and increase engagement",
    metrics: [...baseMetrics, subscribers, views, websiteTraffic],
    platforms: ["INSTAGRAM", "LINKEDIN", "FACEBOOK"],
    features: ["subscriber_growth", "view_counts", "listener_stats", "competitor_intel", "content_feed", "reports", "support_chat"],
    benchmarks: { engagementRate: 5.0, postFrequency: 21 },
  },
  healthcare: {
    label: "Healthcare",
    primaryGoal: "Build patient trust and drive appointments",
    metrics: [...baseMetrics, leads, reviews],
    platforms: ["FACEBOOK", "GOOGLE_BUSINESS", "LINKEDIN"],
    features: ["appointment_booking", "review_monitoring", "local_seo", "competitor_intel", "content_feed", "reports", "support_chat"],
    benchmarks: { engagementRate: 2.0, postFrequency: 10 },
  },
  legal: {
    label: "Legal",
    primaryGoal: "Establish authority and generate consultations",
    metrics: [...baseMetrics, leads, websiteTraffic],
    platforms: ["FACEBOOK", "LINKEDIN", "GOOGLE_BUSINESS"],
    features: ["leads", "review_monitoring", "competitor_intel", "content_feed", "reports", "support_chat"],
    benchmarks: { engagementRate: 1.8, postFrequency: 10 },
  },
  automotive: {
    label: "Automotive",
    primaryGoal: "Drive service appointments and build local presence",
    metrics: [...baseMetrics, leads, reviews, websiteTraffic],
    platforms: ["FACEBOOK", "INSTAGRAM", "GOOGLE_BUSINESS"],
    features: ["leads", "review_monitoring", "local_seo", "competitor_intel", "content_feed", "reports", "support_chat"],
    benchmarks: { engagementRate: 2.5, postFrequency: 12 },
  },
  retail: {
    label: "Retail",
    primaryGoal: "Drive foot traffic and online sales",
    metrics: [...baseMetrics, websiteTraffic, reviews],
    platforms: ["FACEBOOK", "INSTAGRAM", "GOOGLE_BUSINESS"],
    features: ["foot_traffic", "review_monitoring", "local_seo", "competitor_intel", "content_feed", "reports", "support_chat"],
    benchmarks: { engagementRate: 3.0, postFrequency: 14 },
  },
  default: {
    label: "Business",
    primaryGoal: "Grow your online presence and engagement",
    metrics: [...baseMetrics, websiteTraffic, leads],
    platforms: ["FACEBOOK", "INSTAGRAM", "LINKEDIN", "GOOGLE_BUSINESS"],
    features: ["website_traffic", "competitor_intel", "content_feed", "reports", "support_chat"],
    benchmarks: { engagementRate: 3.0, postFrequency: 12 },
  },
};

export function getNicheConfig(industry: string): NicheConfig {
  const map: Record<string, NicheKey> = {
    "Restaurant & Food": "restaurant",
    "Fitness & Gyms": "fitness",
    "Home Services": "home_services",
    "Insurance": "insurance",
    "Real Estate": "real_estate",
    "Firearms Training": "firearms",
    "Podcast": "content_creator",
    "Content Creator": "content_creator",
    "Healthcare": "healthcare",
    "Legal": "legal",
    "Automotive": "automotive",
    "Retail": "retail",
    "Construction": "home_services",
    "Beauty & Wellness": "fitness",
  };
  return nicheConfigs[map[industry] ?? "default"];
}
