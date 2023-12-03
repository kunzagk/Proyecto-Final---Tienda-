import { http, HttpResponse } from 'msw';

// Handler para el inicio de sesión
const login = http.post('/login', async ({ request }) => {
  const user = await request.json();

  if (!user.email || !user.password) {
    return HttpResponse.json(
      { error: 'Debe ingresar todos los campos.' },
      { status: 400 }
    );
  }

  if (user.email !== 'test@test.com' || user.password !== '123456') {
    return HttpResponse.json(
      { error: 'Contraseña incorrecta.' },
      { status: 401 }
    );
  }

  return HttpResponse.json(
    { token: 'fakeToken' },
    { status: 200 }
  );
});

// Handler para el registro de usuarios
const signup = http.post('/signup', async ({ request }) => {
  const newUser = await request.json();

  if (!newUser.nombre || !newUser.username || !newUser.password || !newUser.fechaNacimiento) {
    return HttpResponse.json(
      { error: 'Todos los campos son obligatorios.' },
      { status: 400 }
    );
  }

  // Aquí podrías agregar más lógica si fuera necesario
  // Por ejemplo, verificar si el usuario ya existe

  // Devuelve una respuesta de éxito
  return HttpResponse.json(
    { message: 'Registro exitoso.', usuario: newUser },
    { status: 200 }
  );
});

// Exporta los handlers
export default [
  login,
  signup
];
