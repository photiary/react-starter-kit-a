import { describe, expect, test, beforeEach } from 'vitest'
import MockAdapter from 'axios-mock-adapter'
import { api } from '@/app/api'
import { fetchCount } from './counterAPI'

describe('counterAPI', () => {
  let mockApi: MockAdapter

  beforeEach(() => {
    mockApi = new MockAdapter(api)
  })

  test('요청 데이터가 없는 기본 응답 데이터', async () => {
    const mockResponse = { data: 1 }
    mockApi
      .onGet('/api/count', { params: { amount: 1 } })
      .reply(200, mockResponse)

    const result = await fetchCount()
    expect(result).toEqual(mockResponse)
  })

  test('요청 데이터 따른 응답 데이터', async () => {
    const mockResponse = { data: 5 }
    mockApi
      .onGet('/api/count', { params: { amount: 5 } })
      .reply(200, mockResponse)

    const result = await fetchCount(5)
    expect(result).toEqual(mockResponse)
  })

  test('http status 500', async () => {
    mockApi.onGet('/api/count').reply(500)

    await expect(fetchCount()).rejects.toThrow()
  })
})
