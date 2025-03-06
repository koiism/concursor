'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Icons } from '@/components/icons'
import { SocialAuthButtons } from './social-auth-buttons'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export function SignInForm() {
  const t = useTranslations()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const formData = new FormData(e.currentTarget)
      const email = formData.get('email') as string
      const password = formData.get('password') as string

      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        toast.error(t('auth.invalidCredentials'))
        return
      }

      router.push('/')
      toast.success(t('auth.welcomeBack'))
    } catch (error) {
      console.error('Failed to sign in:', error)
      toast.error(t('auth.signInError'))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full sm:w-[350px]">
      <CardHeader className="space-y-2 text-center">
        <Icons.logo className="mx-auto h-6 w-6" />
        <h1 className="text-2xl font-semibold tracking-tight">{t('auth.welcomeBack')}</h1>
        <p className="text-sm text-muted-foreground">{t('auth.loginWithSocial')}</p>
      </CardHeader>
      <CardContent className="grid gap-4">
        <SocialAuthButtons />
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              {t('auth.orContinueWith')}
            </span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-2">
          <Input
            id="email"
            name="email"
            placeholder="name@example.com"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            disabled={isLoading}
            required
          />
          <Input
            id="password"
            name="password"
            placeholder={t('auth.password')}
            type="password"
            autoComplete="current-password"
            disabled={isLoading}
            required
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading && (
              <Icons.loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            {t('auth.login')}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2 text-center">
        <Link
          href="/forgot-password"
          className="text-sm text-muted-foreground underline underline-offset-4 hover:text-primary"
        >
          {t('auth.forgotPassword')}
        </Link>
        <Link
          href="/signup"
          className="text-sm text-muted-foreground underline underline-offset-4 hover:text-primary"
        >
          {t('auth.noAccount')}
        </Link>
      </CardFooter>
    </Card>
  )
} 