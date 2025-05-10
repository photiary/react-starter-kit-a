import AxiosMockAdapter from 'axios-mock-adapter'
import { ApiResponse } from '@/app/api'
import { Notification, NotificationCountResponse } from './notificationAPI'

// Sample notification data
const sampleNotifications: Notification[] = [
  {
    id: 1,
    title: '시스템 업데이트 공지',
    subTitle: '중요 알림',
    content: '시스템 업데이트가 완료되었습니다.',
    isRead: false,
    createDate: new Date(Date.now() - 864000).toISOString(),
  },
  {
    id: 2,
    title: '이벤트 안내',
    subTitle: '이벤트 알림',
    content: '새로운 이벤트가 시작되었습니다. 지금 확인해보세요!',
    isRead: true,
    createDate: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
  },
  {
    id: 3,
    title: '보안 알림',
    subTitle: '보안 알림',
    content:
      '비밀번호를 변경한지 90일이 지났습니다. 보안을 위해 비밀번호를 변경해주세요.',
    isRead: false,
    createDate: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
  },
]

// Unread notification count
let unreadCount = sampleNotifications.filter((n) => !n.isRead).length

const notificationMocks = (mock: AxiosMockAdapter) => {
  // Mock GET /api/notification/list
  mock.onGet('/api/notification/list').reply((config) => {
    const rows = config.params?.rows || 10
    const pageNo = config.params?.pageNo || 1

    // Sort by createDate DESC and paginate
    const sortedNotifications = [...sampleNotifications].sort(
      (a, b) =>
        new Date(b.createDate).getTime() - new Date(a.createDate).getTime()
    )

    const start = (pageNo - 1) * rows
    const end = start + rows
    const paginatedNotifications = sortedNotifications.slice(start, end)

    const data: ApiResponse<Notification[]> = {
      code: 200,
      message: 'success',
      data: paginatedNotifications,
    }

    return [200, data]
  })

  // Mock GET /api/notification/newCount
  mock.onGet('/api/notification/newCount').reply(() => {
    const data: ApiResponse<NotificationCountResponse> = {
      code: 200,
      message: 'success',
      data: {
        count: unreadCount,
      },
    }

    return [200, data]
  })

  // Mock PUT /api/notification/read/:id
  mock.onPut(new RegExp('/api/notification/read/\\d+')).reply((config) => {
    const id = parseInt(config.url?.split('/').pop() || '0', 10)

    // Find the notification and mark it as read
    const notification = sampleNotifications.find((n) => n.id === id)
    if (notification && !notification.isRead) {
      notification.isRead = true
      unreadCount -= 1
    }

    const data: ApiResponse<void> = {
      code: 200,
      message: 'success',
      data: undefined,
    }

    return [200, data]
  })
}

export default notificationMocks
