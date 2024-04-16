import { Hono } from 'hono'

const app = new Hono()

app.get('/',async (c) => {
  const body = await c.req.json()
  console.log(body)
  console.log(c.req.query("param"))
  console.log(c.req.header("Authorization"))

  return c.json({
    success: true,
    message: 'Hello World!'
  })
})

export default app
