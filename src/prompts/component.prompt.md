# Prompt for Component layer generate

## 1. Basic rule

- Component의 기본 구조는 `src/prompts/Template.tsx`를 따른다.
- Use Tailwindcss.
- Style CSS를 추가할 경우, Component와 같은 위치에 `./{ComponentName}.css`를 생성하고 Style를 정의한다.
- Generate Storybook.
- 최우선으로 '1. 기본 규칙'을 반드시 준수한다.

### Common UI Component Layer

- `Button`, `Dialog`와 같이 모든 도메인에서 참조 가능한 Component
- `src/components/{feature}/`에 생성한다.

### UI Component Layer

- `src/features/{domain}/ui/{ComponentName}.tsx`로 생성하기 전에 리소스 존재를 확인한다.
- 리소스가 존재하면 해당 리소스를 수정한다. 없으면, 새로 생성한다.
- 리소스가 존재하면 `{paramName}`는 props로 정의한다.
- UI를 구성하는 Component는 props로 부모 Component에서 전달받은 것을 반드시 사용한다.

### Service Component Layer

- `src/features/{domain}/{ComponentName}.tsx`로 생성한다.
- Store에 정의한 데이터를 호출하여 UI Component에 전달한다.

### Page Component Layer

- `src/pages/{RouteName}/{ComponentName}.tsx`로 생성한다.
- Common UI Component, UI Component, Service Component를 사용하여 화면을 구성한다.

### Storybook

- UI Component Layer는 Storybook을 생성한다.
- Storybook 구조는 Template 리소스 `src/stories/*`를 참고한다.
- Storybook은 UI Component와 같은 위치에 `./{ComponentName}.stories.ts`로 생성한다.
