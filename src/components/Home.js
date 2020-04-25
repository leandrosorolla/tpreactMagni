import React, { Component } from 'react'
import Navigation from './Navigation'
export default class Home extends Component {
    render() {
        return (
            <React.Fragment>

            <Navigation></Navigation>
            <h1 className="titulo">Musical Hendrix</h1>
            <div className="contenido">
              Musical Hendrix es una tienda de instrumentos musicales con ya más de
              15 años de experiencia. Tenemos el conocimiento y la capacidad como
              para informarte acerca de las mejores elecciones para tu compra
              musical.
            </div>
          </React.Fragment>
        )
    }
}
