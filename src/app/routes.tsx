import { createBrowserRouter } from 'react-router'
import App from '@/App.tsx'
import { MainLayout } from '@/components/layouts/MainLayout.tsx'
import { Home } from '@/routes/Home.tsx'
import { Schedule } from '@/routes/Schedule.tsx'
import { Map } from '@/routes/Map.tsx'
import { Setting } from '@/routes/Setting.tsx'

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
