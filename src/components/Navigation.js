import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {instrumentos} from '../datos/instrumentos.json';

export default class Navigation extends Component {
constructor(props) {
  super(props);
  this.state={
    value:"",
  }
  
  this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {   
     this.setState({value: event.target.value}); 
     console.log(this.state.value);
     
    
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
      <input type="text" id="search" value={this.state.value} onChange={this.handleChange} placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary" href={`/buscador/${this.state.value}`} >Search</Button>
    </Form>
        </Navbar>
      </React.Fragment>
    );
  }
}
