import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


export default class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/home"> Home </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/productos"> Productos </Nav.Link>
            <Nav.Link href="/map"> Donde Estamos </Nav.Link>
          </Nav>
         
        </Navbar>
      </React.Fragment>
    );
  }
}
