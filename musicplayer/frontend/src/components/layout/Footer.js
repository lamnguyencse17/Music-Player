import React, { Component } from "react";
import Control from "./Footer/Control";
export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="page-footer font-small light">
          <div className="row">
            <div className="col-sm-4">
              <h3>Detail</h3>
            </div>
            <div className="col-sm-4">
              <Control/>
            </div>
            <div className="col-sm-4">
              <h3>Volume</h3>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
