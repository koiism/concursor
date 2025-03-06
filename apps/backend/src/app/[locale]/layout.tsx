import React from 'react'
import '@/global.css'
import { ThemeProvider } from '@/providers/themeProvider'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { Header } from '@/components/Header'
import { cn } from '@/lib/utils'
import { UserProvider } from '@/providers/userProvider'
import { headers } from 'next/headers'
import { getPayload } from 'payload'
import config from '@/payload.config'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  // 验证 locale 是否有效
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // 启用静态渲染
  setRequestLocale(locale)

  const messages = await getMessages()

  // 获取用户信息
  const headersList = await headers()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers: headersList })

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={cn('min-h-screen bg-background font-sans antialiased')}>
        <ThemeProvider>
          <UserProvider user={user}>
            <NextIntlClientProvider messages={messages} locale={locale}>
              <Header />
              <main className="container mx-auto">{children}</main>
            </NextIntlClientProvider>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
