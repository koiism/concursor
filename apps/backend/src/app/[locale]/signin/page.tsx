import { Metadata } from 'next'
import { SignInForm } from '@/components/auth/signin-form'

export const metadata: Metadata = {
  title: '登录',
  description: '使用电子邮件或社交账号登录',
}

export default function SignInPage() {
  return (
    <div className="container relative flex items-center justify-center h-full">
      <SignInForm />
    </div>
  )
}
