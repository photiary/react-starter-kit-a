import type { Meta, StoryObj } from '@storybook/react'
import { NewNotificationCard } from './NewNotificationCard.tsx'
import dayjs from 'dayjs'

const meta = {
  title: 'Notification/Components/NewNotificationCard',
  component: NewNotificationCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof NewNotificationCard>

export default meta
type Story = StoryObj<typeof meta>

// Default story with new notifications
export const WithNewNotifications: Story = {
  args: {
    title: '새로운 알림이 도착했습니다',
    createDate: dayjs().subtract(30, 'minute').format(), // 30 minutes ago
    newCount: 5,
  },
}

// Story without new notifications
export const WithoutNewNotifications: Story = {
  args: {
    title: '알림 내용',
    createDate: dayjs().subtract(3, 'hour').format(), // 3 hours ago
    newCount: 0,
  },
}

// Story with a long title that should be truncated
export const WithLongTitle: Story = {
  args: {
    title:
      '이것은 매우 긴 알림 제목입니다. 이 제목은 카드의 가로 길이보다 길기 때문에 말줄임표로 표시되어야 합니다.',
    createDate: dayjs().subtract(25, 'hour').format(), // 25 hours ago (1 day ago)
    newCount: 3,
  },
}

// Story with an old notification
export const OldNotification: Story = {
  args: {
    title: '오래된 알림',
    createDate: dayjs().subtract(5, 'day').format(), // 5 days ago
    newCount: 0,
  },
}
