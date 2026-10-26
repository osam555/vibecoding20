// 비밀번호 게이트 공용값. 경로를 추가하면 src/proxy.ts 의 matcher 에도 같이 넣는다.
export const GATE_COOKIE = "vc_gate";
export const GATED_PATHS = ["/skills/installed-skills-2026-10"];

// 비밀번호 → 쿠키 토큰(SHA-256 hex). Edge·Node 둘 다 Web Crypto 로.
export async function gateToken(password: string): Promise<string> {
  if (!password) return "";
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("vc-gate:" + password));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}
