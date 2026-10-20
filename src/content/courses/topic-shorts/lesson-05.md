---
number: 5
title: 대본과 음성 — 10줄과 더빙, 그리고 재사용
subtitle: 첫 문장이 훅, 음원은 재사용
goal: 쇼츠 대본 10줄을 쓰고 더빙을 굽되, 그림만 바뀌는 편은 음원을 재사용한다.
minutes: 40
part: 2부 · 재료 만들기와 조립
---


## 새 주제라면

script-review 로 core 한 문장 → 제목 후보 8개 채점 → 대본 S1~S8 → 기계 검사(금지어·효능 표현·기초한자) 순이에요. 쇼츠는 **첫 문장이 훅**이어야 하고, 긴 영상에서 자르면 yt-shorts 가 「혼자 서는 20~55초」를 골라요.

화자 태그가 목소리를 골라요. 한 줄 앞에 `[[child]]`·`[[adult]]`·`[[friend]]` 를 붙이면 더빙 스크립트가 그 목소리로 구워요. 자막에는 태그가 찍히면 안 돼요(8강 게이트가 잡아요).

## 음원은 재사용해요

그림만 바뀌면 재합성하지 않아요. 아리랑 편은 36줄 wav 를 드라이브 백업에서 되살려 그대로 썼고, 쇼츠 3편도 그 36줄에서 10~12줄씩 골라 잘랐어요. 더빙 비용 0.

쇼츠 한 편의 컷 데이터는 이렇게 생겼어요. 줄 번호·텍스트·강조 구절·장면·시작 초·길이예요.

```json
{"g": 6, "text": "아리랑은 알리랑, 알리라.", "hilite": "알리랑, 알리라",
 "scene": "word:알리라", "start": 13.45, "dur": 2.4, "img": "s03_song"}
```

## 새로 구울 때

글자 수를 먼저 합산해 크레딧을 확인하고, 한 편을 반만 굽지 않아요. 줄을 끼우거나 빼면 뒤 줄 번호가 밀리니 wav 이름도 같이 옮겨요(텍스트 일치로 자동 재번호하는 스크립트를 두면 편해요).

<div class="prompt-box not-prose" data-prompt="5-1" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-1</span><span class="prompt-level prompt-level-intermediate">🟠 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

쇼츠 대본을 써줘. 톤 결정 블록은 (경로)에 있어. 10줄 안팎, 첫 문장이 훅, 각 줄 40음절 이하, 화자 태그([[child]]·[[adult]])를 줄 앞에 붙여줘. 마지막 줄은 core 한 문장으로 닫아줘. 다 쓰면 글자 수(태그 제외)를 합산해 보여주고, 내가 크레딧을 확인한 뒤에만 더빙을 구워.

</div>
</div>

::: practice
- [ ] 대본 10줄의 첫 문장만 읽어도 무슨 이야기인지 안다
- [ ] 글자 수 합계를 보고 크레딧을 확인한 뒤 더빙을 구웠다(또는 기존 음원을 재사용했다)
- [ ] 컷 데이터 JSON 에 줄 번호·시작 초·길이가 들어 있다
:::
