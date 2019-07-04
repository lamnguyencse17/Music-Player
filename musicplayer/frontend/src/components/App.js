import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Header } from "./layout/Header";
import { Sidenav } from "./layout/Sidenav";
import { Body } from "./layout/Body";
import { Footer } from "./layout/Footer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="row" style={{"height": "93%", "width": "100%"}}>
          <div class="col-sm-2" style={{"paddingRight": "0", "height": "100%"}}>
            <Sidenav />
          </div>
          <div class="col-sm-10" style={div_outer_style}>
            <div className="container-fluid" style={div_outer_style}>
              <Header />
              <Body />
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

const div_outer_style = {
  paddingLeft: '0',
  paddingRight: '0'
}


ReactDOM.render(<App />, document.getElementById("app"));
