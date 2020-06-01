import React, { Component } from "react";

import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import detalleInstrumento from "./components/detalleInstrumento";
import Map from "./components/Maps";
import Productos from "./components/Productos"
import Buscador from "./components/Buscador";
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}>        
        </Route>
        <Route path="/Home" component={Home}> 
        </Route>
        <Route path="/productos" component={Productos}> 
        </Route>
        <Route path="/detalleInstrumento/:id" component={detalleInstrumento}></Route>{" "}
        <Route path="/map" component={Map}></Route>
        <Route path="/buscador/:value" component={Buscador}></Route>

      </Switch>
    );
  }
}
export default App;
