import { NextResponse, type NextRequest } from "next/server";
import { GATE_COOKIE, GATED_PATHS, gateToken } from "@/lib/gate";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const password = String(form.get("password") ?? "");
  const next = String(form.get("next") ?? GATED_PATHS[0]);
  const safeNext = GATED_PATHS.some((p) => next === p || next.startsWith(p + "/")) ? next : GATED_PATHS[0];
  const expected = await gateToken(process.env.GATE_PASSWORD ?? "");
  const given = await gateToken(password);
  const url = req.nextUrl.clone();
  url.search = "";
  if (!expected || given !== expected) {
    url.pathname = "/gate";
    url.search = `?next=${encodeURIComponent(safeNext)}&bad=1`;
    return NextResponse.redirect(url, 303);
  }
  url.pathname = safeNext;
  const res = NextResponse.redirect(url, 303);
  res.cookies.set(GATE_COOKIE, expected, { httpOnly: true, sameSite: "lax", secure: true, path: "/", maxAge: 60 * 60 * 24 * 30 });
  return res;
}
