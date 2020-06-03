import React, { Component } from 'react'
import {instrumentos} from '../datos/instrumentos.json';
import Navigation from './Navigation';
import Tarjeta from './Tarjeta';

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default class Productos extends Component {
    constructor(){
        super();
        this.state = {
            instrumentos,
            value:"",


        }
        this.handleChange = this.handleChange.bind(this);

    }
  
  handleChange(event) {   
     this.setState({value: event.target.value.substring(0,20)}); 
     console.log(this.state.value);
     
    }
  
    render() {
        let instru;
        let filtrado;
        const parametroId = this.state.value;
    
    console.log(this.props);
    
    console.log(this.props.match.params.value);
    console.log(this.state.instrumentos);
    const instrumentoEncontrado =this.state.instrumentos.filter(
      (inst,i) => {

            console.log(this.state.instrumentos[i]);
            return inst.instrumento.toLowerCase().includes(parametroId.toLowerCase())
      
      }
     
      );
      console.log(instrumentoEncontrado, 'encontrado');

      instru= instrumentoEncontrado.map((instrumento, i)=>{return(

                    <Tarjeta key={instrumento.id} id={instrumento.id} instrumento={instrumento.instrumento} precio={instrumento.precio} imagen={instrumento.imagen} cantidadVendida={instrumento.cantidadVendida} 
    costoEnvio={instrumento.costoEnvio} marca={instrumento.marca} descripcion={instrumento.descripcion}></Tarjeta>
            )
        });
    
    
        console.log(this.state.buscado);
        return (
            <React.Fragment>
                <Navigation ></Navigation>
                <input type="text" id="search" value={this.state.value} onChange={this.handleChange.bind(this)} placeholder="Search" className="mr-sm-2" />

                <Container fluid="md">
                    <Row>
                    {instru}

                    </Row>
                    
                </Container>
            </React.Fragment>
        );
    }
}
