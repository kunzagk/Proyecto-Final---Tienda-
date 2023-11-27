import React, { useContext } from 'react';
import MyContext from '../contexts/MyContext';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Perfil() {
  const { userDetails } = useContext(MyContext);

  if (!userDetails) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <p>Cargando...</p>
      </Container>
    );
  }

  return (
    <Container className="d-flex justify-content-center p-5">
      <Row>
        <Col>
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-center">Perfil</Card.Title>
              <Card.Text>
                <strong>Nombre:</strong> {userDetails.nombre}
              </Card.Text>
              <Card.Text>
                <strong>Nombre de Usuario:</strong> {userDetails.username}
              </Card.Text>
              <Card.Text>
                <strong>Fecha de Nacimiento:</strong> {userDetails.fechaNacimiento}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Perfil;
