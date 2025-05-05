import { createBrowserRouter } from 'react-router'
import App from '@/App.tsx'
import { Home } from '@/routes/home.tsx'

const router = createBrowserRouter([
  { path: '/', Component: App },
  { path: '/home', Component: Home },
])

export default router
