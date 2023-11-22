import { createContext, useState } from "react";

const MyContext = createContext({
  data: [],
  setData: () => {},
  carrito: [],
  setCarrito: () => {},
  totalPedido: 0,
  setTotalPedido: () => {},
});

export default MyContext;
