import React, { Component } from "react";

export class Music extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <h2>Album Cover</h2>
          </div>
          <div className="col-sm-7" style={{ paddingRight: "0" }}>
            <h2>Actual Playlist Here</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Music;
