import { createBrowserRouter } from 'react-router'
import App from '@/App.tsx'
import { Home } from '@/routes/home.tsx'

export const router = createBrowserRouter([
  { path: '/', Component: App },
  { path: '/home', Component: Home },
])
