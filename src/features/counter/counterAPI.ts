import { api, ApiResponse } from '@/app/api'

export interface Count {
  amount: number
}

/**
 * 개수를 조회한다.
 *
 * @param amount 초기 개수
 * @returns ApiResponse<Count>
 */
export const fetchCount = async (amount: number = 1) => {
  const response = await api.get('/api/count', {
    params: { amount },
  })
  return response.data as ApiResponse<Count>
}
