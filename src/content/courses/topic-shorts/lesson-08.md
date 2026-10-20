---
number: 8
title: 검수 — 두 겹 게이트, 밀도 측정, 프레임 자체 리뷰
subtitle: 숫자로 재고, 눈으로 본다
goal: 대본 게이트와 배포본 게이트를 돌리고, 밀도 측정기가 무엇을 세는지 읽어 톤을 깨지 않고 기준을 맞춘다.
minutes: 50
part: 3부 · 검수·배포·측정
---


## 자동 검사 두 겹

- **대본 게이트(제작 전)** 금지어·효능 표현·오독·카드·기초한자. 8.0 미만이면 조립과 업로드가 막혀요. 통과 해시가 없으면 조립 스크립트가 거부해요.
- **배포본 게이트(제작 후)** 인트로 누락·무손실 PCM·해상도·빈 중앙·자막에 화자 태그 유출·썸네일 두 장·**밀도**(30초 표본 세 곳에서 움직임 블롭 2.5 이상, 정지 프레임 25% 이하).

## 밀도 측정기가 세는 것

10fps·240×135 회색으로 줄인 뒤 24×14 격자에서 앞 프레임과 평균 밝기 차 6 이상인 칸을 묶어 세요. 그래서 「옅은 물결이 천천히 흐르는」 것은 안 잡히고, **초당 20px 이상 움직이는 먹 경계**나 20px 이상 크기의 점이 움직여야 한 블롭이 돼요.

```bash
python3 scripts/longform/motion_density.py remotion/out/test.mp4 0 30
# → 움직임블롭/프레임 평균 4.53  정지프레임 0%
```

톤을 깨지 않으려면 그 속도로 움직이는 것을 톤 안에서 찾아야 해요. 수묵에서는 붓이 쓰는 글자의 앞선, 말하는 순간 찍히는 낱말, 출렁이는 먹선, 퍼지는 테, 떨어져 번지는 먹방울, 멈추지 않는 카메라였어요. 첫 판 0.1(정지 90%) → 4.5(정지 0%).

## 사람 눈 — 프레임 자체 리뷰

배포 전에 프레임 다섯 장(장면 전환·자막 긴 줄·훅·마지막)과 소리 세 구간(앞 무음·첫 대사·끝)을 뽑아 봐요.

```bash
for t in 3 12 24 33 41; do ffmpeg -y -ss $t -i out/short.mp4 -frames:v 1 -vf scale=360:-1 review/f_$t.png; done
ffmpeg -ss 0 -t 1.5 -i out/short.mp4 -vn -af volumedetect -f null - 2>&1 | grep mean_volume   # 앞 무음 → -91dB
```

이 리뷰로 잡은 것: 붓이 가로 자막을 덮음, 어른 실루엣이 자막 글자 위에 겹침(장면 캔버스를 자막 띠 위로 제한), 붓글씨가 회색으로 흐림(글자용 필터 분리).

## 자주 막히는 곳

| 증상 | 원인 | 푸는 법 |
|---|---|---|
| render 가 「could not determine executable」 | remotion/node_modules 가 지워짐 | `npm ci` 한 번 |
| 밀도 FAIL 인데 톤은 맞음 | 측정기가 느린 움직임을 못 봄 | 톤 안에서 빠른 경계를 더한다. 그래도 안 되면 톤별 예외를 사람이 결정 |
| 그림이 내용을 안 보여 줌 | 추상 먹점만으로 책·노래·씨앗이 안 보임 | 줄마다 장면 표를 먼저 쓰고 그림을 뽑는다 |
| 붓·먹방울이 방정맞음 | 밀도를 올리려고 움직임을 늘림 | 움직이는 주체는 「적당할 때만」. 붓은 글자 쓸 때만 |
| 자막 검사가 그림 속 글자를 자막으로 오인 | 생성 이미지에 글자·기호 | 톤 문구에 no text, 글자는 우리 자막·붓 카드로만 |
| 유튜브 토큰 만료 → 엉뚱한 채널에 업로드 | 자동 재로그인이 다른 계정을 잡음 | `--auth` 를 먼저, 인증 주소를 **어사이드 브라우저**로 열어 계정만 고른다. 크롬 확장 창은 localhost 콜백을 못 받는다. 잘못 올라간 영상은 지우지 말고 비공개 |
| 미리보기 파일이 30MB 넘어 폰으로 못 봄 | 무손실 배포본은 크다 | 검토용 압축본(crf 27·aac)을 따로 만들고 배포엔 안 쓴다 |

<div class="prompt-box not-prose" data-prompt="8-1" data-level="required">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 8-1</span><span class="prompt-level prompt-level-required">🟡 필수</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

렌더한 out/short.mp4 를 스스로 검수해줘. (1) 3·12·24·33·41초 프레임을 뽑아 자막이 아래 320px 안전 영역 안에 있는지, 그림 위 글자가 없는지, 장면 전환이 번짐인지 본다 (2) 앞 1.5초·첫 대사·끝 1초의 mean_volume 을 재서 무음(-90dB 안팎)과 대사(-20~-30dB)를 확인한다 (3) motion_density.py 로 30초 표본을 재서 블롭 2.5 이상·정지 25% 이하인지 본다. 결과를 표로 보고하고, 고칠 것이 있으면 고친 뒤 다시 재서 전후 숫자를 같이 보여줘. 업로드는 하지 마.

</div>
</div>

::: practice
- [ ] 대본 게이트 PASS 해시가 있다
- [ ] 밀도 숫자(블롭·정지%)를 전후로 적었다
- [ ] 프레임 5장·소리 3구간을 내 눈과 귀로 확인했다
:::
