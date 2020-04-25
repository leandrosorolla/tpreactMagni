import React, { Component } from "react";
import { instrumentos } from "../datos/instrumentos.json";
import Row from "react-bootstrap/Row";
//import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Navigation from "./Navigation";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
export default class detalleInstrumento extends Component {
  constructor() {
    super();
    this.state = {
      instrumentos,
    };
  }
  render() {
    const isG = "G";
    let envio;
    const parametroId = this.props.match.params.id;
    const instrumentoEncontrado = instrumentos.filter(
      (inst) => inst.id === parametroId
    );
    const descripcion = instrumentoEncontrado[0].descripcion;
    if(isG===instrumentoEncontrado[0].costoEnvio){

      envio= <Row>
 <img src={require(`../assets/images/camion.png`)}></img> Envio gratis a todo el pais
              
 </Row>   
      }else{
      envio= <Row>
        Costo de Envio Interior de Argentina: ${instrumentoEncontrado[0].costoEnvio}
       </Row>
      }
    return (
      <React.Fragment>
        <Navigation> </Navigation>
        <Container>
        <Row>
          <Col>
            <Row>
              <img
                className="imagenDetalle"
                src={require(`../assets/images/${instrumentoEncontrado[0].imagen.toLowerCase()}`)}
              >
               
              </img>
            </Row>
            <Row>
              <h6 className="descripcion"> Descripcion: </h6> 
              
              {descripcion}
            </Row>
          </Col>
          <Col className="colDos">
            <Row className="cantidadVendidos">
             
              {instrumentoEncontrado[0].cantidadVendida}
              vendidos
            </Row>
            <Row>
              <h2> {instrumentoEncontrado[0].instrumento} </h2>
            </Row>
            <Row>
              <h3> $ {instrumentoEncontrado[0].precio} </h3>
            </Row>
            <Row>
              <h4> Marca: {instrumentoEncontrado[0].marca} </h4>
            </Row>
            <Row>
              <h4> Modelo: {instrumentoEncontrado[0].modelo} </h4>
            </Row>
            {envio}
          </Col>
        </Row>
        <Row>
              <Col>
                <Nav.Link href="/productos">
                  <h3>Volver</h3>
                </Nav.Link>
              </Col>
            </Row>
            </Container>
      </React.Fragment>
    );
  }
}
