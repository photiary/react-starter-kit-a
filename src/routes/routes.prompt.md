# Prompt for React Router Configuring Routes

# 1. Basic rule

- Config file `src/app/routes.tsx`
- Layout에 정의한 Component가 없다면, 기능이 없는 `src/prompts/Template.tsx` 구조의 Skeleton Component를 생성한다.

# 2. Link

- /home
- /schedule
- /map
- /setting

# 3. Layout

- Home

```
MainLayout.tsx
└─ Home.tsx
    ├─ src/features/notifiaction/NotificationCard.tsx
    └─ src/features/event/EventList.tsx
```

- Schedule

```
MainLayout.tsx
└─ Schedule.tsx
```

- Map

```
MainLayout.tsx
└─ Map.tsx
```

- Setting

```
MainLayout.tsx
└─ Setting.tsx
```
