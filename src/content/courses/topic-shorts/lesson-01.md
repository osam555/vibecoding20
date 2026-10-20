---
number: 1
title: 큰 그림 — 주제 하나가 쇼츠가 되기까지
subtitle: 주제 → 톤 → 방식 → 대본·음성 → 그림 → 조립 → 검수 → 업로드
goal: 쇼츠를 만드는 여덟 단계를 알고, 사람이 결정하는 네 지점과 AI 가 실행하는 나머지를 구분합니다.
minutes: 30
part: 1부 · 준비와 톤 고르기
---


## 쇼츠를 만들다 막히는 곳은 늘 같아요

주제는 있는데 「어떤 그림체로 갈지」를 정하지 않은 채 이미지 프롬프트부터 쓰면, 컷마다 화풍이 흔들려 「AI 티」가 나요. 편집 프로그램을 열면 손이 많이 가고, 다음 편에서 같은 품질을 다시 내기 어려워요.

이 과정은 순서를 고정해서 그 문제를 없애요.

| 단계 | 하는 일 | 누가 |
|---|---|---|
| 1 주제 | 주제를 이야기 세 칸(core·belief·scene)으로 바꾼다 | 사람 |
| 2 톤 | 22가지 톤에서 후보 둘을 받고 하나를 고른다 | AI 제안 → **사람 확정** |
| 3 방식 | 코드로 그릴지, 정지 그림+코드 움직임인지, 클립 생성인지 | AI 제안 → 사람 확정 |
| 4 대본·음성 | 대본 10줄과 더빙. 그림만 바뀌면 음원은 재사용 | AI |
| 5 그림·클립 | 줄마다 장면 표 → 톤 문구 고정 생성 | AI → **사람 판정** |
| 6 조립 | 컷 데이터 → 렌더. 핵심어는 말하는 순간 그려진다 | AI |
| 7 검수 | 두 겹 게이트 + 프레임 자체 리뷰 | AI → **사람 판정** |
| 8 업로드 | 제목·썸네일·설명, 승인 뒤 업로드 | **사람 승인** |

사람이 하는 일은 굵게 표시한 네 가지뿐이에요. 나머지는 클로드 코드와 스킬이 해요.

## 이 과정의 사례

알리랑 채널의 「알리랑이 무엇인가 — 아리랑에 숨은 뜻」을 수묵 톤으로 다시 만든 과정을 그대로 따라가요. 기존 롱폼(2분 56초, 나레이션 36줄)의 화면만 바꾸고, 같은 재료로 세로 쇼츠 3편(43·49·44초)을 잘라 두 채널에 올렸어요. 모든 명령과 숫자는 실제로 돌린 것만 적었어요.

<div style="position:relative;padding-top:56.25%;margin:1rem 0"><iframe src="https://www.youtube.com/embed/-oPT-wjEeVs" title="롱폼 · 알리랑이 무엇인가" style="position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:8px" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

쇼츠 3편: [아리랑은 알리라](https://youtu.be/aTjn_b7aUOc) · [얼굴·어른·어린이](https://youtu.be/-tWnd0H_eF8) · [아리랑 고개](https://youtu.be/bsZgkhEVd1U)

<figure style="margin:1rem 0"><img src="/images/topic-shorts/abstract.jpg" alt="처음 판 — 먹점·먹선뿐이라 「내용에 맞는 그림이 부족하다」는 판정을 받았어요" style="width:100%;border-radius:8px;border:1px solid #e5e5e5"><figcaption style="font-size:.85rem;opacity:.7;margin-top:.3rem">처음 판 — 먹점·먹선뿐이라 「내용에 맞는 그림이 부족하다」는 판정을 받았어요</figcaption></figure>
<figure style="margin:1rem 0"><img src="/images/topic-shorts/frame_family.jpg" alt="그림판 — 장면 그림 위에 한 줄 자막. 사람 판정 두 번(그림 부족, 붓이 방정맞다) 뒤의 모습이에요" style="width:100%;border-radius:8px;border:1px solid #e5e5e5"><figcaption style="font-size:.85rem;opacity:.7;margin-top:.3rem">그림판 — 장면 그림 위에 한 줄 자막. 사람 판정 두 번(그림 부족, 붓이 방정맞다) 뒤의 모습이에요</figcaption></figure>

## 왜 「스킬」로 하나요

스킬은 「언제 무엇을 읽고 무엇을 지키는지」를 적은 문서예요. 클로드 코드가 그 단계에 들어가면 스스로 열어요. 이 과정에서 쓰는 영상 스킬 28개를 2강에서 단계별로 정리해요. 핵심은 하나예요. **영상을 새로 시작하면 톤 스킬(video-style)을 맨 먼저 연다.**

::: practice
- [ ] 여덟 단계를 종이에 쓰고, 사람이 하는 네 지점에 동그라미를 쳤다
- [ ] 사례 롱폼을 끝까지 봤고, 쇼츠 하나를 골라 봤다
- [ ] 내가 만들고 싶은 쇼츠 주제 하나를 정했다
:::
