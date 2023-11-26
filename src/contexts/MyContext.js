import { createContext, useState } from "react";

const MyContext = createContext({
  data: [],
  setData: () => {},
  carrito: [],
  setCarrito: () => {},
  totalPedido: 0,
  setTotalPedido: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  userDetails: null,
  setUserDetails: () => {},
});


export default MyContext;
