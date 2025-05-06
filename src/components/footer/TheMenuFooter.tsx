import { useState, type JSX } from 'react'
import { House, CalendarDays, Map, Settings } from 'lucide-react'

export const TheMenuFooter = (): JSX.Element => {
  const [activeIcon, setActiveIcon] = useState<string | null>(null)

  const handleIconClick = (iconName: string) => {
    setActiveIcon(iconName === activeIcon ? null : iconName)
  }

  return (
    <footer className="bg-opacity-80 fixed right-0 bottom-0 left-0 z-100 border-t border-gray-200 bg-white py-2 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-around">
        <div
          className="flex cursor-pointer flex-col items-center"
          onClick={() => handleIconClick('home')}
        >
          <div>
            <House
              size={36}
              className={activeIcon === 'home' ? 'text-blue-500' : ''}
            />
          </div>
          <span className="mt-1 text-xs">홈</span>
        </div>
        <div
          className="flex cursor-pointer flex-col items-center"
          onClick={() => handleIconClick('schedule')}
        >
          <div>
            <CalendarDays
              size={36}
              className={activeIcon === 'schedule' ? 'text-blue-500' : ''}
            />
          </div>
          <span className="mt-1 text-xs">스케줄</span>
        </div>
        <div
          className="flex cursor-pointer flex-col items-center"
          onClick={() => handleIconClick('map')}
        >
          <div>
            <Map
              size={36}
              className={activeIcon === 'map' ? 'text-blue-500' : ''}
            />
          </div>
          <span className="mt-1 text-xs">지도</span>
        </div>
        <div
          className="flex cursor-pointer flex-col items-center"
          onClick={() => handleIconClick('settings')}
        >
          <div>
            <Settings
              size={36}
              className={activeIcon === 'settings' ? 'text-blue-500' : ''}
            />
          </div>
          <span className="mt-1 text-xs">설정</span>
        </div>
      </nav>
    </footer>
  )
}
