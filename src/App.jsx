import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navbar";
import Home from "./views/Home";
import Pizza from "./views/Pizza";
import Carrito from "./views/Carrito";
import MyContext from "./contexts/MyContext";
import NotFound from "./views/NotFound";

function App() {
  const [data, setData] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [totalPedido, setTotalPedido] = useState(0);
  const pizzaJson = "/pizzas.json";

  const getData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getData(pizzaJson);
  }, []);

  const allState = {
    data,
    setData,
    carrito,
    setCarrito,
    totalPedido,
    setTotalPedido
  };

  return (
    <MyContext.Provider value={allState}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
