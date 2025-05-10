import { createAppSlice } from '@/app/createAppSlice'
import {
  fetchNotificationList,
  fetchNewNotificationCount,
  updateNotificationReadStatus,
  Notification,
} from './notificationAPI'

export type NotificationSliceState = {
  notifications: Notification[]
  newCount: number
  status: 'idle' | 'loading' | 'failed'
}

const initialState: NotificationSliceState = {
  notifications: [],
  newCount: 0,
  status: 'idle',
}

export const notificationSlice = createAppSlice({
  name: 'notification',
  initialState,
  reducers: (create) => ({
    // Fetch notification list
    fetchNotifications: create.asyncThunk(
      async ({ rows, pageNo }: { rows: number; pageNo: number }) => {
        const response = await fetchNotificationList(rows, pageNo)
        return response.data
      },
      {
        pending: (state) => {
          state.status = 'loading'
        },
        fulfilled: (state, action) => {
          state.status = 'idle'
          state.notifications = action.payload
        },
        rejected: (state) => {
          state.status = 'failed'
        },
      }
    ),

    // Fetch new notification count
    fetchNewCount: create.asyncThunk(
      async () => {
        const response = await fetchNewNotificationCount()
        return response.data
      },
      {
        pending: (state) => {
          state.status = 'loading'
        },
        fulfilled: (state, action) => {
          state.status = 'idle'
          state.newCount = action.payload.count
        },
        rejected: (state) => {
          state.status = 'failed'
        },
      }
    ),

    // Update notification read status
    updateReadStatus: create.asyncThunk(
      async (id: number) => {
        await updateNotificationReadStatus(id)
        return id
      },
      {
        pending: (state) => {
          state.status = 'loading'
        },
        fulfilled: (state, action) => {
          state.status = 'idle'
          // Update the read status in the notifications array
          const notification = state.notifications.find(
            (n) => n.id === action.payload
          )
          if (notification) {
            notification.isRead = true
          }
          // Decrement the new count if it's greater than 0
          if (state.newCount > 0) {
            state.newCount -= 1
          }
        },
        rejected: (state) => {
          state.status = 'failed'
        },
      }
    ),
  }),
  selectors: {
    selectNotifications: (state) => state.notifications,
    selectNewCount: (state) => state.newCount,
    selectStatus: (state) => state.status,
    selectMostRecent: (state) =>
      state.notifications.length > 0 ? state.notifications[0] : null,
  },
})

export const { fetchNotifications, fetchNewCount, updateReadStatus } =
  notificationSlice.actions

export const {
  selectNotifications,
  selectNewCount,
  selectStatus,
  selectMostRecent,
} = notificationSlice.selectors
