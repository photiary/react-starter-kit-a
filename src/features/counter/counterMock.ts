import AxiosMockAdapter from 'axios-mock-adapter'
import { Count } from './counterAPI'
import { ApiResponse } from '@/app/api'

const countMocks = (mock: AxiosMockAdapter) => {
  mock.onGet('/api/count').reply((config) => {
    const data: ApiResponse<Count> = {
      code: 200,
      message: 'success',
      data: {
        amount: config.params?.amount || 1,
      },
    }
    return [200, data]
  })

  // API mocks 추가
}

export default countMocks
