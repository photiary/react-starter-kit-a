import { beforeEach, describe, expect, test } from 'vitest'
import type { AppStore } from '@/app/store'
import MockAdapter from 'axios-mock-adapter'
import { api, ApiResponse } from '@/app/api'
import { makeStore } from '@/app/store'
import type { CounterSliceState } from './counterSlice'
import {
  counterSlice,
  decrement,
  increment,
  incrementByAmount,
  selectCount,
  incrementAsync,
} from './counterSlice'
import { Count } from '@/features/counter/counterAPI.ts'

type LocalTestContext = {
  store: AppStore
}

describe('Counter reducer', () => {
  const context = {} as LocalTestContext

  const mockApi = new MockAdapter(api)

  // beforeEach(() => {
  //   mockApi = new MockAdapter(api)
  // })

  beforeEach(() => {
    const initialState: CounterSliceState = {
      value: 3,
      status: 'idle',
    }

    context.store = makeStore({ counter: initialState })
  })

  test('초기상태', () => {
    expect(counterSlice.reducer(undefined, { type: 'unknown' })).toStrictEqual({
      value: 0,
      status: 'idle',
    })
  })

  test('호출-increment', () => {
    expect(selectCount(context.store.getState())).toBe(3)

    context.store.dispatch(increment())

    expect(selectCount(context.store.getState())).toBe(4)
  })

  test('호출-decrement', () => {
    expect(selectCount(context.store.getState())).toBe(3)

    context.store.dispatch(decrement())

    expect(selectCount(context.store.getState())).toBe(2)
  })

  test('호출-incrementByAmount', () => {
    expect(selectCount(context.store.getState())).toBe(3)

    context.store.dispatch(incrementByAmount(2))

    expect(selectCount(context.store.getState())).toBe(5)
  })

  test('호출-incrementAsync', () => {
    mockApi.onGet('/api/count').reply(
      (config) => {
        const data: ApiResponse<Count> = {
          code: 200,
          message: 'success',
          data: {
            amount: config.params?.amount,
          },
        }
        return [200, data]
      },
      { delay: 100 }
    )

    expect(selectCount(context.store.getState())).toBe(3)

    context.store.dispatch(incrementAsync(2)).then(() => {
      // 동기 값 비교
      expect(selectCount(context.store.getState())).toBe(5)
    })
    // 비동기 값 비교
    expect(selectCount(context.store.getState())).toBe(3)
  })
})
