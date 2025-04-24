import simpleInstance from './axiosInstances'

export const api = simpleInstance

export interface ApiResponse<T> {
  code: number
  message: string
  data: T
}
