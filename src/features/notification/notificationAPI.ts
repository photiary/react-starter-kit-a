import { api, ApiResponse } from '@/app/api'

export interface Notification {
  id: number
  title: string
  subTitle: string
  content: string
  isRead: boolean
  createDate: string
}

export interface NotificationListResponse {
  id: number
  title: string
  subTitle: string
  content: string
  isRead: boolean
  createDate: string
}

export interface NotificationCountResponse {
  count: number
}

/**
 * 알림 목록을 조회한다. createDate DESC.
 *
 * @param rows 페이지당 항목 수
 * @param pageNo 페이지 번호
 * @returns ApiResponse<NotificationListResponse[]>
 */
export const fetchNotificationList = async (rows: number, pageNo: number) => {
  const response = await api.get('/api/notification/list', {
    params: { rows, pageNo },
  })
  return response.data as ApiResponse<NotificationListResponse[]>
}

/**
 * 읽지 않은 알림 개수를 조회한다.
 *
 * @returns ApiResponse<NotificationCountResponse>
 */
export const fetchNewNotificationCount = async () => {
  const response = await api.get('/api/notification/newCount')
  return response.data as ApiResponse<NotificationCountResponse>
}

/**
 * 알림 읽음 상태를 갱신한다.
 *
 * @param id 알림 ID
 * @returns ApiResponse<void>
 */
export const updateNotificationReadStatus = async (id: number) => {
  const response = await api.put(`/api/notification/read/${id}`)
  return response.data as ApiResponse<void>
}
