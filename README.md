# Medichip

응급 상황에서는 한순간의 정보가 생명을 좌우합니다.
한국의 현실에서 응급실 내원이 어려워지는 문제를 해결하기 위해, Medichip은 실시간으로 가동 중인 응급실과 병원의 진료시간 정보를 제공하는 반응형 웹입니다.

---

## 브랜치 컨벤션

| **브랜치 타입** | **네이밍 규칙**                  | **설명**                                                |
| --------------- | -------------------------------- | ------------------------------------------------------- |
| Main            | `main` 또는 `master`             | 배포 가능한 최종 코드가 있는 브랜치                     |
| Develop         | `develop`                        | 개발자들이 통합하는 기본 브랜치 (기능 통합 및 테스트)   |
| Feature         | `feature/<티켓번호>-<짧은_설명>` | 새로운 기능 추가를 위한 브랜치                          |
| Bugfix / Fix    | `fix/<티켓번호>-<짧은_설명>`     | 버그나 문제점을 수정하기 위한 브랜치                    |
| Release         | `release/<버전번호>`             | 배포 전 최종 버그 수정, 테스트, 문서 업데이트           |
| Hotfix          | `hotfix/<티켓번호>-<짧은_설명>`  | 배포된 버전에서 긴급하게 수정해야 하는 버그 처리 브랜치 |

---

## 커밋 컨벤션

- **형식:** `<타입>: <변경 사항 요약>`
- **타입 예시:**
  - **feat:** 새로운 기능 추가  
    ex) `feat: 병원 디테일 페이지 추가`
  - **fix:** 버그 수정  
    ex) `fix: 병원 리스트 필터 버그 수정`
  - **docs:** 문서 수정  
    ex) `docs: README 업데이트`
  - **style:** 코드 포맷팅, 스타일 변경 (로직 변경 없음)  
    ex) `style: 코드 포맷팅 적용`
  - **refactor:** 코드 리팩토링 (기능 변경 없음)  
    ex) `refactor: API 데이터 병합 로직 개선`
  - **test:** 테스트 코드 추가/수정  
    ex) `test: 병원 데이터 API 테스트 추가`
  - **chore:** 기타 잡다한 변경 (빌드, 패키지 등)  
    ex) `chore: package.json 스크립트 업데이트`

---

```
medichip
├─ eslint.config.mjs
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ src
│  ├─ app
│  │  ├─ emergency
│  │  │  └─ page.tsx
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ hospital
│  │  │  └─ page.tsx
│  │  ├─ index.tsx
│  │  ├─ layout.tsx
│  │  ├─ location
│  │  │  └─ page.tsx
│  │  └─ page.tsx
│  ├─ components
│  │  ├─ Common
│  │  │  ├─ Footer.tsx
│  │  │  └─ Header.tsx
│  │  ├─ Emergency
│  │  │  ├─ EmergencyDetail.tsx
│  │  │  └─ EmergencyList.tsx
│  │  ├─ Hospital
│  │  │  ├─ HospitalDetail.tsx
│  │  │  └─ HospitalList.tsx
│  │  └─ Map
│  │     └─ KakaoMap.tsx
│  ├─ lib
│  │  ├─ apis
│  │  │  ├─ bedStatusApi.ts
│  │  │  ├─ emergencyApi.ts
│  │  │  └─ hospitalApi.ts
│  │  └─ utils
│  │     ├─ distanceCalc.ts
│  │     └─ taxiFareCalc.ts
│  └─ store
│     └─ locationStore.tsx
└─ tsconfig.json

```
