---
title: 내가 깔아 쓴 스킬·플러그인 목록 (2026-10-23 기준)
summary: Claude Code 에 손으로 하나씩 깐 스킬 81개·플러그인 22개 — 무엇을 하는지, 어디서 받는지 한 표로
category: 설치·설정
order: 12
minutes: 6
---

## 기준

2026-10-23 이전에 이 맥(macOS)에 깔려 있던 Claude Code **스킬 81개**와 **플러그인 22개**입니다. 10-24 에 Desktop/skills 묶음을 한꺼번에 설치(스킬 74·플러그인 303)하기 전, 손으로 하나씩 고르고 써 본 것들이라 「실제로 쓴 스킬」에 가깝습니다. 설치일은 `~/.claude/skills/<이름>/SKILL.md` 생성 시각(비공개 저장소 링크는 이름만 적음).

- 자작 스킬 원본은 `osam-skills`(비공개)·프로젝트 저장소에 있고, 이 맥은 심볼릭 링크로 씁니다. 공개로 뗀 것은 `video-style` 하나([osam555/video-style-skill](https://github.com/osam555/video-style-skill)).
- 스킬이 무엇인지는 [스킬 파일로 파이프라인 저장하기](/skills/skill-system), 영상 스킬 28개 지도는 주제 쇼츠 과정 2강.

## 스킬 81개

### 자작 (21)

| 스킬 | 설치일 | 하는 일 | 출처 |
|---|---|---|---|
| `android-cli-app` | 2026-09-29 | Android Studio 없이 CLI 툴체인(openjdk + Gradle + cmdline-tools)만으로 Kotlin/Compose 안드로이드 앱을 새… | osam-skills(비공개) |
| `foldphone` | 2026-09-29 | 사용자의 갤럭시 S26 울트라(안드로이드 폰, 원본은 폴드8 기준)를 맥에서 CLI로 다루는 단일 진입점 — 클립보드·파일·링크를 폰으로 보내고, 폰 알림·문… | osam-skills(비공개) |
| `kakao-chatbot-builder` | 2026-10-06 | 카카오톡 오픈채팅·단톡방에 지식 기반 챗봇을 만든다(공식 봇 API 없음 → 부계정 안드로이드 공기계 + 메신저봇R 알림 답장 + 클라우드 /ask API +… | osam-skills(비공개) |
| `video-content-pipeline` | 2026-10-07 | 쇼츠·강의 영상을 "소재 선정 → 자동 생성 → 유튜브 업로드 → 인스타·페북·스레드·단톡방 배포 → 장부·알림 관제"까지 무인에 가깝게 돌리는 파이프라인을 … | osam-skills(비공개) |
| `sns-personal-publish` | 2026-10-10 | 방장 개인 페이스북·인스타그램에 홍보 영상을 올린다 — 에이전트가 글·캡션·영상을 준비하고 명령 두 줄을 건네면 방장이 터미널(!)에서 실행해 게시. 페북은 … | osam-skills(비공개) |
| `approval-gate` | 2026-10-13 | 되돌리기 어려운 일(발행·배포·예약·공개 전환)을 사람 결재 흐름으로 묶는 하네스 — 잠긴 파일 차단 훅, 승인 기록+검사 통과해야 열리는 실행 게이트 훅, … | osam-skills(비공개) |
| `cardnews` | 2026-10-13 | 사업자 SNS 카드뉴스 한 편의 전 과정 — 초안 JSON → 카드 PNG 렌더 → 자동 검사·시각 검사·사람 승인 → 게시 큐 → 게시 기록. 카드뉴스를 만… | osam-skills(비공개) |
| `personal-wiki-builder` | 2026-10-13 | 개인 지식 위키(LLM Wiki)와 그 위에 얹는 자료 수집·전사·색인·관제탑 시스템을 처음부터 구축하고 운영하는 전체 절차. 사용자가 "개인 위키 만들어줘"… | osam-skills(비공개) |
| `clay-episode` | 2026-10-14 | 어떤 주제든 클레이 애니 롱폼(2~3분)+세로 쇼츠(45초)+썸네일 3종을 대본→더빙→Flow 생성→조립→QA→R2→유튜브까지 만든다. 어느 프로젝트에서든 호… | osam-skills(비공개) |
| `proverb-shorts` | 2026-10-14 | 명언·격언 읽기 쇼츠(앱 「읽기 전용」 화면을 원고에서 직접 렌더, 300 WPM·물소리) — 60과(Lv1~6×10) 생성·Aside 업로드(공개/예약)·재… | speed-listening 저장소(비공개) |
| `textbook-shorts` | 2026-10-14 | 교재 쇼츠(K-뷰티·K-여행 영어/한국어) 매일 편성 — 한 과 30문장을 5문장씩 6편으로 세로 쇼츠를 만들어 대충영어(ko-en)·알리랑 Speed Kor… | BrainHZ 저장소(비공개) |
| `video-method` | 2026-10-14 | 영상을 만들 때 「어느 스킬·어느 프로젝트로」 갈지 정하는 전역 입구 — 전체 영상 스킬 지도(BrainHZ 훅 쇼츠·책 속 한 페이지·뷰티/여행 교재 쇼츠,… | osam-skills(비공개) |
| `biz-homepage` | 2026-10-15 | 네트워크 마케팅·방문판매 사업자(영리빙, PM인터내셔널 등)용 개인 홈페이지 + 자체 챗봇을 Next.js·Vercel로 만든다 — 시니어 기준 UI, 효능·… | osam-skills(비공개) |
| `script-review` | 2026-10-16 | 영상 제목·대본을 쓰고 검토하는 공용 시스템 — core 한 문장 먼저, 후킹 제목 기준 T1~T8(구체 장면·통념 충돌·명언 비틀기), 대본 기준 S1~S8… | osam-skills(비공개) |
| `blog-video` | 2026-10-18 | 블로그 글 한 편에 붙는 영상 넷(롱폼 2 · 쇼츠 2)과 이미지를 만든다. 쇼츠·롱폼을 새로 만들거나 품질을 손볼 때, 블로그 이미지를 고를 때, 사흘 뒤 … | BrainHZ 저장소(비공개) |
| `book-youtube` | 2026-10-18 | 《대충영어》(또는 다른 책) 홍보용 시네마틱 쇼츠 — 「3부작」(이야기)과 「이론편」(책의 핵심 이론·뇌과학을 8줄 구조로) 둘 다. 상단 고정 제목 띠 + … | osam-skills(비공개) |
| `promo-video` | 2026-10-18 | 앱 스토어·유튜브 홍보 영상을 만든다 — 실기기 화면 녹화(adb/simctl), 실측 그래픽 렌더, 한국어·영어 두 언어, 자막판·내레이션판, 애플 프리뷰 … | osam-skills(비공개) |
| `shorts-latest` | 2026-10-18 | 대충영어(BrainHZ)가 만든 최신 유튜브 쇼츠 두 형식 — (1) 「책 속 한 페이지」 HyperFrames 판, (2) 훅 쇼츠 + 실습 꼬리 UI(qa… | osam-skills(비공개) |
| `video-style` | 2026-10-18 | 영상(쇼츠·롱폼·홍보·블로그·책 홍보)을 **새로 시작할 때 맨 먼저** 그림체·톤을 고르는 스킬. 이야기(core·belief·scene)에서 22가지 톤 … | [osam555/video-style-skill](https://github.com/osam555/video-style-skill) |
| `blog` | 2026-10-21 | 네이버 블로그 글 한 편의 전 과정 — 자리 고르기·글감 선택·본문·이미지·영상·초안 저장·검토·발행·사흘 뒤 판정. 블로그 글을 쓰거나 올리거나 고칠 때 *… | BrainHZ 저장소(비공개) |
| `blog-image` | 2026-10-21 | 블로그 글에 넣을 이미지를 만든다 — 공개 사진(Pexels·Openverse)과 자체 메시지 카드(Remotion) 두 갈래, 그리고 합격 검사. 이미지를 … | BrainHZ 저장소(비공개) |

### Anthropic 공식 (6)

| 스킬 | 설치일 | 하는 일 | 출처 |
|---|---|---|---|
| `docx` | 2026-06-18 | Use this skill whenever the user wants to create, read, edit, or manipulate Word documen… | [anthropics/skills](https://github.com/anthropics/skills) |
| `frontend-design` | 2026-06-18 | Guidance for distinctive, intentional visual design when building new UI or reshaping an… | [anthropics/skills](https://github.com/anthropics/skills) |
| `pdf` | 2026-06-18 | Use this skill whenever the user wants to do anything with PDF files. This includes read… | [anthropics/skills](https://github.com/anthropics/skills) |
| `pptx` | 2026-06-18 | Use this skill any time a .pptx file is involved in any way — as input, output, or both.… | [anthropics/skills](https://github.com/anthropics/skills) |
| `webapp-testing` | 2026-06-18 | Toolkit for interacting with and testing local web applications using Playwright. Suppor… | [anthropics/skills](https://github.com/anthropics/skills) |
| `xlsx` | 2026-06-18 | Use this skill any time a spreadsheet file is the primary input or output. This means an… | [anthropics/skills](https://github.com/anthropics/skills) |

### HyperFrames(영상) (13)

| 스킬 | 설치일 | 하는 일 | 출처 |
|---|---|---|---|
| `hyperframes-keyframes` | 2026-10-09 | Use when a HyperFrames composition needs a punch-in, punch-out, zoom, reframe, Ken Burns… | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) |
| `hyperframes-registry` | 2026-10-09 | Search, install, and wire registry blocks and components into HyperFrames compositions. … | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) |
| `hyperframes-audio` | 2026-10-12 | Use when audio already placed in a HyperFrames composition needs to be mixed: fade-in/fa… | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) |
| `faceless-explainer` | 2026-10-20 | Turn arbitrary text — an article, notes, a topic, a brief — into a faceless explainer vi… | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) |
| `general-video` | 2026-10-20 | Author or edit a custom HyperFrames composition when no specialized workflow fits, or wh… | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) |
| `hyperframes` | 2026-10-20 | Mandatory entry point: read this first for any request to make, create, edit, animate, o… | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) |
| `hyperframes-animation` | 2026-10-20 | All animation knowledge for HyperFrames — atomic motion rules, multi-phase scene bluepri… | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) |
| `hyperframes-cli` | 2026-10-20 | Use the HyperFrames CLI development loop: init, add, catalog, capture, lint, check, snap… | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) |
| `hyperframes-core` | 2026-10-20 | The HyperFrames composition contract — build one renderable project. Use for composition… | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) |
| `hyperframes-creative` | 2026-10-20 | Non-animation creative direction for HyperFrames videos. Use for design spec (frame.md /… | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) |
| `hyperframes-studio` | 2026-10-20 | Use when working with a person on a HyperFrames project in Studio: first, whether their … | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) |
| `media-use` | 2026-10-20 | Agent Media OS for a HyperFrames project. Resolve BGM, SFX, image, icon, brand logo, voi… | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) |
| `motion-graphics` | 2026-10-20 | Use when creating a short, design-led motion graphic where motion is the message — kinet… | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) |

### YouTube 기획(외부) (11)

| 스킬 | 설치일 | 하는 일 | 출처 |
|---|---|---|---|
| `yt-audit` | 2026-09-28 | Audit a YouTube channel end to end - packaging, consistency, the first fifteen seconds, … | [Jakeschincariol/youtube-agent-skill](https://github.com/Jakeschincariol/youtube-agent-skill) |
| `yt-chapters` | 2026-09-28 | Write YouTube chapters from a transcript, validated against YouTube's own rules so they … | [Jakeschincariol/youtube-agent-skill](https://github.com/Jakeschincariol/youtube-agent-skill) |
| `yt-comment` | 2026-09-28 | Draft replies to YouTube comments in the creator's voice, triaged by which ones are wort… | [Jakeschincariol/youtube-agent-skill](https://github.com/Jakeschincariol/youtube-agent-skill) |
| `yt-edit` | 2026-09-28 | Turn a raw recording's transcript into an edit decision list - dead air, filler cues and… | [Jakeschincariol/youtube-agent-skill](https://github.com/Jakeschincariol/youtube-agent-skill) |
| `yt-package` | 2026-09-28 | Write and lint the title and thumbnail for a YouTube video as one pairing, checking trun… | [Jakeschincariol/youtube-agent-skill](https://github.com/Jakeschincariol/youtube-agent-skill) |
| `yt-plan` | 2026-09-28 | Plan a week or a month of YouTube uploads - what to post, when, and in what order, sized… | [Jakeschincariol/youtube-agent-skill](https://github.com/Jakeschincariol/youtube-agent-skill) |
| `yt-retention` | 2026-09-28 | Read a YouTube Studio audience-retention export and find where viewers actually leave, t… | [Jakeschincariol/youtube-agent-skill](https://github.com/Jakeschincariol/youtube-agent-skill) |
| `yt-script` | 2026-09-28 | Write a YouTube video script from a raw idea - hook options off 21 formulas, scored, the… | [Jakeschincariol/youtube-agent-skill](https://github.com/Jakeschincariol/youtube-agent-skill) |
| `yt-seo` | 2026-09-28 | Write the description, tags and search-facing text for a YouTube video, aimed at the que… | [Jakeschincariol/youtube-agent-skill](https://github.com/Jakeschincariol/youtube-agent-skill) |
| `yt-shorts` | 2026-09-28 | Find the Shorts hiding inside a long video and write them, using the transcript to pick … | [Jakeschincariol/youtube-agent-skill](https://github.com/Jakeschincariol/youtube-agent-skill) |
| `yt-viral` | 2026-09-28 | Find what is actually working in the user's niche on YouTube and rank it by how far each… | [Jakeschincariol/youtube-agent-skill](https://github.com/Jakeschincariol/youtube-agent-skill) |

### SNS 게시(Publora) (9)

| 스킬 | 설치일 | 하는 일 | 출처 |
|---|---|---|---|
| `bluesky-post` | 2026-10-18 | Use when the user wants to post or schedule to Bluesky through Publora. Handles the 300-… | [publora.com](https://publora.com) |
| `instagram-post` | 2026-10-18 | Use when the user wants to post or schedule to Instagram through Publora: a single image… | [publora.com](https://publora.com) |
| `linkedin-analytics` | 2026-10-18 | Analyze LinkedIn performance and manage engagement through Publora. Use when the user as… | [publora.com](https://publora.com) |
| `linkedin-post` | 2026-10-18 | Use when the user wants to publish or schedule a LinkedIn post through Publora: text, a … | [publora.com](https://publora.com) |
| `social-post` | 2026-10-18 | Use when the user wants to post or schedule to YouTube, a Facebook Page or Mastodon thro… | [publora.com](https://publora.com) |
| `telegram-post` | 2026-10-18 | Use when the user wants to post or schedule to a Telegram channel or group through Publo… | [publora.com](https://publora.com) |
| `threads-post` | 2026-10-18 | Create and schedule Threads posts, multi-part chains, image carousels and reply control … | [publora.com](https://publora.com) |
| `tiktok-post` | 2026-10-18 | Use when the user wants to upload or schedule a TikTok video through Publora, with priva… | [publora.com](https://publora.com) |
| `x-post` | 2026-10-18 | Use when the user wants to post or schedule to X (Twitter) through Publora, including th… | [publora.com](https://publora.com) |

### Cloudflare (11)

| 스킬 | 설치일 | 하는 일 | 출처 |
|---|---|---|---|
| `agents-sdk` | 2026-07-14 | Build AI agents on Cloudflare Workers using the Agents SDK. Load when creating stateful … | [cloudflare/skills](https://github.com/cloudflare/skills) |
| `cloudflare` | 2026-07-14 | Comprehensive Cloudflare platform skill covering Workers, Pages, storage (KV, D1, R2), A… | [cloudflare/skills](https://github.com/cloudflare/skills) |
| `cloudflare-email-service` | 2026-07-14 | Send and receive transactional emails with Cloudflare Email Service (Email Sending + Ema… | [cloudflare/skills](https://github.com/cloudflare/skills) |
| `cloudflare-one` | 2026-07-14 | Guides Cloudflare One Zero Trust and SASE work across Access, Gateway, WARP, Tunnel, Clo… | [cloudflare/skills](https://github.com/cloudflare/skills) |
| `cloudflare-one-migrations` | 2026-07-14 | Plans migrations from Zscaler ZIA/ZPA, Palo Alto, legacy VPN, SWG, or SASE stacks to Clo… | [cloudflare/skills](https://github.com/cloudflare/skills) |
| `durable-objects` | 2026-07-14 | Create and review Cloudflare Durable Objects. Use when building stateful coordination (c… | [cloudflare/skills](https://github.com/cloudflare/skills) |
| `sandbox-sdk` | 2026-07-14 | Build sandboxed applications for secure code execution. Load when building AI code execu… | [cloudflare/skills](https://github.com/cloudflare/skills) |
| `turnstile-spin` | 2026-07-14 | Set up Cloudflare Turnstile end-to-end in a project. Scan the codebase, create the widge… | [cloudflare/skills](https://github.com/cloudflare/skills) |
| `web-perf` | 2026-07-14 | Analyzes web performance using Chrome DevTools MCP. Measures Core Web Vitals (LCP, INP, … | [cloudflare/skills](https://github.com/cloudflare/skills) |
| `workers-best-practices` | 2026-07-14 | Reviews and authors Cloudflare Workers code against production best practices. Load when… | [cloudflare/skills](https://github.com/cloudflare/skills) |
| `wrangler` | 2026-07-14 | Cloudflare Workers CLI for deploying, developing, and managing Workers, KV, R2, D1, Vect… | [cloudflare/skills](https://github.com/cloudflare/skills) |

### 기타 (10)

| 스킬 | 설치일 | 하는 일 | 출처 |
|---|---|---|---|
| `codebase-memory` | 2026-07-04 | Use the codebase knowledge graph for structural code queries. Triggers on: explore the c… | codebase-memory-mcp |
| `composio-cli` | 2026-08-10 | Help users operate the published Composio CLI to find the right tool, connect accounts, … | [composio.dev](https://composio.dev) |
| `aside-browser` | 2026-09-08 | Read when you need a browser, or have to work across user's logged-in websites (e.g. Gma… | [aside.com](https://aside.com) |
| `video-use` | 2026-09-23 | Edit any video by conversation. Transcribe, cut, color grade, generate overlay animation… | ~/Developer/video-use |
| `find-skills` | 2026-09-28 | Helps users discover and install agent skills when they ask questions like "how do I do … | [skills.sh](https://skills.sh) |
| `import-to-claude-code` | 2026-10-01 | Finish importing leftover config that `claude import` couldn't map automatically. | Claude Code 내장 |
| `youtube-thumbnail` | 2026-10-12 | Generate a branded YouTube thumbnail from a video title. Uses a reference photo of the c… | ~/.agents/skills |
| `shorts-generator` | 2026-10-14 | 자영업자·판매자(예: 영리빙 오일, PM-International 피트라인)를 위한 홍보 쇼츠 자동 제작 — 판매자 프로필을 만들고, 주제를 고르고, 공식 자… | shorts-generator 키트(비공개) |
| `notebook-research-builder` | 2026-10-18 | NotebookLM(Gemini Notebook) 노트북을 단일 지식 원천으로 삼아 2차 산출물을 만드는 범용 스킬 — 목표·키워드·관련 문서를 받아 기간·주… | NotebookLM MCP |
| `trend-longform` | 2026-10-21 | 「반응 좋은 주제를 찾아 합법 소재로 롱폼 유튜브 영상을 처음부터 끝까지 만드는」 파이프라인(scripts/lf_pipeline.py). CC 라이선스 영상 … | osamwiki scripts/lf_pipeline.py(비공개) |

## 플러그인 22개

`/plugin marketplace add <저장소>` 뒤 `/plugin install <이름>@<마켓>` 으로 설치한 것. 한 플러그인이 스킬·에이전트·훅을 여러 개 품습니다.

| 플러그인 | 마켓플레이스 | 설치일 | 버전 | 저장소 |
|---|---|---|---|---|
| `ui-ux-pro-max` | ui-ux-pro-max-skill | 2026-06-18 | 2.5.0 | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) |
| `vercel` | claude-plugins-official | 2026-06-18 | 0.50.0 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) |
| `c-level-skills` | claude-code-skills | 2026-07-09 | 2.9.0 | [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) |
| `compliance-os` | claude-code-skills | 2026-07-09 | 2.9.0 | [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) |
| `deep-research` | claude-code-skills | 2026-07-09 | 2.10.3 | [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) |
| `demo-video` | claude-code-skills | 2026-07-09 | 2.9.0 | [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) |
| `dossier` | claude-code-skills | 2026-07-09 | 2.9.0 | [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) |
| `engineering-skills` | claude-code-skills | 2026-07-09 | 2.9.0 | [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) |
| `grants` | claude-code-skills | 2026-07-09 | 2.9.0 | [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) |
| `litreview` | claude-code-skills | 2026-07-09 | 2.9.0 | [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) |
| `marketing-skills` | claude-code-skills | 2026-07-09 | 2.9.0 | [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) |
| `notebooklm` | claude-code-skills | 2026-07-09 | 2.9.0 | [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) |
| `patent` | claude-code-skills | 2026-07-09 | 2.9.0 | [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) |
| `product-skills` | claude-code-skills | 2026-07-09 | 2.11.1 | [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) |
| `pulse` | claude-code-skills | 2026-07-09 | 2.9.0 | [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) |
| `research-orchestrator` | claude-code-skills | 2026-07-09 | 2.9.0 | [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) |
| `syllabus` | claude-code-skills | 2026-07-09 | 2.9.0 | [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) |
| `video-content-strategist` | claude-code-skills | 2026-07-09 | 2.9.0 | [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) |
| `claude-code-setup` | claude-plugins-official | 2026-08-20 | 1.0.0 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) |
| `claude-mem` | thedotmack | 2026-08-20 | 15.2.1 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) |
| `notebooklm` | roomi-fields | 2026-08-31 | 3.1.2 | [roomi-fields/claude-plugins](https://github.com/roomi-fields/claude-plugins) |
| `typesafe` | typesafe-ai | 2026-09-26 | 0.5.7 | [typesafe-ai/skills](https://github.com/typesafe-ai/skills) |

## 뒤에 더 깐 것

2026-10-24 Desktop/skills 묶음 설치로 스킬 166·플러그인 325 가 됐습니다. 그 목록은 수가 많아 따로 정리합니다.
