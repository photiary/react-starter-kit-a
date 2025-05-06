import { useState, type JSX } from 'react'
import { House, CalendarDays, Map, Settings } from 'lucide-react'

export const TheMenuFooter = (): JSX.Element => {
  const [activeIcon, setActiveIcon] = useState<string | null>(null)

  const handleIconClick = (iconName: string) => {
    setActiveIcon(iconName === activeIcon ? null : iconName)
  }

  return (
    <div className="sticky bottom-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-sm border-t border-gray-200 py-2 z-50">
      <div className="container mx-auto flex justify-around items-center">
        <div className="flex flex-col items-center cursor-pointer" onClick={() => handleIconClick('home')}>
          <div>
            <House size={36} className={activeIcon === 'home' ? 'text-blue-500' : ''} />
          </div>
          <span className="text-xs mt-1">홈</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => handleIconClick('schedule')}>
          <div>
            <CalendarDays size={36} className={activeIcon === 'schedule' ? 'text-blue-500' : ''} />
          </div>
          <span className="text-xs mt-1">스케줄</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => handleIconClick('map')}>
          <div>
            <Map size={36} className={activeIcon === 'map' ? 'text-blue-500' : ''} />
          </div>
          <span className="text-xs mt-1">지도</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => handleIconClick('settings')}>
          <div>
            <Settings size={36} className={activeIcon === 'settings' ? 'text-blue-500' : ''} />
          </div>
          <span className="text-xs mt-1">설정</span>
        </div>
      </div>
    </div>
  )
}
