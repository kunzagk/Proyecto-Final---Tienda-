import React, { useContext } from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import MyContext from "../contexts/MyContext";

function Carrito() {
  const { carrito, setCarrito } = useContext(MyContext);

  const handleRemoveItem = (id) => {
    const updatedCarrito = carrito.filter((pizza) => pizza.id !== id);
    setCarrito(updatedCarrito);
  };

  const handleIncrement = (id) => {
    const updatedCarrito = carrito.map((pizza) =>
      pizza.id === id ? { ...pizza, cantidad: pizza.cantidad + 1 } : pizza
    );
    setCarrito(updatedCarrito);
  };

  const handleDecrement = (id) => {
    const updatedCarrito = carrito.map((pizza) =>
      pizza.id === id ? { ...pizza, cantidad: pizza.cantidad - 1 } : pizza
    );
    setCarrito(updatedCarrito.filter((pizza) => pizza.cantidad > 0));
  };

  const totalPedido = carrito.reduce((total, pizza) => total + pizza.price * pizza.cantidad, 0);

  return (
    <Container>
      <h1 className="mt-5">Carrito de Compras</h1>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ListGroup>
            {carrito.map((pizza) => (
              <ListGroup.Item key={pizza.id} className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <img src={pizza.img} alt={pizza.name} style={{ width: "100px", marginRight: "10px" }} />
                  <div>
                    <h4 className="text-capitalize ">{pizza.name}</h4>
                    <p className="text-success">${pizza.price * pizza.cantidad}</p>
                  </div>
                </div>
                <div>
                  <div className="d-flex align-items-center">
                    <Button variant="danger" className="me-1" onClick={() => handleDecrement(pizza.id)}>
                      -
                    </Button>
                    <p className="m-0">Cantidad: {pizza.cantidad}</p>
                    <Button variant="primary" className="ms-2" onClick={() => handleIncrement(pizza.id)}>
                      +
                    </Button>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="mt-4">
            <h4 className="mb-3">Total del Pedido: ${totalPedido}</h4>
            <Button variant="success" className="ms-2">
              Pagar Pedido 💸
            </Button>
          </div>
        </>
      )}
    </Container>
  );
}

export default Carrito;
