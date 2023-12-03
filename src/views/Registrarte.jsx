import { useState, useContext } from 'react';
import MyContext from '../contexts/MyContext';
import Header from '../components/Header';

function Registrarte() {
  const [nombre, setNombre] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const { setData } = useContext(MyContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usuario = {
      nombre,
      username,
      password,
      fechaNacimiento,
    };

    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registro exitoso!');
        setNombre('');
        setUsername('');
        setPassword('');
        setFechaNacimiento('');
        // Opcionalmente, actualizar el contexto o realizar otras acciones
        setData((prevData) => [...prevData, usuario]);
      } else {
        // Manejar errores del servidor
        alert(data.error || 'Error al registrarse.');
      }
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      alert('Error al procesar el registro.');
    }
  };

  return (
    <>
      <Header />
      <div className='d-flex justify-content-center align-items-center'>
        <div className='col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9'>
          <div className='card shadow-lg'>
            <div className='card-body p-5'>
              <h1 className='fs-4 card-title fw-bold mb-4'>Registrarte</h1>
              <form onSubmit={handleSubmit} className='needs-validation' noValidate autoComplete='off'>
                <div className='mb-3'>
                  <label className='mb-2 text-muted' htmlFor='nombre'>Nombre</label>
                  <input
                    id='nombre'
                    type='text'
                    className='form-control'
                    name='nombre'
                    value={nombre}
                    required
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='mb-2 text-muted' htmlFor='username'>Nombre de Usuario</label>
                  <input
                    id='username'
                    type='text'
                    className='form-control'
                    name='username'
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='mb-2 text-muted' htmlFor='password'>Contraseña</label>
                  <input
                    id='password'
                    type='password'
                    className='form-control'
                    name='password'
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='mb-2 text-muted' htmlFor='fechaNacimiento'>Fecha de Nacimiento</label>
                  <input
                    id='fechaNacimiento'
                    type='date'
                    className='form-control'
                    name='fechaNacimiento'
                    value={fechaNacimiento}
                    required
                    onChange={(e) => setFechaNacimiento(e.target.value)}
                  />
                </div>
                <button type='submit' className='btn btn-primary ms-auto'>
                  Registrarse
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registrarte;
