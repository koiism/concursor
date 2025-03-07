import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from '../utils'

const app = new Hono()

app.use('/*', cors({
  origin: 'http://localhost:3000',
}))
app.get('/', (c) => {
  return c.text('Hello ConCursor!')
})

app.get('/api/users', (c) => {
  return c.json({
    users: [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
    ],
  })
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
