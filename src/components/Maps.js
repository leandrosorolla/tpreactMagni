import React, { Component } from 'react'
import Navigation from './Navigation';

export default class Maps extends Component {
    render() {
        return (
          <React.Fragment>
              <Navigation> </Navigation>
              <div>
              <img
                className="minAltoImg"
                src={require(`../assets/images/map.PNG`)}
              ></img>
              </div>
          </React.Fragment>
        )
    }
}
