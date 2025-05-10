# React Style Guide for Application

This document outlines the coding standards, architectural patterns, and best practices for the Mobile app.

## Technology Stack

### Frontend

- **TypeScript** for language
- **React v19** for building user interfaces
- **React Router v7** for routing
- **Tailwindcss v4** for utility-first styling
- **Vite v6** for frontend tooling and development environment

### Testing

- **vitest v3** for test framework
- **axios-mock-adapter** for Mocking an API request
- **Storybook v8** for a UI Component test framework

### Excluded Technologies

- **DO NOT use Jest**: use vitest instead
- **DO NOT use react-router-dom**: use react-router instead

### Excluded Prompt

Ignore the `*.prompt.md` resources defined in `src/prompts/prompt.ignore`.

## Architectural Patterns

### Package Structure

```
src/
├─ app/
│  ├─ api.ts
│  ├─ axiosInstances.ts
│  └─ mock.ts
├─ assets/                  # Style resources
├─ components/              # Common components
│  └─ ui/                   # 'shadcn/ui' components **DO NOT edit**
├─ features/                # Domain business components, store, api and hook
│  ├─ counter/              # Pattern template **DO NOT edit**
│  └─ user/                 # User domain
├─ prompts/                 # Prompt you should follow
├─ pages/                   # Page components
└─ stories/                 # Storybook template **DO NOT edit**
```

### Layered Architecture

The application follows a strict layered architecture with a clear flow of control

- **API call Layer**: Backend Http request API call, use the Axios defined in `src/app/api.ts`
- **Store Layer**: Manages the global application state using state management Redux
- **UI Component Layer**: Contains the visual components presented to users, including buttons, forms, and layouts.
  **DO NOT access Store Layer**
- **Service Component Layer**: Acts as an intermediary between the store layer and the UI component layer, handling business logic, data transformation, validation.
  **DO NOT access API Layer**

The flow of control should always follow the pattern:

1. `src/prompts/guideline.prompt.md`
2. API call Layer (`src/prompts/api.prompt.md`)
3. Store Layer (`src/prompts/store.prompt.md`)
4. Component Layer (`src/prompts/component.prompt.md`)

## Common Rules

- All props, params, and strings can contain **KOREAN**.

## Final task plan

All tasks are done and **Should be RUN** the prettier script.

```shell
# Prettier script
pnpm format
```
