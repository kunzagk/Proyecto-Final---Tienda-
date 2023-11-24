import React, { useContext } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import MyContext from "../contexts/MyContext";

function Navigation() {
  const isActiveLink = ({ isActive }) => {
    const styleActive = "text-decoration-none me-3";
    return isActive
      ? `text-white fw-bold ${styleActive}`
      : `text-white ${styleActive}`;
  };

  const { carrito } = useContext(MyContext);

  const navbarStyle = {
    backgroundColor: "#000000"
  };

  return (
    <Navbar expand="lg" style={navbarStyle}>
      <Container>
        <Navbar.Collapse className="justify-content-end">
          <Nav className = "mx-auto">
            <NavLink to="/" className={isActiveLink}>Home</NavLink>
            <NavLink to="/registrarte" className={isActiveLink}>Registrarte</NavLink>
            <NavLink to="/iniciar-sesion" className={isActiveLink}>Iniciar Sesión</NavLink>
            <NavLink to="/carrito" className={isActiveLink}>Carrito</NavLink>
            <NavLink to="/tienda" className={isActiveLink}>Tienda</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
