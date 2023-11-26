
import { http, HttpResponse }from 'msw'

const login = http.post('/login', async ({request}) => {
const user = await request.json()

if (!user.email || !user.password) {
  return HttpResponse.json(
    {error: 'Debe ingresra todos los campos.'},
    {status: 404 }
    )
  }

  if (user.email !== 'test@test.com' || user.password !== '123456') {
    return HttpResponse.json(
      {error: 'contraseña incorrecta.'},
      {status: 404 }
      )
    }

  return HttpResponse.json(
  {token: 'fackeToken'},
  {status: 200}
  )
})

export default [
  login
]