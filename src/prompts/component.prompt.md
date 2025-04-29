# Component 생성 Prompt

## 1. 기본 규칙

- 최우선으로 '1. 기본 규칙'을 반드시 준수한다.

### UI Component

- CSS Class는 Tailwindcss를 반드시 사용한다.
- Markup 디자인은 ![Component](UserCard.prompt.svg) 이다.
- `src/features/domain/ui/$[fileName].tsx`로 생성하기 전에 리소스 존재를 확인한다.
- 리소스가 존재하면 해당 리소스를 수정한다. 없으면, 새로 생성한다.
- 리소스가 존재하면 `$[paramName]`는 props로 정의한다. 
- UI를 구성하는 Component는 props로 부모 Component에서 전달받은 것을 반드시 사용한다.

### Data binding Component

- `src/features/domain/$[fileName].tsx`로 생성한다.
- Store에 정의한 데이터를 호출하여 UI Component에 전달한다.

### Storybook

- UI Component만 Storybook을 생성한다.
- Storybook 구조는 Template 리소스 `src/stories/*`를 참고한다.
