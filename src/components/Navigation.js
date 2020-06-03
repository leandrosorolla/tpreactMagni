import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {instrumentos} from '../datos/instrumentos.json';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Tarjeta from "./Tarjeta";

export default class Navigation extends Component {
constructor(props) {
  super(props);
  this.state={
    instrumentos,
  }
  }

 
  render() {



    return (
      <React.Fragment>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/home"> Home </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/productos"> Productos </Nav.Link>
            <Nav.Link href="/map"> Donde Estamos </Nav.Link>
          </Nav>
          <Form inline>
     
    </Form>
        </Navbar>
       
      </React.Fragment>
    );
  }
}
