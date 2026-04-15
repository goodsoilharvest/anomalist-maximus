import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

// Registration is admin-controlled — disabled for public signups
const REGISTRATION_OPEN = process.env.REGISTRATION_OPEN === "true";

export async function POST(req: NextRequest) {
  if (!REGISTRATION_OPEN) {
    return NextResponse.json({ error: "Registration is currently by invite only." }, { status: 403 });
  }

  const { name, email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password required" }, { status: 400 });
  }

  const emailLower = email.trim().toLowerCase();

  const existing = await prisma.user.findUnique({ where: { email: emailLower } });
  if (existing) {
    return NextResponse.json({ error: "Account already exists" }, { status: 409 });
  }

  const passwordHash = await bcrypt.hash(password, 13);

  await prisma.user.create({
    data: {
      email: emailLower,
      name: name || null,
      passwordHash,
      role: "CLIENT",
      emailVerified: true,
    },
  });

  return NextResponse.json({ ok: true });
}
