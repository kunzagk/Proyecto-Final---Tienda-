import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MyContext from "../contexts/MyContext";
import Header from "../components/Header";

function Tienda() {
  const { data, carrito, setCarrito } = useContext(MyContext);
  const navigate = useNavigate();

  const handleVerMasClick = (id) => {
    navigate(`/ropa/${id}`);
  };

  const handleAddToCart = (ropa) => {
    const enCarritoRopa = carrito.find((item) => item.id === ropa.id);

    if (enCarritoRopa) {
      setCarrito((prevCarrito) =>
        prevCarrito.map((item) =>
          item.id === ropa.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      );
    } else {
      setCarrito((prevCarrito) => [...prevCarrito, { ...ropa, cantidad: 1 }]);
    }
    window.alert("Producto añadido al carrito");
  };

  return (
    <>
      <Header />
      <Container>
        <Row className="justify-content-center">
          {data.map((ropa) => (
            <Col key={ropa.id} xs="12" sm="6" md="4" lg="3" className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={ropa.img} alt={ropa.name} className ="card-style-shop"/>
                <Card.Body>
                  <h4 className="text-capitalize text-center">{ropa.name}</h4>
                  <h5>Ingredientes:</h5>
                  <ul className="list-unstyled text-align">
                    {ropa.ingredients.map((ingredient) => (
                      <li key={ingredient}>👕{ingredient}</li>
                    ))}
                  </ul>
                </Card.Body>
                <Card.Footer>
                  <h4 className="text-center mb-3">Precio: ${ropa.price}</h4>
                  <div className="d-flex justify-content-between">
                    <Button variant="primary" onClick={() => handleVerMasClick(ropa.id)}>Ver más 👀</Button>
                    <Button variant="success" onClick={() => handleAddToCart(ropa)}>Añadir 🛒</Button>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Tienda;
