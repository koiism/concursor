import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { logger } from '../utils'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export function startServer() {
  serve(
    {
      fetch: app.fetch,
      port: 55851,
    },
    (info) => {
      logger.info(`Server is running on http://localhost:${info.port}`)
    },
  )
}
