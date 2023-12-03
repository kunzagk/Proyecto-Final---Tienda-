import { rest } from 'msw';
import mockUser from './mockUser';

export const handlers = [
  // Intercepta la solicitud de inicio de sesión
  rest.post('/api/login', (req, res, ctx) => {
    const { email, password } = req.body;

    // Comprueba si las credenciales son correctas
    if (email === mockUser.email && password === mockUser.password) {
      return res(
        ctx.status(200),
        ctx.json({ message: 'Inicio de sesión exitoso' })
      );
    } else {
      return res(
        ctx.status(403),
        ctx.json({ message: 'Credenciales incorrectas' })
      );
    }
  }),
  // Aquí puedes agregar más manejadores para otras solicitudes
]