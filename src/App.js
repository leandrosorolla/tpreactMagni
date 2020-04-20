import React, { Component } from "react";

import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import detalleInstrumento from "./components/detalleInstrumento";
import Map from "./components/Maps";
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}>        
        </Route>
        <Route path="/home" component={Home}> 
        </Route>
        <Route path="/detalleInstrumento/:id" component={detalleInstrumento}></Route>{" "}
        <Route path="/map" component={Map}></Route>
      </Switch>
    );
  }
}
export default App;
