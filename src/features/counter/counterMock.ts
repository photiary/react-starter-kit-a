import AxiosMockAdapter from 'axios-mock-adapter'

const countMocks = (mock: AxiosMockAdapter) => {
  mock.onGet('/api/count').reply((config) => {
    const data = config.params?.amount || 1
    return [200, { data }]
  })
}

export default countMocks
