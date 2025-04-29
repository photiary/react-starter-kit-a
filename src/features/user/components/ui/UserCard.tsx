import type { JSX } from 'react'
import { Card, CardContent } from '@/components/ui/card.tsx'

type UserCardProps = {
  name: string
  email: string
  createDate: string
}

export const UserCard = ({
  name,
  email,
  createDate,
}: UserCardProps): JSX.Element => {
  return (
    <div>
      <Card className="w-[400px]">
        <CardContent className="flex flex-row items-start gap-6">
          {/* 프로필 이미지 */}
          <div className="w-16">
            <div className="h-16 w-16 rounded-full bg-black"></div>
          </div>

          {/* 사용자 정보 (세로 정렬) */}
          <div className="flex flex-col justify-center space-y-1">
            {/* 이름 */}
            <p className="text-sm font-medium">{name}</p>

            {/* 이메일 */}
            <p className="text-muted-foreground text-sm">
              The React Framework - created and maintained by {email}
            </p>

            {/* 가입 날짜 */}
            <div className="text-muted-foreground flex items-center text-sm">
              <span>Joined {createDate}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
