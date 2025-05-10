import type { JSX } from 'react'
import { NewNotificationCard } from '@/features/notification/components/NewNotificationCard.tsx'

export const Home = (): JSX.Element => {
  return (
    <div>
      <h1 className="text-2xl">🚀Hello Home!</h1>
      <NewNotificationCard />
    </div>
  )
}
