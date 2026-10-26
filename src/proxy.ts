import { NextResponse, type NextRequest } from "next/server";
import { GATE_COOKIE, GATED_PATHS, gateToken } from "@/lib/gate";

// 비밀번호 게이트: GATED_PATHS 는 쿠키(GATE_COOKIE = 비밀번호 해시)가 맞을 때만 보인다.
// 비밀번호는 Vercel 환경변수 GATE_PASSWORD. 없으면 게이트를 잠근다(아무도 못 봄).
export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (!GATED_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"))) return NextResponse.next();
  const expected = await gateToken(process.env.GATE_PASSWORD ?? "");
  if (expected && req.cookies.get(GATE_COOKIE)?.value === expected) return NextResponse.next();
  const url = req.nextUrl.clone();
  url.pathname = "/gate";
  url.search = `?next=${encodeURIComponent(pathname)}`;
  return NextResponse.redirect(url);
}

export const config = { matcher: ["/skills/installed-skills-2026-10"] };
