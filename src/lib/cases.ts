export type CaseItem = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  cover: string;
  stack: string[];
};

export const CASES: CaseItem[] = [
  {
    slug: "youngliving",
    title: "영리빙 오일 사업자 홈페이지 + 24시간 챗봇 + SNS 카드뉴스",
    client: "시니어 오일 사업자 · youngliving.page",
    summary:
      "오일 백과 95종, 사용 사례, 100문100답에 24시간 챗봇과 카드뉴스 자동 생성까지. 60대 사업자와 시니어 고객을 위해 큰 글씨·읽어주기·전화 우선으로 설계했습니다.",
    cover: "/cases/youngliving/og.png",
    stack: ["Next.js", "Vercel", "Claude Code", "Aside", "HyperFrames", "Typecast"],
  },
];
