import { Metadata } from 'next'
import { SignUpForm } from '@/components/auth/signup-form'

export const metadata: Metadata = {
  title: '注册',
  description: '创建新账号',
}

export default function SignUpPage() {
  return (
    <div className="container relative flex items-center justify-center h-full">
      <SignUpForm />
    </div>
  )
}
