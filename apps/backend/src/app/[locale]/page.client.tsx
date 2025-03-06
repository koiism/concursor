'use client'

import { useUser } from '@/providers/userProvider'

export default function HomePage() {
  const { user } = useUser()
  
  return (
    <div>
      {user ? (
        <p>欢迎回来, {user.email}</p>
      ) : (
        <p>请登录</p>
      )}
    </div>
  )
}
