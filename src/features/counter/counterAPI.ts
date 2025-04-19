import { api } from '@/app/api'

// A mock function to mimic making an async request for data
export const fetchCount = async (amount: number = 1) => {
  const response = await api.get('/api/count', {
    params: { amount },
  })
  return response.data
}
