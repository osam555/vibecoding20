import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "구축 사례 · 영리빙 오일 사업자 홈페이지 + 24시간 챗봇 + 카드뉴스",
  description:
    "60대 오일 사업자를 위해 Next.js·Vercel·Claude Code로 만든 홈페이지, 지식 조각 76개로 답하는 챗봇, 카드뉴스 자동 생성까지. 이렇게 만들었고, 여러분도 만들 수 있습니다.",
  openGraph: {
    images: [{ url: "/cases/youngliving/og.png", width: 1200, height: 630, alt: "박도유 영리빙 오일 상담 OG 카드" }],
  },
};

const TOOLS = [
  ["Next.js", "홈페이지·API·PWA. 강의에서 쓰는 그 프레임워크 그대로."],
  ["Vercel", "배포와 도메인(youngliving.page). git push 한 번이면 반영."],
  ["Claude Code", "기획·코드·데이터 정리·검수까지. 사실상 개발팀 전체."],
  ["Aside", "사업자의 구글 문서·메일에서 자료를 읽어 오는 브라우저 경로."],
  ["HyperFrames", "카드뉴스와 쇼츠 화면을 HTML로 그려 PNG·영상으로 렌더."],
  ["Typecast", "쇼츠 내레이션 음성."],
  ["Gemini", "웹 수집 자료의 1차 요약·분류."],
] as const;

const LESSONS = [
  {
    title: "맞춤법 별칭이 검색을 살렸다",
    body:
      "시니어 고객은 '페파민트', '라벤다', '프랑킨센스'처럼 표기가 제각각입니다. 오일마다 별칭 목록을 붙이고 검색이 별칭까지 보게 하자, 검색 실패가 거의 사라졌습니다. 데이터를 더 모으는 것보다 이름을 더 많이 적는 쪽이 효과가 컸습니다.",
  },
  {
    title: "답을 자르면 번호만 남는다",
    body:
      "챗봇 답변 길이를 글자 수로 자르니 '1.' 다음이 사라져 번호만 덩그러니 남는 일이 생겼습니다. 자르기는 문장 단위로, 번호 목록은 통째로 넣거나 통째로 빼야 합니다. 카드뉴스 자동 생성에서도 똑같은 규칙을 씁니다.",
  },
  {
    title: "광고법 금칙어는 프롬프트에 나열하지 말 것",
    body:
      "'치료', '효능' 같은 금칙어를 프롬프트에 길게 나열하면 모델이 오히려 그 단어를 더 자주 떠올립니다. 대신 '라벨에 적힌 사용법만 안내한다'는 긍정 규칙 하나를 두고, 금칙어는 답변이 나온 뒤 코드로 검사합니다. 규칙은 짧게, 검사는 기계가.",
  },
];

function Figure({ src, alt, caption, width, height, className = "" }: { src: string; alt: string; caption: string; width: number; height: number; className?: string }) {
  return (
    <figure className={`overflow-hidden rounded-xl border border-line bg-card ${className}`}>
      <Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 768px) 720px, 100vw" className="h-auto w-full" />
      <figcaption className="px-4 py-3 text-sm text-muted">{caption}</figcaption>
    </figure>
  );
}

function H2({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <h2 className="mt-14 flex items-baseline gap-3 text-2xl font-black tracking-tight">
      <span className="text-base font-bold text-accent">{num}</span>
      {children}
    </h2>
  );
}

export default function YoungLivingCasePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <nav className="text-sm text-muted">
        <Link href="/cases" className="hover:text-foreground">← 구축 사례</Link>
        <span className="mx-2">·</span>
        <span>사업자 홈페이지 + 챗봇</span>
      </nav>

      <header className="mt-6 border-b border-line pb-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-accent">Case · 2026</p>
        <h1 className="text-3xl font-black leading-tight tracking-tight break-keep sm:text-4xl">
          영리빙 오일 사업자 홈페이지 + 24시간 챗봇 + SNS 카드뉴스
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted break-keep">
          60대 오일 사업자 한 분을 위해 만든 사이트 「박도유 영리빙 오일 상담」. 고객도 대부분 시니어라서 큰 글씨, 읽어주기, 전화 우선으로
          설계했습니다. 강의에서 쓰는 도구 그대로 만들었고, 여러분도 만들 수 있습니다.
        </p>
        <p className="mt-5 flex flex-wrap gap-2 text-sm">
          <a href="https://youngliving.page" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-accent px-4 py-2 font-bold text-white hover:opacity-90">
            youngliving.page 열기 ↗
          </a>
          <a href="#cta" className="rounded-lg border border-line bg-card px-4 py-2 font-bold hover:border-accent">
            같은 걸 만들고 싶다면
          </a>
        </p>
      </header>

      <div className="mt-8">
        <Figure
          src="/cases/youngliving/og.png"
          alt="박도유 영리빙 오일 상담 OG 카드. 오일마다 한 장, 물으면 바로 답."
          caption="링크를 카톡에 붙이면 보이는 OG 카드. 11번 고쳐서 v11. 사이트가 무엇인지 한 줄로 말하는 연습이었습니다."
          width={1200}
          height={630}
        />
      </div>

      <H2 num="①">요구 — 위키보다 홈페이지</H2>
      <div className="prose-lesson mt-4 space-y-4 leading-relaxed break-keep">
        <p>
          처음 제안은 개인위키였습니다. 사업자의 답은 분명했습니다. &ldquo;고객이 볼 수 있는 홈페이지가 먼저.&rdquo; 그래서 방향을 바꿨습니다.
          위키는 안쪽 정리 도구로 남기고, 바깥에는 고객이 바로 쓰는 사이트를 세웠습니다.
        </p>
        <p>조건은 세 가지였습니다.</p>
        <ul>
          <li><strong>국내 라벨 기준.</strong> 해외 자료가 아니라 국내 제품 라벨에 적힌 분류와 사용법을 기준으로 적는다.</li>
          <li><strong>효능 표현 금지.</strong> &ldquo;어디에 좋다&rdquo;가 아니라 &ldquo;라벨에는 이렇게 쓰라고 되어 있다&rdquo;만 말한다. 광고법 문제이기도 하고, 사업자 본인의 원칙이기도 했습니다.</li>
          <li><strong>시니어 우선.</strong> 글자 크기 조절, 읽어주기 버튼, 화면 어디서든 보이는 전화 버튼.</li>
        </ul>
      </div>

      <H2 num="②">만든 것</H2>
      <div className="prose-lesson mt-4 space-y-4 leading-relaxed break-keep">
        <ul>
          <li><strong>오일 백과 95종</strong> — 오일마다 한 장. 국내 분류, 라벨 사용법, 향, 주의, 사용 사례.</li>
          <li><strong>사용 사례·100문100답</strong> — 고객이 실제로 묻는 말을 그대로 제목으로.</li>
          <li><strong>검색</strong> — 이름·별칭·향·상황으로 찾기.</li>
          <li><strong>클래스 신청</strong> — 폼 하나, 사업자에게 바로 알림.</li>
          <li><strong>사장 대시보드</strong> — 질문 기록, 신청 현황, 챗봇이 못 답한 질문 목록.</li>
          <li><strong>PWA 설치</strong> — 홈 화면에 앱처럼 추가. 시니어에겐 북마크보다 이게 쉽습니다.</li>
          <li><strong>OG 카드</strong> — 카톡 공유용 미리보기.</li>
          <li><strong>카드뉴스 자동 생성(/api/card)</strong> — 오일 이름만 넣으면 피드·스토리 크기 PNG가 나옵니다.</li>
          <li><strong>쇼츠 3편</strong> — 카드 화면 + Typecast 음성으로 만든 세로 영상.</li>
        </ul>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Figure
          src="/cases/youngliving/home.png"
          alt="홈 화면의 '처음이라면 이 오일 3가지' 영역. 페퍼민트·라벤더·레몬 카드."
          caption="홈 첫 화면. 처음 온 고객에게는 95종이 아니라 3종만 먼저 보여 줍니다."
          width={760}
          height={282}
          className="sm:col-span-2"
        />
        <Figure
          src="/cases/youngliving/oil.png"
          alt="페퍼민트 오일 상세 페이지. 분류·사용·주의와 읽어주기·질문하기·인쇄용 카드 버튼."
          caption="오일 한 장. 읽어주기·질문하기·인쇄용 카드가 맨 위에. 상단에 글자 크기 작게·보통·크게."
          width={1200}
          height={675}
        />
        <Figure
          src="/cases/youngliving/card.png"
          alt="라벤더 카드뉴스. 학명, 국내 분류 식품, 라벨 사용법 두 가지."
          caption="/api/card 가 만든 카드뉴스. 효능 대신 '라벨 사용법'만. 사업자는 이 그림을 그대로 인스타에 올립니다."
          width={1080}
          height={1140}
        />
      </div>

      <H2 num="③">챗봇 — 지식 조각 76개와 규칙 세 줄</H2>
      <div className="prose-lesson mt-4 space-y-4 leading-relaxed break-keep">
        <p>
          챗봇은 거창한 모델 학습이 아닙니다. <strong>지식 조각 76개</strong>(오일·사례·문답을 짧게 쪼갠 글)를 질문과 맞춰 골라 주고, 그 조각만 보고
          답하게 합니다. 규칙은 세 줄입니다.
        </p>
        <ol>
          <li><strong>안전 먼저.</strong> 임산부·아이·반려동물·원액 사용이 나오면 주의부터 말한다.</li>
          <li><strong>라벨과 참고를 구분.</strong> 라벨에 있는 말은 &ldquo;라벨 기준&rdquo;, 그 밖의 것은 &ldquo;참고&rdquo;라고 표시한다.</li>
          <li><strong>금칙어.</strong> 치료·효능류 표현은 답변이 나온 뒤 코드가 걸러 낸다.</li>
        </ol>
        <p>
          지식은 <strong>웹 수집 → 승인 파이프라인</strong>으로 늘립니다. 스크립트가 웹에서 사례를 모아 오면, 사업자가 대시보드에서 &ldquo;권장·손질
          후·보류&rdquo;로 분류하고, 승인된 것만 챗봇 지식에 들어갑니다. 사람이 마지막 문을 지킵니다.
        </p>
      </div>

      <H2 num="④">사용한 도구</H2>
      <div className="mt-4 divide-y divide-line rounded-xl border border-line bg-card">
        {TOOLS.map(([name, desc]) => (
          <div key={name} className="grid gap-1 px-5 py-3 sm:grid-cols-[140px_1fr]">
            <span className="font-bold">{name}</span>
            <span className="text-sm leading-relaxed text-muted break-keep">{desc}</span>
          </div>
        ))}
      </div>

      <H2 num="⑤">배운 점 세 가지</H2>
      <div className="mt-4 space-y-4">
        {LESSONS.map((l, i) => (
          <div key={l.title} className="rounded-xl border border-line bg-card p-5">
            <h3 className="font-bold">
              <span className="mr-2 text-accent">{i + 1}.</span>
              {l.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted break-keep">{l.body}</p>
          </div>
        ))}
      </div>

      <H2 num="⑥">같은 걸 만들고 싶다면</H2>
      <div id="cta" className="mt-4 rounded-xl border border-accent/30 bg-accent-soft p-6 break-keep">
        <p className="leading-relaxed">
          완성본은 <a href="https://youngliving.page" target="_blank" rel="noopener noreferrer" className="font-bold text-accent underline">youngliving.page</a>에서
          직접 써 볼 수 있습니다. 내 가게, 내 강의, 내 상품으로 같은 구성을 만들고 싶다면 강좌를 따라 시작하시고, 혼자 하기 어려우면 물어보세요.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a href="https://pf.kakao.com/_sElnxl/chat" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-accent px-4 py-2 font-bold text-white hover:opacity-90">
            카카오 채널 오쌤대충영어
          </a>
          <a href="tel:0507-1334-9119" className="rounded-lg border border-line bg-card px-4 py-2 font-bold hover:border-accent">
            전화 0507-1334-9119
          </a>
          <Link href="/lectures" className="rounded-lg border border-line bg-card px-4 py-2 font-bold hover:border-accent">
            강좌 보기
          </Link>
        </div>
      </div>
    </article>
  );
}
