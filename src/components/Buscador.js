import React, { Component } from "react";
import { instrumentos } from "../datos/instrumentos.json";
import Navigation from "./Navigation";
import Tarjeta from "./Tarjeta";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
export default class Buscador extends Component {
  constructor() {
    super();
    this.state = {
      instrumentos,
    };
  }
  render() {
    const parametroId = this.props.match.params.value;
    
    console.log(this.props);
    
    console.log(this.props.match.params.value);
    console.log(this.state.instrumentos);
    const bus=[];
    const instrumentoEncontrado =this.state.instrumentos.filter(
      (inst,i) => {

            console.log(this.state.instrumentos[i]);
            console.log(i);
            return inst.instrumento.toLowerCase().includes(parametroId.toLowerCase())
      
      }
     
      );
      console.log(instrumentoEncontrado);
     const instrumentos = instrumentoEncontrado.map((instrumento, i)=>{return(

                    <Tarjeta key={instrumento.id} id={instrumento.id} instrumento={instrumento.instrumento} precio={instrumento.precio} imagen={instrumento.imagen} cantidadVendida={instrumento.cantidadVendida} 
    costoEnvio={instrumento.costoEnvio} marca={instrumento.marca} descripcion={instrumento.descripcion}></Tarjeta>
            )
        });
    return (
      <React.Fragment>
        <Navigation></Navigation>
        <Container fluid="md">
            <h3>Buscando:</h3>
          <Row>
            <Col>{instrumentos}</Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
