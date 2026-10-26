import type { Metadata } from "next";
import { GATED_PATHS } from "@/lib/gate";

export const metadata: Metadata = { title: "비밀번호 입력", robots: { index: false, follow: false } };

export default async function GatePage({ searchParams }: { searchParams: Promise<{ next?: string; bad?: string }> }) {
  const { next, bad } = await searchParams;
  const target = next && GATED_PATHS.some((p) => next === p || next.startsWith(p + "/")) ? next : GATED_PATHS[0];
  return (
    <div className="mx-auto max-w-md px-4 py-20">
      <h1 className="text-2xl font-black tracking-tight">비밀번호가 필요한 페이지</h1>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        이 페이지는 수강생·초대받은 분께만 열려 있습니다. 안내받은 비밀번호를 입력하세요.
      </p>
      <form method="post" action="/api/gate" className="mt-8 space-y-4">
        <input type="hidden" name="next" value={target} />
        <input
          type="password"
          name="password"
          autoFocus
          autoComplete="current-password"
          placeholder="비밀번호"
          className="w-full rounded-lg border border-line bg-card px-4 py-3 text-base outline-none focus:border-accent"
        />
        {bad && <p className="text-sm text-red-600">비밀번호가 맞지 않습니다.</p>}
        <button type="submit" className="w-full rounded-lg bg-accent px-4 py-3 font-bold text-white hover:opacity-90">
          열기
        </button>
      </form>
    </div>
  );
}
