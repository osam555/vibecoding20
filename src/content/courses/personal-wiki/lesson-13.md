---
number: 13
title: 내 위키를 지식그래프로 보기
subtitle: 링크가 만든 별자리, 고립 페이지 0 만들기, 자라는 위키 나란히 보기
goal: 위키의 [[링크]]를 점과 선으로 바꿔 한 장의 그래프로 그리고, 허브·덩어리·고립을 읽어 고립 페이지를 0으로 만들며, 주마다 다시 그려 위키가 자라는 모습을 확인합니다. 그래프에도 제목이 다 보이니 비공개로 다루는 원칙도 익힙니다.
minutes: 40
part: 3부 · 활용
---

## 글 목록으로는 안 보이던 것

위키가 쌓일수록 "잘 쌓이고 있나?"가 궁금해져요. 글 목록으로는 쪽수만 보일 뿐 **무엇이 중심이고, 어디가 따로 놀고 있는지**는 알 수 없죠. 그런데 `[[링크]]`를 점과 선으로 바꿔 그리면 한눈에 보여요. 지금까지 쓴 링크가 곧 **내 생각이 이어진 모양**이에요.

영상으로 먼저 분위기를 보세요(2분 31초).

<div style="position:relative;padding-bottom:56.25%;height:0;margin:1.25rem 0;overflow:hidden;border-radius:12px">
<iframe src="https://www.youtube-nocookie.com/embed/9Dk9hqJVtJo" title="내 위키를 지식그래프로 보기" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" loading="lazy" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen></iframe>
</div>

<small>[유튜브에서 보기](https://youtu.be/9Dk9hqJVtJo). 영상이 안 나오면 이 링크로 열어요.</small>

![내 위키를 지식그래프로 보기 — 영상 썸네일](/images/lectures/personal-wiki-13.jpg)

## 1. 링크 = 생각의 연결

4강에서 "다른 페이지를 언급할 땐 `[[위키링크]]`로 쓰라"고 했던 이유가 여기 있어요.

| 위키에서 | 그래프에서 |
|---|---|
| 페이지 한 장 | 점 (노드) |
| `[[링크]]` 한 번 | 선 (엣지) |
| 링크를 많이 받는 페이지 | 큰 점 (허브) |
| 아무와도 안 이어진 페이지 | 외톨이 점 (고립) |

용어: **지식그래프**는 이렇게 "무엇과 무엇이 이어져 있는지"를 점과 선으로 그린 지도예요. 어려운 도구 없이, 내 `[[링크]]`만으로 만들 수 있어요.

## 2. 클로드에게 시키기

> 기본 방법은 클로드 데스크탑 앱의 **Code 탭**에서 위키 폴더(`my-wiki`)를 열고 아래 프롬프트를 붙여 넣는 거예요. 권한을 물으면 **무엇을 하려는지 읽고** 허용하세요.

<div class="prompt-box not-prose" data-prompt="13-1" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 13-1</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

wiki/ 폴더의 모든 .md 파일을 읽고, 본문의 [[위키링크]]로 지식그래프를 만들어줘.
- 파일 하나 = 점(노드), [[링크]] 하나 = 선(엣지). 링크 대상이 없는 파일이면 그 선은 건너뛰고 몇 개였는지 알려줘
- 결과는 graph/wiki-graph.html 한 장. 외부 라이브러리·서버·인터넷 없이 HTML 안의 JavaScript만으로 그릴 것
- 색 = 폴더(wiki/ 바로 아래 폴더별로 다른 색), 크기 = 연결 수(많을수록 크게)
- 점에 마우스를 올리면 페이지 제목, 클릭하면 그 점과 이웃만 강조하고 나머지는 흐리게
- 위쪽에 검색 칸: 제목에 글자가 들어간 점만 밝게
- 화면 위에 쪽수·링크 수·고립 페이지 수(연결 0개)를 한 줄로 보여줘
- 만드는 스크립트는 scripts/wiki_graph.py 로 저장해서 다음에도 한 줄로 다시 그릴 수 있게 해줘
- 위키 파일 자체는 고치지 말고, 끝나면 만든 파일과 숫자를 표로 알려줘

</div>
</div>

**외부 라이브러리와 서버가 필요 없어요.** 결과물은 HTML 파일 한 장이라 더블클릭하면 브라우저에서 열려요. 위키 파일은 읽기만 하니 안전해요. 점을 끌어 움직여 보고, 검색 칸에 낱말을 넣고, 점을 클릭해 보세요.

## 3. 읽는 법

그래프에서 볼 것은 세 가지예요.

- **허브**: 큰 점. 링크를 가장 많이 받는 페이지로, 지금 내 위키의 **중심 주제**예요. 의도한 중심과 같은지 확인해 보세요.
- **덩어리**: 서로 촘촘히 붙은 점 무리. 보통 한 주제 묶음(예: 블로그, 고객 문의)이에요. 같은 색이 한곳에 모이면 폴더 구분이 잘 되고 있다는 뜻이에요.
- **고립**: 선이 하나도 없는 외톨이 점. **아직 생각이 이어지지 않은 곳**이에요. 5강에서 점검한 '고아 페이지'를 눈으로 보는 셈이죠.

<div class="prompt-box not-prose" data-prompt="13-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 13-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

graph/wiki-graph.html 을 만들 때 센 연결 수를 바탕으로 알려줘.
1) 연결이 많은 허브 페이지 상위 5개
2) 서로 촘촘히 붙어 있는 덩어리가 몇 개이고 각각 무슨 주제로 보이는지
3) 고립 페이지(연결 0개) 목록
표로 보여주고, 내가 보기 전에는 아무것도 고치지 마.

</div>
</div>

## 4. 실습: 고립 페이지 0 만들기

고립은 틀린 게 아니라 **"아직 연결 안 한 자료"** 일 뿐이에요. 하나씩 이어 주면 위키가 단단해져요. 클로드가 제안하고, **내가 OK 한 것만** 연결하게 해요.

<div class="prompt-box not-prose" data-prompt="13-3" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 13-3</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

고립 페이지 목록의 각 페이지를 읽고, 이어 주면 좋은 페이지를 1~2개씩 골라 제안해줘 (이유 한 줄 포함).
내가 OK 한 것만 두 페이지 본문 끝의 '연결' 줄에 [[링크]]를 추가하고, 해당 페이지의 updated 날짜도 오늘로 고쳐줘.
끝나면 그래프를 다시 그려서 고립 페이지가 몇 개 남았는지 알려줘. 0이 될 때까지 반복해줘.

</div>
</div>

목차(`index.md`)는 거의 모든 페이지와 이어져 있어서 그래프 한가운데를 차지해요. 진짜 주제 덩어리를 보고 싶으면 `index.md` 를 숨기고 다시 그려 보세요. 훨씬 또렷한 별자리가 나와요.

실제 위키로 해 본 결과예요. 고립 페이지 **16쪽**을 이어 **0쪽**으로 만들었고, 그 과정에서 몰랐던 연결(비슷한 두 페이지)도 여럿 찾았어요.

## 5. 자라는 위키: 주마다 다시 그려 나란히

그래프는 한 번 그리고 끝이 아니에요. **주마다 한 번 다시 그려 나란히** 두면 위키가 자라는 모습이 보여요.

| 날짜 | 쪽수 | 비고 |
|---|---|---|
| 2026-10-02 | 105 | 처음 그린 날 |
| 2026-10-05 | 127 | |
| 2026-10-08 | 138 | |
| 2026-10-11 | 147 | |
| 2026-10-13 | 265 | 링크 1,022개, 고립 0 |

열하루 만에 105쪽에서 265쪽으로, 2.5배가 됐어요. 첫 주에는 점 몇 개가 흩어져 있다가 몇 주 뒤엔 별자리처럼 모양이 잡혀요. 매일 5분씩 쌓은 게 **눈에 보이는 첫 보상**이 돼요.

<div class="prompt-box not-prose" data-prompt="13-4" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 13-4</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

지금 그래프의 숫자(쪽수·링크 수·고립 수)를 graph/history.md 표에 오늘 날짜로 한 줄 추가하고, graph/wiki-graph.html 을 graph/wiki-graph-오늘날짜.html 이름으로 복사해 보관해줘.
표는 날짜 | 쪽수 | 링크 | 고립 열로 만들고, 이전 줄과 비교해서 늘어난 만큼을 한 문장으로 말해줘.

</div>
</div>

## 6. 원천 층: 아직 정리 안 된 자료가 보인다

위키 밖에도 자료가 있죠. 구글 독스·시트·슬라이드 같은 **원천 자료**예요. 이 파일들을 제목만 점으로 올리면 그래프에 "아직 위키로 정리되지 않은 자료"가 층으로 깔려요.

실제 예: 독스 1,448건 중 위키로 정리해 이어 둔 것은 **158건**. 나머지 점들은 연결이 없는 채로 바깥에 남아 있어서, **"아직 정리 안 된 자료가 이만큼 있구나"** 가 한눈에 보여요. 다음에 무엇을 정리할지 고를 때 쓰는 지도가 됩니다. 원천 층은 평소엔 숨기고 필요할 때만 켜게 만들면 허브가 왜곡되지 않아요.

## 7. 비공개 원칙: 그래프에는 제목이 다 보인다

그래프는 예쁘지만 **점마다 페이지 제목이 붙어 있어요.** 제목에 고객 이름, 계약, 가격, 가족 이야기가 있다면 그래프 한 장이 그대로 노출돼요.

- 그래프 HTML을 **공개 저장소(깃허브 공개 등)에 올리지 않아요.** 공유 링크로 내보내지도 않아요.
- 메신저·메일로 보낼 때도 제목이 들어 있다는 걸 기억해요.
- 발표나 캡처가 필요하면 **라벨을 끈 화면**(점·선·색만)이나, 개인 내용이 없는 **샘플 위키**로 보여 줘요.
- 민감한 낱말이 든 제목은 '비공개'로 **가려서** 그려요.

<div class="prompt-box not-prose" data-prompt="13-5" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 13-5</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

그래프에 '발표용' 보기를 추가해줘 (원본 데이터는 그대로).
- 버튼 하나로 모든 제목(라벨)을 숨기고 점·선·색만 보이게
- 제목에 내 이름, 고객 이름, 가격, 계약 같은 낱말이 든 페이지는 점은 두되 제목을 '비공개'로 가림 (가릴 낱말 목록은 graph/mask-words.txt 에 두고 내가 고칠 수 있게)
- 이 파일을 인터넷에 올리거나 공유 링크를 만드는 일은 하지 마

</div>
</div>

이 원칙은 이 과정 전체의 기본(개인정보는 위키 밖으로 내보내지 않기)과 같아요. 그래프는 **나 혼자 보는 지도**예요.

## 터미널로도 할 수 있어요

<details>
<summary><strong>터미널의 claude 로 시키기</strong></summary>

`my-wiki` 폴더에서 `claude`를 실행하고 위 프롬프트를 붙여 넣으면 같은 결과가 나와요. 다시 그릴 때는 만들어 둔 스크립트를 `python3 scripts/wiki_graph.py` 로 한 줄에 실행하면 돼요.

</details>

::: practice
**실습 — 내 위키 별자리 그리기**

- [ ] `graph/wiki-graph.html` 이 만들어지고 브라우저에서 열린다 (점 클릭·검색이 된다)
- [ ] 허브 상위 3개가 내가 생각한 중심 주제와 맞는지 확인했다
- [ ] 고립 페이지를 이어서 0쪽(또는 의도적으로 남긴 것만)으로 줄였다
- [ ] `graph/history.md` 에 오늘 날짜의 쪽수·링크·고립을 적었다 (다음 주에 다시 그릴 날짜: YYYY-MM-DD)
- [ ] 그래프 파일을 공개 저장소에 올리지 않았고, 발표용은 라벨을 끈 화면으로 준비했다
:::
