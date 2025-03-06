import { Metadata } from 'next'
import { Link } from '@/i18n/routing'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Icons } from '@/components/icons'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: '登录',
  description: '使用电子邮件或社交账号登录',
}

export default function SignInPage() {
  const t = useTranslations()

  return (
    <div className="container relative flex items-center justify-center h-full">
      <Card className="w-full sm:w-[350px]">
        <CardHeader className="space-y-2 text-center">
          <Icons.logo className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">{t('auth.welcomeBack')}</h1>
          <p className="text-sm text-muted-foreground">{t('auth.loginWithSocial')}</p>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-4">
            <Button variant="outline" type="button">
              <Icons.google className="mr-2 h-4 w-4" />
              {t('auth.continueWithGoogle')}
            </Button>
            <Button variant="outline" type="button">
              <Icons.gitHub className="mr-2 h-4 w-4" />
              {t('auth.continueWithGithub')}
            </Button>
          </div>
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
          <div className="grid gap-2">
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
            <Input
              id="password"
              placeholder={t('auth.password')}
              type="password"
              autoComplete="current-password"
            />
          </div>
          <Button>{t('auth.login')}</Button>
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
    </div>
  )
}
