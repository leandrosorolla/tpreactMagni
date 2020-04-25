import React, { Component } from "react";
import Card from "react-bootstrap/Card";


export default class Tarjeta extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    const isG = "G";
    let envio;
    //Validacion para envio
    if (isG === this.props.costoEnvio) {

      envio = (
        <Card.Text className="envioG"> 
          <img src={require(`../assets/images/camion.png`)}></img> Envio gratis
          a todo el pais
        </Card.Text>
      );
    } else {
      envio = (

        <Card.Text>
          Costo de Envio Interior de Argentina: ${this.props.precio}
        </Card.Text>
      );
    }
    return (
      <React.Fragment>
        <Card className="tarjeta">
          <Card.Body className="body">
            
                <a href={`detalleInstrumento/${this.props.id}`}>
                  >
                  <img
                    className="imagen"
                    src={require(`../assets/images/${this.props.imagen.toLowerCase()}`)}
                    aling="left"
                  />
                </a>
                <Card.Title>{this.props.instrumento}</Card.Title>
               
                  <Card.Text>
                    <h2>${this.props.precio}</h2>
                  </Card.Text>  
               
                {envio}
               
                  <Card.Text>{this.props.cantidadVendida} vendidos</Card.Text>
             
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}
