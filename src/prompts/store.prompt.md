# Prompt for Store layer generate

## 1. Basic rules

- 리소스 이름은 `{domain}Slice.ts`로 생성한다.
- 생성한 리소스는 `src/app/store.ts`의 `combineSlices()`에 추가한다.
- 사양에 맞게 모든 Domain 안에 있는 `*API.ts`의 API를 사용한다.
- 구조는 Template 리소스 `src/features/counter`를 참고한다.
- 최우선으로 '1. 기본 규칙'을 반드시 준수한다.

## 2. 요구 형식

- Store 기능 설명
  - domain: 같은 비즈니스단위의 그룹 (src/features/domain)
  - Async | Sync

## 3. Store Prompt files

`src/features/user/userStore.prompt.md`
`src/features/notification/notificationStore.prompt.md`
