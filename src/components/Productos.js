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
            buscado:""
        }
       
    }
    buscador=(instrumento)=>{
        this.setState(
            {buscado: instrumento}
        );
    }
    render() {
        
        const instrumentos = this.state.instrumentos.map((instrumento, i)=>{return(
            <Tarjeta key={instrumento.id} id={instrumento.id} instrumento={instrumento.instrumento} precio={instrumento.precio} imagen={instrumento.imagen} cantidadVendida={instrumento.cantidadVendida} 
            costoEnvio={instrumento.costoEnvio} marca={instrumento.marca} descripcion={instrumento.descripcion}></Tarjeta>
            )
        })
        console.log(this.state.buscado);
        return (
            <React.Fragment>
                <Navigation ></Navigation>
                <Container fluid="md">
                    <Row>
                        <Col>
                            {instrumentos}
                        </Col>
                    </Row>
                    
                </Container>
            </React.Fragment>
        );
    }
}
