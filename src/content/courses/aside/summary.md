---
title: Aside 업무 자동화 — 전체 요약
updated: '2026-10-16'
---

## 사례로 찾기 (2026-10-16 추가)

하고 싶은 일부터 고르세요. 같은 일을 실제로 운영 중인 사례와 해당 강의로 바로 갑니다.

| 하고 싶은 일 | 실제 사례 | 방식 | 강의 |
|---|---|---|---|
| AI 영상 생성 사이트에 프롬프트 넣고 결과 받기 | 클레이 애니 채널 장면 영상 | repl | [16강](/lectures/aside/lesson-16) |
| 이미지 → 영상 일괄 생성 | 강의·책 홍보 쇼츠 | exec | [16강](/lectures/aside/lesson-16) |
| 유튜브 업로드·고정 댓글 | 매일 아침 쇼츠 업로드, 예약 영상 고정 댓글 | repl / exec | [16강](/lectures/aside/lesson-16) · [11강](/lectures/aside/lesson-11) |
| 개인 SNS에 매일 초안 | 개인 페이스북 하루 두 번 | repl | [17강](/lectures/aside/lesson-17) · [7강](/lectures/aside/lesson-07) |
| 블로그 임시저장 | 네이버 블로그 | repl / exec | [17강](/lectures/aside/lesson-17) · [9강](/lectures/aside/lesson-09) |
| 메일·문서 매일 수집 | Gmail·구글 문서 → 개인 위키 | repl | [18강](/lectures/aside/lesson-18) |
| 로그인 필요한 사이트 목록 모으기 | 학습 사이트 영상 목록 | repl | [18강](/lectures/aside/lesson-18) |
| 사내 표·ERP 데이터 꺼내기 | 예산표 27장, 인건비, 프린터 95대 | 에이전트 | [19강](/lectures/aside/lesson-19) |
| 고객 답장 초안·추적 | 임대 문의, 해외 매장 재고 문의 | 스킬·에이전트 | [19강](/lectures/aside/lesson-19) |
| 다른 에이전트·스케줄러와 연결 | 루틴 한도 아끼기, Hermes 연동 | CLI | [19강](/lectures/aside/lesson-19) |
| 검색 등록·속도 점검 | 서치 콘솔, Core Web Vitals | 앱 브라우저 | [5강](/lectures/aside/lesson-05) · [6강](/lectures/aside/lesson-06) |

> **두 가지 브라우저** 1~14강은 Claude 데스크톱 앱 안의 브라우저와 Computer Use로 **지켜보며** 하는 자동화입니다. 15~19강은 별도 앱인 **Aside AI 브라우저**를 명령줄(`aside repl`·`aside exec`)로 불러 **매일 혼자 도는 업무**로 만든 실전 사례입니다. 처음이면 1강부터, 이미 Aside를 쓰고 있다면 15강부터 보세요.

## 이 과정에서 만드는 것

Claude Code 앱의 **Aside 브라우저**와 연결 도구(MCP)로, 내 가게·블로그·채널의 반복 웹 작업을 자동화하는 **콘텐츠 운영 체계**를 만듭니다. 검색 노출(SEO) 설정, SNS·블로그·유튜브 글 준비와 예약, 영상 만들기까지를 한 흐름으로 묶고, 마지막에는 스킬(SKILL.md) 파일로 저장해 한 줄로 부릅니다. **로그인과 최종 발행·예약 확정은 항상 사람이** 합니다.

## 전체 흐름

1부 · Aside 도구 기초
1. [1강](/lectures/aside/lesson-01) — Aside 브라우저를 열고 화면을 보여 주며 질문하기
2. [2강](/lectures/aside/lesson-02) — Computer Use로 Claude가 직접 클릭·입력하게 하기
3. [3강](/lectures/aside/lesson-03) — MCP(웹 검색 등)를 연결해 Claude의 능력 넓히기
4. [4강](/lectures/aside/lesson-04) — Chrome 확장 사이드 패널로 낯선 설정 화면 안내받기

2부 · SEO 자동화
5. [5강](/lectures/aside/lesson-05) — 서치 콘솔 등록, sitemap 제출, JSON-LD, 키워드 반영
6. [6강](/lectures/aside/lesson-06) — 속도 점수(Core Web Vitals) 측정·개선과 네이버 검색 최적화

3부 · SNS 자동 배포
7. [7강](/lectures/aside/lesson-07) — 글 하나를 채널별 형식으로 바꿔 올리기
8. [8강](/lectures/aside/lesson-08) — 성과 분석, 규칙 파일, 한 달 콘텐츠 캘린더

4부 · 블로그 자동화
9. [9강](/lectures/aside/lesson-09) — 키워드 → 리서치 → 초안 → 네이버 에디터 임시저장
10. [10강](/lectures/aside/lesson-10) — 티스토리 포스팅과 블로그·SNS 통합 파이프라인

5부 · 영상 자동화
11. [11강](/lectures/aside/lesson-11) — 유튜브 키워드·제목·썸네일, YouTube Studio 업로드
12. [12강](/lectures/aside/lesson-12) — 대본부터 쇼츠까지 영상 파이프라인
13. [13강](/lectures/aside/lesson-13) — 반복 작업을 스킬 파일로 저장해 한 줄 호출
14. [14강](/lectures/aside/lesson-14) — HyperFrames(·Remotion)로 코드 영상 만들기

6부 · 실전 사례 — Aside 업무 자동화
15. [15강](/lectures/aside/lesson-15) — Aside CLI 기초: repl과 exec, 공통 함정 다섯 가지
16. [16강](/lectures/aside/lesson-16) — 사례 ① 영상: AI 영상 생성, 유튜브 업로드·고정 댓글
17. [17강](/lectures/aside/lesson-17) — 사례 ② 블로그·SNS 발행: 초안까지 자동, 발행은 사람이
18. [18강](/lectures/aside/lesson-18) — 사례 ③ 수집·관리: 메일·문서·학습 사이트·콘솔
19. [19강](/lectures/aside/lesson-19) — 사례 ④ 외부 사례: 지피터스 스터디 사례글 30편 등 업무별 지도

## 실습 결과물

- Aside 브라우저로 직접 열어 본 사이트와, Claude가 클릭하는 것을 눈으로 확인한 경험
- MCP 탭에서 `연결됨`으로 보이는 웹 검색 도구
- 서치 콘솔에 제출한 sitemap, `index.html`의 JSON-LD, 전·후 속도 점수 비교
- `sns-rules.md` 규칙 파일과 1주~한 달 콘텐츠 캘린더
- 네이버 에디터에 **임시저장**된 블로그 글과 `blog-drafts/` 초안
- 유튜브 제목 3안·설명·썸네일, 비공개로 올려 본 영상(영상이 있다면)
- `.agents/skills/` 안의 스킬 파일, `videos/*.mp4` 영상

## 준비물

- Claude 데스크탑 앱(Code 탭)과 작업 폴더. 터미널은 보조일 뿐 필요하지 않습니다
- 내 사이트 또는 가게 정보(주소·영업시간·사진), 이미 쓰는 SNS·블로그·유튜브 계정 중 한두 개
- 구글·네이버 계정(로그인은 내가 직접), Brave Search 무료 API 키
- 영상 단계(11~14강)는 영상 파일이 없어도 글·썸네일·대본까지는 진행 가능

## 끝나면 할 수 있는 것

- Aside 브라우저와 Claude로 복잡한 웹 설정을 안내받거나 맡길 수 있다
- 내 사이트를 검색에 등록하고, 속도·구조화 데이터를 점검할 수 있다
- 글 하나를 여러 채널 형식으로 만들고, 예약까지 준비할 수 있다
- 블로그 초안을 만들어 에디터에 임시저장하고, **내가 읽은 뒤 직접 발행**할 수 있다
- 자주 하는 작업을 스킬로 저장해 "이 스킬 써줘" 한 줄로 실행할 수 있다
