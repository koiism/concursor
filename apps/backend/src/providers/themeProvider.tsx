'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system')

  useEffect(() => {
    // 检查本地存储中的主题设置
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleThemeChange = () => {
      if (theme === 'system') {
        document.documentElement.classList.toggle('dark', prefersDark.matches)
      }
    }

    // 监听系统主题变化
    prefersDark.addListener(handleThemeChange)

    // 根据当前主题设置应用样式
    if (theme === 'system') {
      document.documentElement.classList.toggle('dark', prefersDark.matches)
    } else {
      document.documentElement.classList.toggle('dark', theme === 'dark')
    }
    
    localStorage.setItem('theme', theme)

    return () => {
      prefersDark.removeListener(handleThemeChange)
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
