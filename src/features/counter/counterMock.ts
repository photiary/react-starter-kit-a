import AxiosMockAdapter from 'axios-mock-adapter'
import { Count } from './counterAPI'

const countMocks = (mock: AxiosMockAdapter) => {
  mock.onGet('/api/count').reply((config) => {
    const data: Count = {
      data: config.params?.amount || 1,
    }
    return [200, data]
  })

  // API mocks 추가
}

export default countMocks
