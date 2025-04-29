import type { JSX } from 'react'
import { CounterButton } from '@/features/counter/components/ui/CounterButton.tsx'
import { useAppDispatch, useAppSelector } from '@/app/hooks.ts'
import { incrementAsync, selectCount } from '@/features/counter/counterSlice.ts'

export const CounterButtonGroup = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)

  return (
    <div className="flex flex-col gap-4">
      <CounterButton
        amount={count}
        onClick={() => dispatch(incrementAsync(1))}
      ></CounterButton>
      <CounterButton
        amount={count}
        onClick={() => dispatch(incrementAsync(1))}
      ></CounterButton>
    </div>
  )
}
