import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import MyContext from "../contexts/MyContext";
import Header from "../components/Header";

function Ropa() {
  const { id } = useParams();
  const { data, carrito, setCarrito } = useContext(MyContext);
  const ropa = data.find((item) => item.id === id);

  if (!ropa) {
    return <div>Producto no encontrado</div>;
  }

  const handleAddToCart = () => {
    const existingRopa = carrito.find((item) => item.id === ropa.id);

    if (existingRopa) {
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
      <div className="d-flex m-5">
        <div className="w-50">
          <img src={ropa.img} alt={ropa.name} style={{ width: "100%", height: "70%"}} />
        </div>
        <div className="w-50">
          <Card style={{ maxWidth: "400px" }}>
            <Card.Body>
              <Card.Title className="text-capitalize">{ropa.name}</Card.Title>
              <Card.Text>{ropa.desc}</Card.Text>
              <h4>Detalles:</h4>
              {ropa.ingredients && (
                <ul>
                  {ropa.ingredients.map((detail) => (
                    <li key={detail}>👕{detail}</li>
                  ))}
                </ul>
              )}
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
              <h3>Precio: ${ropa.price}</h3>
              <Button variant="danger" onClick={handleAddToCart}>
                Agregar al carrito
              </Button>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Ropa;
