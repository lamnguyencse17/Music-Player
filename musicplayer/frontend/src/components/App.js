import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Header } from "./layout/Header";
import { Sidenav } from "./layout/Sidenav";
import { Body } from "./layout/Body";
import { Footer } from "./layout/Footer";

import {Provider} from 'react-redux';
import store from '../store';

class App extends Component {
  render() {
      return (<Provider store={store}>
        <Fragment>
          <div className="row" style={{"height": "93%", "width": "100%"}}>
            <div className="col-sm-2" style={{"paddingRight": "0", "height": "100%"}}>
              <Sidenav />
            </div>
            <div className="col-sm-10" style={div_outer_style}>
              <div className="container-fluid" style={div_outer_style}>
                <Header />
                <Body />
              </div>
            </div>
          </div>
          <Footer />
        </Fragment>
      </Provider>);
  }
}

const div_outer_style = {
  paddingLeft: '0',
  paddingRight: '0'
}


ReactDOM.render(<App />, document.getElementById("app"));
