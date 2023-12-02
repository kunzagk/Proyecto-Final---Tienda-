import { useState, useContext } from 'react';
import MyContext from '../contexts/MyContext';
import Header from '../components/Header';

function Login() {
const { setIsAuthenticated, setUserDetails } = useContext(MyContext);
const [email, setEmail] = useState('test@test.com');
const [password, setPassword] = useState('123456');
const [loginStatus, setLoginStatus] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoginStatus('Iniciando sesión...');

  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      setLoginStatus('Inicio de sesión exitoso');
      setIsAuthenticated(true);
      setUserDetails({ nombre: data.nombre, username: data.username, fechaNacimiento: data.fechaNacimiento });
    } else {
      setLoginStatus('Error en el inicio de sesión: ' + data.message);
    }
  } catch (error) {
    setLoginStatus('Error en el inicio de sesión: ' + error.message);
  }
};

return (
  <>
    <Header />
    <div className="d-flex justify-content-center align-items-center">
      <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
        <div className="card shadow-lg">
          <div className="card-body p-5">
            <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
            <form onSubmit={handleSubmit} className="needs-validation" noValidate autoComplete="off">
              <div className="mb-3">
                <label className="mb-2 text-muted" htmlFor="email">E-Mail Address</label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  required
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <div className="mb-2 w-100">
                  <label className="text-muted" htmlFor="password">Password</label>
                  <a href="/forgot" className="float-end">
                    Forgot Password?
                  </a>
                </div>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  name="password"
                  value = {password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="d-flex align-items-center">
                <div className="form-check">
                  <input type="checkbox" name="remember" id="remember" className="form-check-input" />
                  <label htmlFor="remember" className="form-check-label">Remember Me</label>
                </div>
                <button type="submit" className="btn btn-primary ms-auto">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="card-footer py-3 border-0">
            <div className="text-center">
              ¿No tienes una cuenta? <a href="/registrarte" className="text-dark">Registrate</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-5 text-muted">
          Bushi 2023-2023
        </div>
      </div>
      {loginStatus && (
        <div className="text-center mt-3">
          <span>{loginStatus}</span>
        </div>
    )}
    </div>
  </>
);
}

export default Login;
