import React, { useContext } from 'react';
import MyContext from '../contexts/MyContext';

function Perfil() {
  const { userDetails } = useContext(MyContext);

  if (!userDetails) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Perfil</h1>
      <p>Nombre: {userDetails.nombre}</p>
      <p>Nombre de Usuario: {userDetails.username}</p>
      <p>Fecha de Nacimiento: {userDetails.fechaNacimiento}</p>
      {/* ...otros detalles que quieras mostrar */}
    </div>
  );
}

export default Perfil;
