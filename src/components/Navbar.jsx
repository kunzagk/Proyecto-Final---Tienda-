import React, { useContext } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import MyContext from "../contexts/MyContext";

function Navigation() {
  const { isAuthenticated, logout } = useContext(MyContext);
  const isActiveLink = ({ isActive }) => {
    const styleActive = "text-decoration-none me-3";
    return isActive
      ? `text-danger fw-bold ${styleActive}`
      : `text-white ${styleActive}`;
  };

  return (
    <Navbar expand="lg" className ="navbarStyle">
      <Container>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="mx-auto">
            <NavLink to="/" className={isActiveLink}>Home</NavLink>
            {!isAuthenticated && (
              <>
                <NavLink to="/registrarte" className={isActiveLink}>Registrarte</NavLink>
                <NavLink to="/login" className={isActiveLink}>Iniciar Sesión</NavLink>
              </>
            )}
            <NavLink to="/ropa" className={isActiveLink}>Tienda</NavLink>
            {isAuthenticated && (
              <>
                <NavLink to="/perfil" className={isActiveLink}>Perfil</NavLink>
                <NavLink to="/carrito" className={isActiveLink}>Carrito</NavLink>
                <NavLink onClick={logout} className="logoutStyle">Logout</NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
