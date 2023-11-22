import { Container, Row, Col } from "react-bootstrap";
import sadPikachu from '../assets/sad_pikachu.jpg'

function NotFound() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs="12" className="text-center m-4">
          <h1 className='m-4'>Pagina no encontrada.</h1>
          <h2 className='m-4'>Lo sentimos, la página que usted está buscando no existe.</h2>
        </Col>
        <Col xs="auto">
          <img src={sadPikachu} alt="pikaTriste" />
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;