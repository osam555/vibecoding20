---
number: 6
title: 그림 — 줄마다 장면 표, 톤 문구 고정
subtitle: 14장면을 같은 문구로
goal: 줄마다 보여 줄 장면을 표로 정하고, 톤 문구를 앞에 붙여 정지 그림을 생성해 원본 해상도로 받는다.
minutes: 40
part: 2부 · 재료 만들기와 조립
---


## 먼저 표, 그다음 그림

줄마다 「무엇을 보여 줘야 하는가」를 표로 정해요. 아리랑 편은 36줄을 열네 장면으로 묶었어요.

| 줄 | 내용 | 장면 |
|---|---|---|
| 1 | 책을 읽고 충격 | 책과 찻잔 |
| 2~4 | 아이의 질문 | 엄마와 아이 |
| 5~10 | 아리랑→알리랑→알리라 | 노래하는 사람과 먹 리본 |
| 11~14 | 아리랑 고개 | 고갯길 → 고갯마루 해돋이 |
| 15~16 | 님과 발병 | 떠나는 뒷모습 → 발을 잡은 사람 |
| 17~20 | 알=씨앗 | 흙 속 씨앗 → 새싹 |
| 21~23 | 얼굴·어른·어린이 | 이목구비 없는 얼굴 → 손잡은 어른과 아이 |
| 24~29 | 알리랑 | 붓과 벼루 |
| 30~36 | 여러 설, 새로 들린다 | 귀 기울이는 사람 → 골짜기 |

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:.6rem;margin:1rem 0">
<figure style="margin:1rem 0"><img src="/images/topic-shorts/s01_book.jpg" alt="1줄 · 책" style="width:100%;border-radius:8px;border:1px solid #e5e5e5"><figcaption style="font-size:.85rem;opacity:.7;margin-top:.3rem">1줄 · 책</figcaption></figure><figure style="margin:1rem 0"><img src="/images/topic-shorts/s03_song.jpg" alt="5~10줄 · 노래 리본" style="width:100%;border-radius:8px;border:1px solid #e5e5e5"><figcaption style="font-size:.85rem;opacity:.7;margin-top:.3rem">5~10줄 · 노래 리본</figcaption></figure><figure style="margin:1rem 0"><img src="/images/topic-shorts/s05_sunrise.jpg" alt="13~14줄 · 고갯마루 해돋이" style="width:100%;border-radius:8px;border:1px solid #e5e5e5"><figcaption style="font-size:.85rem;opacity:.7;margin-top:.3rem">13~14줄 · 고갯마루 해돋이</figcaption></figure><figure style="margin:1rem 0"><img src="/images/topic-shorts/s08_seed.jpg" alt="17~18줄 · 씨앗" style="width:100%;border-radius:8px;border:1px solid #e5e5e5"><figcaption style="font-size:.85rem;opacity:.7;margin-top:.3rem">17~18줄 · 씨앗</figcaption></figure><figure style="margin:1rem 0"><img src="/images/topic-shorts/s10_face.jpg" alt="21줄 · 얼굴" style="width:100%;border-radius:8px;border:1px solid #e5e5e5"><figcaption style="font-size:.85rem;opacity:.7;margin-top:.3rem">21줄 · 얼굴</figcaption></figure><figure style="margin:1rem 0"><img src="/images/topic-shorts/s13_brush.jpg" alt="24~29줄 · 붓과 벼루" style="width:100%;border-radius:8px;border:1px solid #e5e5e5"><figcaption style="font-size:.85rem;opacity:.7;margin-top:.3rem">24~29줄 · 붓과 벼루</figcaption></figure>
</div>

## 톤 문구는 한 글자도 안 바꿔요

```
Korean ink-wash painting (sumukhwa) on rice paper, soft ink bleed,
large empty white space, only black ink with one small red seal-dot accent,
no text, no letters, no calligraphy.  + (장면 설명)
```

열네 장 모두 이 문구로 시작했어요. 그래서 한 벌로 보여요. `no text` 는 자막 검사(OCR)가 그림 속 글자를 자막으로 오인하지 않게 하는 장치예요.

## 원본 해상도 받기

Canva 커넥터로 뽑으면 미리보기가 199px 이에요. 빈 디자인(1920×1080 페이지)에 넣고 PNG 로 내보내 원본을 받아요. Flow 정지 이미지는 크레딧이 들지 않으니 장수가 많으면 Flow 가 싸요.

등장인물의 옷차림은 톤과 별개예요. 수묵이라고 한복일 필요는 없어요. 사람 판정으로 일곱 장면을 요즘 옷차림으로 다시 뽑았어요.

<div class="prompt-box not-prose" data-prompt="6-1" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-1</span><span class="prompt-level prompt-level-intermediate">🟠 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

컷 데이터(경로)의 줄마다 보여 줄 장면을 표로 정해줘(줄 번호·내용·장면 한 줄). 같은 장면이 이어지는 줄은 묶어줘. 그다음 톤 결정 블록의 톤 문구를 맨 앞에 한 글자도 바꾸지 않고 붙여 장면마다 이미지 프롬프트를 써줘. 글자·간판·기호는 넣지 말고, 사람은 요즘 옷차림으로. 생성은 내가 확인한 뒤에.

</div>
</div>

::: practice
- [ ] 줄 → 장면 표가 있고, 같은 장면으로 묶인 줄이 보인다
- [ ] 모든 프롬프트가 같은 톤 문구로 시작한다
- [ ] 그림을 원본 해상도(1920×1080 이상)로 받았다
:::
