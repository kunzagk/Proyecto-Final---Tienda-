import { useContext } from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import MyContext from "../contexts/MyContext";
import Header from "../components/Header";


function Carrito() {
  const { carrito, setCarrito } = useContext(MyContext);

  const handleIncrement = (id) => {
    const updatedCarrito = carrito.map((ropa) =>
      ropa.id === id ? { ...ropa, cantidad: ropa.cantidad + 1 } : ropa
    );
    setCarrito(updatedCarrito);
  };

  const handleDecrement = (id) => {
    const updatedCarrito = carrito.map((ropa) =>
      ropa.id === id ? { ...ropa, cantidad: ropa.cantidad - 1 } : ropa
    );
    setCarrito(updatedCarrito.filter((ropa) => ropa.cantidad > 0));
  };

  const totalPedido = carrito.reduce((total, ropa) => total + ropa.price * ropa.cantidad, 0);

  return (
    <>
      <Header />
      <Container>
        <h1 className="mt-5">Carrito de Compras</h1>
        {carrito.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <>
            <ListGroup>
              {carrito.map((ropa) => (
                <ListGroup.Item key={ropa.id} className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={ropa.img} alt={ropa.name} style={{ width: "100px", marginRight: "10px" }} />
                    <div>
                      <h4 className="text-capitalize ">{ropa.name}</h4>
                      <p className="text-success">${ropa.price * ropa.cantidad}</p>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center">
                      <Button variant="danger" className="me-1" onClick={() => handleDecrement(ropa.id)}>
                        -
                      </Button>
                      <p className="m-0">Cantidad: {ropa.cantidad}</p>
                      <Button variant="primary" className="ms-2" onClick={() => handleIncrement(ropa.id)}>
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
    </>
  );
}

export default Carrito;
