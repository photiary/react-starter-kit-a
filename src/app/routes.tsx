import { createBrowserRouter } from 'react-router'
import App from '@/App.tsx'
import { MainLayout } from '@/components/layouts/MainLayout.tsx'
import { Home } from '@/routes/Home.tsx'

export const router = createBrowserRouter([
  { path: '/', Component: App },
  {
    element: <MainLayout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
    ],
  },
])
