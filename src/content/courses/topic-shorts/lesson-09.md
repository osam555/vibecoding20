---
number: 9
title: 업로드·역할 구분·성과 측정
subtitle: 승인 뒤에만 올리고, 14일 뒤에 숫자를 본다
goal: 제목+썸네일을 한 쌍으로 만들고 승인 뒤 업로드하며, AI 와 사람의 네 역할을 표로 나누고 14일 지표를 다음 기획에 되먹인다.
minutes: 40
part: 3부 · 검수·배포·측정
---


## 포장과 업로드

제목과 썸네일은 한 쌍이에요(yt-package: 썸네일이 제목을 반복하면 안 됨). 설명·태그는 yt-seo. 쇼츠는 편 데이터의 「부분 영상」 칸에 제목·설명·파일 경로를 적어 두면 업로드 스크립트가 그대로 읽어요.

```bash
python3 scripts/youtube_upload.py arirang --part ink_short1 --channel allirang --dry   # 메타만 확인
python3 scripts/youtube_upload.py arirang --part ink_short1 --channel allirang         # 승인 뒤
python3 scripts/longform/yt_privacy.py --channel allirang -- <옛영상ID> private        # 새 영상 공개 확인 뒤
```

교체 업로드는 순서가 있어요. **새 영상 공개·처리 완료 확인 → 옛 영상 비공개.** 지우지 않아요.

<div style="position:relative;padding-top:56.25%;margin:1rem 0"><iframe src="https://www.youtube.com/embed/aTjn_b7aUOc" title="쇼츠 1 · 아리랑은 알리라" style="position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:8px" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

## AI 가 실행하는 영역과 사람이 승인하는 영역

| 역할 | 아리랑 편에서 | 원칙 |
|---|---|---|
| ① 사람의 업무규칙 | 규칙 파일: 무압축 WAV, 삭제 대신 비공개, 각주 「여러 설 중 하나」, 글자 없는 배경 | 세션 시작 때 읽히고, 예외는 사람이 쪽지로 남긴다 |
| ② 결정론적 자동화 | 대본 게이트, 배포본 게이트, 밀도 측정기, R2 업로드·바이트 대조, 업로드·비공개 스크립트 | 점수와 통과/실패로만 답한다 |
| ③ AI 추론·실행 | 톤 고르기, 장면 표와 프롬프트, 핵심어 시각 추정, 밀도 보강 설계, 프레임을 보고 스스로 고치기 | 결과를 프레임·숫자로 보여 주고 판정을 기다린다 |
| ④ 오직 사람 | 「수묵 좋다」, 「그림이 부족하다」, 「붓이 방정맞다」, 「옛날 복장일 필요 없다」, 배포 승인, 유튜브 계정 선택 | 품질 판정과 외부 계정 조작의 최종 허가는 끝까지 사람 |

경계가 흐려지는 곳은 ③과 ④ 사이예요. 에이전트가 「밀도 미달」을 스스로 고치려다 톤을 깨뜨릴 뻔했고, 그걸 잡은 건 사람의 한마디였어요. 품질 판정은 자동화하지 않아요.

## 성과 측정

| 지표 | 무엇을 | 아리랑 편 |
|---|---|---|
| 제작(즉시) | 배포본 검사 점수, 밀도, 제작 시간, 비용 | 10.0 / 3.3~8.7 / 하루 / 더빙 0·그림 0·Flow 0 |
| 시청(7·14일) | yt-retention 으로 시청 지속률 CSV, 이탈 지점 | 사슬 구간 이탈이 앞 구간보다 낮은가를 판정 |
| 절차 | 사람 개입 횟수, 재렌더 횟수 | 4회 / 6회 → 다음 편에서 줄면 절차가 굳은 것 |

측정 결과는 다음 기획(A 단계)에 되먹여요. 지속률이 떨어진 구간의 장면·자막을 바꾸고, 톤 결정 블록의 「전환」 줄을 고쳐요.

<div class="prompt-box not-prose" data-prompt="9-1" data-level="required">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 9-1</span><span class="prompt-level prompt-level-required">🟡 필수</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

업로드 메타를 만들어줘. 제목 후보 5개(각 30자 이내, 첫 낱말이 핵심어)와 썸네일 문구 후보 5개를 한 쌍으로 묶고, 썸네일이 제목을 반복하는 쌍은 빼줘. 설명은 첫 줄에 core 한 문장, 둘째 줄에 「여러 설 가운데 하나」 같은 각주, 그다음 롱폼 링크와 태그 6개. 편 데이터의 부분 영상 칸에 적고 --dry 로 보여줘. 실제 업로드는 내가 「올려」라고 할 때만.

</div>
</div>

## 배포 전 체크리스트

- [ ] 톤 결정 블록이 검토본 머리에 있고, 모든 그림 프롬프트 앞에 같은 톤 문구가 붙어 있다
- [ ] 대본 게이트 PASS 해시가 있다. 배포본 게이트 8.0 이상이다
- [ ] 프레임 5장·소리 3구간을 사람이 봤다. 자막은 한 줄, 안전 영역 안이다
- [ ] 음성은 무압축 PCM 이다. 미리보기 압축본은 배포에 쓰지 않는다
- [ ] 업로드는 승인 뒤. 새 영상 공개 확인 뒤에 옛 영상을 비공개로. 지우지 않는다
- [ ] 편 데이터에 새 ID 와 옛 ID 를 둘 다 적었다. 백업에 배포본·쇼츠·그림을 넣었다

::: practice
- [ ] 제목+썸네일 한 쌍을 골랐고 --dry 결과를 봤다
- [ ] 네 역할 표를 내 쇼츠에 맞춰 다시 채웠다
- [ ] 14일 뒤 볼 지표 세 개를 달력에 적었다
:::
