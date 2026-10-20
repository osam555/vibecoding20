---
number: 7
title: 조립 — 카메라·전환·핵심어·한 줄 자막
subtitle: 말하는 순간 그려진다
goal: 컷 데이터와 그림으로 Remotion 컴포지션을 렌더하고, 핵심어가 말해지는 시각에 그림과 붓 카드가 나타나게 한다.
minutes: 50
part: 2부 · 재료 만들기와 조립
---


## 코드로 그린 것

컷 데이터 JSON 을 두고 컴포지션 하나가 세로(1080×1920)와 가로(1920×1080)를 같이 그려요. 수묵에서 코드로 그린 것은 다음과 같아요.

- **먹 번짐** SVG 필터(`feTurbulence` + `feDisplacementMap` + 약한 blur)로 먹 외곽을 거칠게. 붓글씨는 맥에 있는 나눔손글씨 붓(OFL).
- **카메라** 같은 그림이 이어지는 동안 멈추지 않는 느린 궤도(한 바퀴 7초, 초당 약 20px). 그림이 바뀌면 가운데서 번지는 소프트 마스크.
- **붓** 글자가 드러나는 앞선에만 나타나요(훅 제목·큰 붓글씨·워드마크). 처음엔 늘 날아다니게 했다가 「붓이 방정맞다」는 판정을 받고 고쳤어요.
- **핵심어는 말하는 순간 그려져요.** 대사에서 그 낱말이 나오는 시각(글자 위치 비례로 추정)에 그림이 바뀌고 오른쪽 위에 붓 카드가 쓰여요.
- **자막은 한 줄만.** 긴 대사는 문장·쉼표·띄어쓰기 순으로 가로 24자·세로 15자 안에서 잘라 차례로 바꾸고, 낱말이 찍히듯 나타나요.

<figure style="margin:1rem 0"><img src="/images/topic-shorts/key_book.jpg" alt="9초 · 「그분의 책」을 말하는 순간 책 그림과 붓 카드 「천부경과 수의 세계」" style="width:100%;border-radius:8px;border:1px solid #e5e5e5"><figcaption style="font-size:.85rem;opacity:.7;margin-top:.3rem">9초 · 「그분의 책」을 말하는 순간 책 그림과 붓 카드 「천부경과 수의 세계」</figcaption></figure>
<figure style="margin:1rem 0"><img src="/images/topic-shorts/key_hangul.jpg" alt="18초 · 한자 → 한글 카드가 쌓이고 그림은 「한글」로 바뀜" style="width:100%;border-radius:8px;border:1px solid #e5e5e5"><figcaption style="font-size:.85rem;opacity:.7;margin-top:.3rem">18초 · 한자 → 한글 카드가 쌓이고 그림은 「한글」로 바뀜</figcaption></figure>
<figure style="margin:1rem 0"><img src="/images/topic-shorts/frame_song.jpg" alt="32초 · 자막은 한 줄만, 낱말이 찍히듯 나타남" style="width:100%;border-radius:8px;border:1px solid #e5e5e5"><figcaption style="font-size:.85rem;opacity:.7;margin-top:.3rem">32초 · 자막은 한 줄만, 낱말이 찍히듯 나타남</figcaption></figure>

## 렌더 명령

```bash
# 세로 쇼츠 1편 — remotion/ 안에서
npx remotion render ArirangInk1 out/arirang_ink1.mp4 \
  --browser-executable="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --concurrency=6
# 스틸 한 장만 먼저 본다
npx remotion still ArirangInk1 out/x.png --frame=420 --scale=0.5
# 롱폼: 영상 + 무손실 음성 → PCM 으로 묶고 인트로·엔딩 결합
npx remotion render ArirangInkFull out/full.mp4 && npx remotion render ArirangInkFull out/full.wav --codec=wav
ffmpeg -i out/full.mp4 -i out/full.wav -c:v copy -c:a pcm_s16le -ar 48000 -ac 1 body.mp4
```

스틸 3장을 먼저 보고 전체를 돌려요. 3분 영상 한 번 렌더에 12코어로 약 10분이 걸려요.

<div class="prompt-box not-prose" data-prompt="7-1" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 7-1</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

remotion/ 에 세로 1080×1920 쇼츠 컴포지션을 만들어줘. 입력은 컷 데이터 JSON(경로)과 public/scenes/ 의 그림, public/audio/ 의 줄별 wav. 규칙: (1) 같은 그림이 이어지는 동안 카메라는 멈추지 않는 느린 궤도(한 바퀴 7초, 초당 20px 안팎) (2) 그림이 바뀌면 가운데서 번지는 소프트 마스크 0.9초 (3) 자막은 한 줄만, 문장·쉼표·띄어쓰기 순으로 15자 안에서 잘라 글자 수 비례로 차례로 보여주고 낱말이 찍히듯 나타나게 (4) keys 가 있는 줄은 그 시각에 큰 붓글씨 카드가 왼쪽부터 드러나고 붓은 그 앞선에만 (5) 톤 결정 블록의 움직임 규칙을 코드 주석 맨 위에 적어줘. 먼저 frame 60·300·900 스틸 세 장을 뽑아 보여줘.

</div>
</div>

::: practice
- [ ] 스틸 3장에서 자막이 안전 영역(아래 320px) 안에 있다
- [ ] 그림이 바뀌는 순간이 끊김이 아니라 번짐이다
- [ ] 세로 1편 렌더가 끝났고 길이가 대본 길이 + 앞뒤 여백과 맞다
:::
