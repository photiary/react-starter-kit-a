import type { JSX } from 'react'
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'

type NewNotificationCardProps = {
  title: string
  createDate: string
  newCount: number
}

/**
 * Formats a date string to a relative time string (e.g., "5분전", "2시간전", "하루전", "3일전")
 */
const formatRelativeTime = (dateString: string): string => {
  const date = dayjs(dateString)
  const now = dayjs()
  const diffInMinutes = now.diff(date, 'minute')
  const diffInHours = now.diff(date, 'hour')
  const diffInDays = now.diff(date, 'day')

  if (diffInMinutes < 60) {
    return `${diffInMinutes}분전`
  } else if (diffInHours < 24) {
    return `${diffInHours}시간전`
  } else if (diffInDays === 1) {
    return '하루전'
  } else {
    return `${diffInDays}일전`
  }
}

export const NewNotificationCard = ({
  title,
  createDate,
  newCount,
}: NewNotificationCardProps): JSX.Element => {
  const relativeTime = formatRelativeTime(createDate)

  return (
    <Card className="mobile-container relative">
      {newCount > 0 && (
        <div className="absolute -top-2 -right-2">
          <Badge variant="destructive" className="shadow-md">
            {newCount}
          </Badge>
        </div>
      )}
      <CardHeader>
        <CardTitle className="truncate text-lg">{title}</CardTitle>
      </CardHeader>
      <CardFooter>
        <p className="text-muted-foreground text-sm">{relativeTime}</p>
      </CardFooter>
    </Card>
  )
}
