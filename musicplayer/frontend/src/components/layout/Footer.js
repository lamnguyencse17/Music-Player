import React, { Component } from "react";
import Control from "./Footer/Control";
import Detail from "./Footer/Detail";
import Volume from "./Footer/Volume";
export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="page-footer font-small light">
          <div className="row">
            <div className="col-sm-4">
              <Detail />
            </div>
            <div className="col-sm-4">
              <Control />   
            </div>
            <div className="col-sm-4">
              <Volume />
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
