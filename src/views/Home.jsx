import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import bushiPhoto from '../assets/bushi-minimal-black.jpg';
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs="12" className="text-center m-4">
            <h1 className='m-4'>Bienvenidos a Bushi</h1>
            <h2 className='m-4'>Walk with honor. Wear Bushi.</h2>
          </Col>
          <Col xs="12">
            <img src={bushiPhoto} alt="bushiPhoto" className="img-fluid border-0" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
