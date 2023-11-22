import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import MyContext from "../contexts/MyContext";

function Pizza() {
  const { id } = useParams();
  const { data, carrito, setCarrito } = useContext(MyContext);
  const pizza = data.find((pizza) => pizza.id === id);

  if (!pizza) {
    return <div>Pizza no encontrada</div>;
  }

  const handleAddToCart = () => {
    const existingPizza = carrito.find((item) => item.id === pizza.id);

    if (existingPizza) {
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
    <div className="d-flex m-5">
      <div className="w-50">
        <img src={pizza.img} alt={pizza.name} style={{ width: "100%", height: "70%"}} />
      </div>
      <div className="w-50">
        <Card style={{ maxWidth: "400px" }}>
          <Card.Body>
            <Card.Title className="text-capitalize">{pizza.name}</Card.Title>
            <Card.Text>{pizza.desc}</Card.Text>
            <h4>Ingredientes:</h4>
            <ul>
              {pizza.ingredients.map((ingredient) => (
                <li key={ingredient}>🍕{ingredient}</li>
              ))}
            </ul>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between">
            <h3>Precio: ${pizza.price}</h3>
            <Button variant="danger" onClick={handleAddToCart}>
              Agregar al carrito
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}

export default Pizza;
