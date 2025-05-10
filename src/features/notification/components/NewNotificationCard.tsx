import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import {
  fetchNotifications,
  fetchNewCount,
  selectMostRecent,
  selectNewCount,
} from '../notificationSlice'
import { NewNotificationCard as NewNotificationCardUI } from './ui/NewNotificationCard'

/**
 * Service component that fetches notification data and renders the NewNotificationCard UI component
 */
export const NewNotificationCard = () => {
  const dispatch = useAppDispatch()
  const mostRecentNotification = useAppSelector(selectMostRecent)
  const newCount = useAppSelector(selectNewCount)

  // Fetch notifications and new count on a component mount
  useEffect(() => {
    // Fetch the first page of notifications with 10 items per page
    dispatch(fetchNotifications({ rows: 10, pageNo: 1 }))
    // Fetch the count of unread notifications
    dispatch(fetchNewCount())
  }, [dispatch])

  // If there are no notifications, don't render anything
  if (!mostRecentNotification) {
    return null
  }

  return (
    <NewNotificationCardUI
      title={mostRecentNotification.title}
      createDate={mostRecentNotification.createDate}
      newCount={newCount}
    />
  )
}
