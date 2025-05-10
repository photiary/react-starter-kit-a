import AxiosMockAdapter from 'axios-mock-adapter'
import { api as axios } from './api'
import counterMocks from '@/features/counter/counterMock'
import notificationMocks from '@/features/notification/notificationMock'

const mock = new AxiosMockAdapter(axios, { delayResponse: 200 })

counterMocks(mock)
notificationMocks(mock)
