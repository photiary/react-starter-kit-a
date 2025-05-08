import { createBrowserRouter } from 'react-router'
import App from '@/App.tsx'
import { MainLayout } from '@/components/layouts/MainLayout.tsx'
import { Home } from '@/pages/Home.tsx'
import { Schedule } from '@/pages/Schedule.tsx'
import { Map } from '@/pages/Map.tsx'
import { Setting } from '@/pages/Setting.tsx'

export const router = createBrowserRouter([
  { path: '/', Component: App },
  {
    element: <MainLayout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/schedule',
        element: <Schedule />,
      },
      {
        path: '/map',
        element: <Map />,
      },
      {
        path: '/setting',
        element: <Setting />,
      },
    ],
  },
])
