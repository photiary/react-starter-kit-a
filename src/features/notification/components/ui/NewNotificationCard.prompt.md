# Prompt for UI Component generate

## Basic feature

- domain: notification

## Features

- ComponentName: `./NewNotificationCard.tsx`
- 'shadcn/ui' `<Card />`를 이용한다.
- props: title, createDate, newCount
- `<Card />` class='mobile-container' 추가

### title

- 카드의 가로보다 넘어가면 '...' 말줄임표로 표시한다.

### createDate

- string
- dayjs 패키지이용하여 몇분전, 몇시간전, 하루전, 몇일전으로 표시한다.

### newCount 표시

- 'shadcn/ui' `<Badge />`를 이용한다.
- 위치는 카드 영역에서 `-top-2 -right-2` 밖에 표시한다.
- 색상은 빨강생으로 표시한다.
- 그림자
