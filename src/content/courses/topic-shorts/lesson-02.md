---
number: 2
title: 준비 — 도구·계정·스킬 묶음
subtitle: 맥과 클로드 코드, 더빙·그림·유튜브 계정, 영상 스킬 28개
goal: 필요한 도구를 설치해 확인 명령 여섯 개를 통과하고, 어느 단계에 어느 스킬이 쓰이는지 표로 가진다.
minutes: 40
part: 1부 · 준비와 톤 고르기
---


## 컴퓨터와 기본 도구

| 항목 | 무엇 | 확인 명령 |
|---|---|---|
| 맥 | Apple Silicon 권장. 렌더가 CPU 를 써요(12코어에서 3분 영상 약 10분) | `sysctl -n machdep.cpu.brand_string` |
| Claude Code | 터미널에서 대화로 일을 시키는 도구 | `claude --version` |
| Node.js | Remotion(코드로 영상 렌더) | `node -v` (20 이상) |
| Python 3 | 검사 스크립트(게이트·밀도·업로드) | `python3 --version` |
| ffmpeg | 음성 묶기, 인트로·엔딩 결합, 프레임 뽑기 | `ffmpeg -version` |
| Google Chrome | Remotion 이 화면을 그릴 때 써요 | 설치만 |

::: mac
Homebrew 로 한 번에: `brew install node python ffmpeg`
:::
::: windows
PowerShell 에서 한 번에: `winget install OpenJS.NodeJS.LTS Python.Python.3.12 Gyan.FFmpeg Google.Chrome`. WSL 없이 Windows 에서 그대로 돌아가요. 렌더 명령의 `--browser-executable` 은 빼거나 `"C:\Program Files\Google\Chrome\Application\chrome.exe"` 로 바꿔요. 톤 고르기 스킬 설치는 3강에 있어요.
:::

## 계정과 키

- **Typecast** 더빙 키(`TYPECAST_API_KEY`). 환경 파일에만 두고 출력·커밋하지 않아요. 잔여 크레딧은 API 로 못 보니 굽기 전에 글자 수를 합산해 사람이 확인해요.
- **유튜브 OAuth** 채널마다 토큰 하나. 토큰이 만료되면 자동 재로그인에 맡기지 말고 사람이 계정을 골라요(8강).
- **그림 생성** 둘 중 하나. **Canva 커넥터**는 세션 안에서 바로 생성·내보내기. **Flow(labs.google/flow)**는 정지 이미지는 크레딧이 안 들고 클립만 들어요(클립당 약 100). Flow 는 브라우저로 몰아야 해서 어사이드 세션이 맡아요.
- **Cloudflare R2** 사이트가 재생하는 영상 저장소(`wrangler` 로그인).

## 스킬 묶음 — 단계마다 쓰는 것

다섯 단계(A 기획 · B 톤 · C 대본·음성 · D 그림·클립·조립 · E 검수·업로드)로 나눴어요.

| 단계 | 스킬 | 하는 일 | 비용 |
|---|---|---|---|
| A | video-method | 만들 영상 종류를 듣고 어느 스킬·어느 방식으로 갈지 하나를 추천 | — |
| A | yt-plan · script-review · yt-shorts | 주간 편성, core 한 문장과 제목 후보 8개 채점, 긴 영상에서 혼자 서는 20~55초 고르기 | — |
| **B** | **video-style** | **이야기에서 22가지 톤 중 후보 둘과 움직임·전환 규칙을 「톤 결정 블록」으로. 영상의 첫 단계** | — |
| C | yt-script · script-review | 훅 21공식 점수화, 대본 S1~S8 검사, 독립 리뷰어 2회 | — |
| C | Typecast 더빙 | 화자 태그(`[[child]]`·`[[adult]]`)로 목소리를 고르는 44.1k 무압축 WAV | 글자 수 |
| D | clay-episode · flow-shorts | 클레이 애니: 컷 설계 → Flow 4초 컷 → 조립 → 3층 검사 | Flow 클립 |
| D | veo-video | Gemini API 로 Veo 클립 | 초당 과금 |
| D | hyperframes · general-video · motion-graphics · faceless-explainer | HTML 합성으로 그리는 모션그래픽(코드 렌더의 다른 길) | 사용량 |
| D | media-use · blog-image · video-use | BGM·SFX·사진·카드, 촬영본 편집 | 일부 키 |
| D·E | shorts-latest · textbook-shorts · proverb-shorts · blog-video · shorts-generator · promo-video | 형식이 정해진 쇼츠 공장 | Typecast·쿼터 |
| E | youtube-thumbnail · yt-package · yt-seo | 썸네일, 제목+썸네일 한 쌍 검사, 설명·태그 | — |
| E | yt-retention · video-content-pipeline | 시청 지속률 분석, 업로드·배포 관제 | 쿼터 |

사례에서 실제로 돈 것은 video-style(톤) → Remotion 코드(조립) → 저장소의 게이트·업로드 스크립트(E)예요. 대본은 기존 것을 써서 C 를 건너뛰었어요.

## 규칙 파일

저장소에 「어기면 안 되는 것」만 모은 파일을 두고 세션 시작 때 읽게 해요. 영상과 닿는 규칙 넷: 소리는 무압축 WAV 원음만 · 공개된 영상은 지우지 않고 비공개로 · 어원은 각주로 내리고 「여러 설 중 하나」를 남긴다 · 생성 이미지에 글자를 넣지 않는다.

<div class="prompt-box not-prose" data-prompt="2-1" data-level="required">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 2-1</span><span class="prompt-level prompt-level-required">🟡 필수</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

내 프로젝트에 영상 규칙 파일(.claude/rules.md)을 만들어줘. 규칙은 네 줄만: (1) 소리는 무압축 WAV 원음만 쓴다 (2) 공개된 유튜브 영상은 삭제하지 않고 비공개로 내린다 (3) 생성 이미지에는 글자를 넣지 않는다 (4) 업로드·공개·비공개 전환은 내 승인 뒤에만 한다. 각 규칙 아래에 「왜」를 한 문단씩 적어줘.

</div>
</div>

::: practice
- [ ] 확인 명령 여섯 개가 모두 버전을 출력한다
- [ ] Typecast 키를 환경 파일에 넣었고, 터미널에 출력한 적이 없다
- [ ] 규칙 파일이 있고 네 규칙에 「왜」가 붙어 있다
:::
