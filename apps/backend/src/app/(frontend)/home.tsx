'use client'

import React from 'react'
import { useTheme } from '@/providers/themeProvider'
import { User } from '@/payload-types'
import { useTranslations } from 'next-intl'

export default function HomePage({ user }: { user: User | null }) {
  const { theme, toggleTheme } = useTheme()
  const t = useTranslations()
  return (
    <div className="home">
      <h1>{t('hello')}, {user?.email}</h1>
      <div className="space-y-4">
        <button 
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white"
        >
          {theme === 'light' ? '浅色' : '深色'}
        </button>
      </div>
    </div>
  )
} 