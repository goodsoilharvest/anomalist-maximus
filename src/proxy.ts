import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isLoggedIn = !!req.auth;

  // Protect dashboard and admin — redirect to login if not authenticated
  if (pathname.startsWith("/dashboard") || pathname.startsWith("/admin") || pathname.startsWith("/onboarding")) {
    if (!isLoggedIn) {
      const loginUrl = new URL("/login", req.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Admin-only routes
  if (pathname.startsWith("/admin")) {
    const role = (req.auth?.user as unknown as { role?: string })?.role;
    if (role !== "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*", "/onboarding/:path*"],
};
