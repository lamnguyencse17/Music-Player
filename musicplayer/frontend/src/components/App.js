import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Header } from "./layout/Header";
import { Sidenav } from "./layout/Sidenav";
import { Body } from "./layout/Body";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="row" >
          <div class="col-sm-2" style={{"paddingRight": "0"}}>
            <Sidenav />
          </div>
          <div class="col-sm-10" style={{"paddingLeft": "0"}}>
            <div className="container-fluid" style={{"paddingLeft": "0"}}>
              <Header />
              <Body />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
