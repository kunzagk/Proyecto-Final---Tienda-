import React, { useState, useContext } from 'react';
import MyContext from '../contexts/MyContext';

function Registrarte() {
  const [nombre, setNombre] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const { setData } = useContext(MyContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Insertar aqui lógica para trabajar con el backend (HITO 3)
    console.log({ nombre, username, password, fechaNacimiento });
    setData((prevData) => [...prevData, { nombre, username, password, fechaNacimiento }]);
    alert('Registro exitoso!');
    setNombre('');
    setUsername('');
    setPassword('');
    setFechaNacimiento('');
  };

  return (
    <div className='d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
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
  );
}

export default Registrarte;
