import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicRoute, PrivateRoute } from './routes';
import Navigation from "./components/Navbar";
import Home from "./views/Home";
import Ropa from "../src/views/ropa";
import Carrito from "./views/Carrito";
import MyContext from "./contexts/MyContext";
import NotFound from "./views/NotFound";
import Login from './views/Login';
import Tienda from "./views/Tienda";
import Registrarte from './views/Registrarte';
import Perfil from './views/Perfil';

function App() {
  const [data, setData] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [totalPedido, setTotalPedido] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const logout = () => {
    setIsAuthenticated(false);
    setUserDetails(null);
  }

  // Cambiado para apuntar a la ruta mockeada
  const getData = async () => {
    try {
      const response = await fetch('/ropa');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const allState = {
    data,
    setData,
    carrito,
    setCarrito,
    totalPedido,
    setTotalPedido,
    isAuthenticated,
    setIsAuthenticated,
    userDetails,
    setUserDetails,
    logout,
  };

  return (
    <MyContext.Provider value={allState}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<PublicRoute><Home /></PublicRoute>}/>
          <Route path="/carrito" element={<PrivateRoute><Carrito /></PrivateRoute>}/>
          <Route path="/ropa/:id" element={<PublicRoute><Ropa /></PublicRoute>} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/ropa" element={<PublicRoute><Tienda /></PublicRoute>} />
          <Route path="/registrarte" element={<PublicRoute><Registrarte /></PublicRoute>} />
          <Route path="/perfil" element={<PrivateRoute><Perfil /></PrivateRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
