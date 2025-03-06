import createMiddleware from 'next-intl/middleware'
import {routing} from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  // 匹配需要国际化的路径
  matcher: ['/', '/(zh|en)/:path*']


} 