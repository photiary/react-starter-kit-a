import type { JSX } from 'react'
import { Button } from '@/components/ui/button.tsx'

type CounterButtonProps = {
  amount: number
  onClick?: () => void
  className?: string
}

export const CounterButton = ({
  amount = 0,
  ...props
}: CounterButtonProps): JSX.Element => {
  return (
    <div>
      <Button variant="outline" {...props}>
        Amount: {amount}
      </Button>
    </div>
  )
}
