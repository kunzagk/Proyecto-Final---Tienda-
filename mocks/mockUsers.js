
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

const register = http.post('/register', async ({ request }) => {
  const user = await request.json()
  if (!user.nombre || !user.email || !user.password) {
    return HttpResponse.json(
      { message: 'Completa todos los campos' },
      { status: 404 }
    )
  }

  return HttpResponse.json(
    { id: 1, email: 'registr@test.com' },
    { status: 201 }
  )
})

export default [
  login,
  register
]