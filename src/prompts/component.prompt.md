# Component 생성 Prompt

## 1. 기본 규칙

### Component

- CSS Class는 Tailwindcss를 반드시 사용한다.
- Markup 디자인은 ![Component](UserCard.prompt.svg) 이다.
- `$[fileName].tsx`로 생성하기 전에 리소스 존재를 확인한다.
- 리소스가 존재하면 해당 리소스를 수정한다. 없으면, 새로 생성한다.
- 리소스가 존재하면 `$[paramName]`는 PROPS 또는 Store에 정의한 데이터를 바인딩한다.
- UI를 구성하는 Component에 직접 직접 Store에 접근하면 Storybook의 컴포넌트 테스트가 어렵다.
- UI를 구성하는 Component, Store에 접근하여 UI를 구성하는 Component에 데이터를 전달하는 Component를 생성한다.
- 최우선으로 '1. 기본 규칙'을 반드시 준수한다.

### Storybook

- Storybook 구조는 Template 리소스 `src/stories/*`를 참고한다.
