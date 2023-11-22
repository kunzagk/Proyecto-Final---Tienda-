import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MyContext from "../contexts/MyContext";
import Header from "../components/Header";

function Home() {
  const { data, carrito, setCarrito } = useContext(MyContext);
  const navigate = useNavigate();

  const handleVerMasClick = (id) => {
    navigate(`/pizza/${id}`);
  };

  const handleAddToCart = (pizza) => {
    const enCarritoPizza = carrito.find((item) => item.id === pizza.id);

    if (enCarritoPizza) {
      setCarrito((prevCarrito) =>
        prevCarrito.map((item) =>
          item.id === pizza.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      );
    } else {
      setCarrito((prevCarrito) => [...prevCarrito, { ...pizza, cantidad: 1 }]);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Row className="justify-content-center">
          {data.map((pizza) => (
            <Col key={pizza.id} xs="12" sm="6" md="4" lg="3" className="mb-4">
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
                <Card.Body>
                  <h4 className="text-capitalize text-center">{pizza.name}</h4>
                  <h5>Ingredientes:</h5>
                  <Card.Text>
                    <ul className="list-unstyled text-align">
                      {pizza.ingredients.map((ingredient) => (
                        <li key={ingredient}>🍕{ingredient}</li>
                      ))}
                    </ul>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <h4 className="text-center mb-3">Precio: ${pizza.price}</h4>
                  <div className="d-flex justify-content-between">
                    <Button variant="primary" onClick={() => handleVerMasClick(pizza.id)}>Ver más 👀</Button>
                    <Button variant="success" onClick={() => handleAddToCart(pizza)}>Añadir 🛒</Button>
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

export default Home;
