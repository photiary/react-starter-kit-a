import type { JSX } from 'react'
import { House, CalendarDays, Map, Settings } from 'lucide-react'
import { Link, useLocation } from 'react-router'

export const TheMenuFooter = (): JSX.Element => {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <footer className="bg-opacity-80 fixed right-0 bottom-0 left-0 z-100 border-t border-gray-200 bg-white py-2 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-around">
        <Link to="/home" className="flex cursor-pointer flex-col items-center">
          <div>
            <House
              size={36}
              className={currentPath === '/home' ? 'text-blue-500' : ''}
            />
          </div>
          <span className="mt-1 text-xs">홈</span>
        </Link>
        <Link
          to="/schedule"
          className="flex cursor-pointer flex-col items-center"
        >
          <div>
            <CalendarDays
              size={36}
              className={currentPath === '/schedule' ? 'text-blue-500' : ''}
            />
          </div>
          <span className="mt-1 text-xs">스케줄</span>
        </Link>
        <Link to="/map" className="flex cursor-pointer flex-col items-center">
          <div>
            <Map
              size={36}
              className={currentPath === '/map' ? 'text-blue-500' : ''}
            />
          </div>
          <span className="mt-1 text-xs">지도</span>
        </Link>
        <Link
          to="/setting"
          className="flex cursor-pointer flex-col items-center"
        >
          <div>
            <Settings
              size={36}
              className={currentPath === '/setting' ? 'text-blue-500' : ''}
            />
          </div>
          <span className="mt-1 text-xs">설정</span>
        </Link>
      </nav>
    </footer>
  )
}
