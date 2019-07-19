import React, { Component } from "react";

export class Sidenav extends Component {
  render() {
    return (
      <aside
        id="basicSidebar"
        className="pmd-sidebar bg-light pmd-z-depth"
        role="navigation"
        style={{ height: "100%" }}
      >
        <div className="navbar-header" style={{ textAlign: "center" }}>
          <a className="navbar-brand" href="#">
            Spotify
          </a>
        </div>
        <li className="list-group-item list-group-item-action">
          <a className="nav-link active" href="#">
            <span className="media-body">Home</span>
          </a>
        </li>
        <li className="list-group-item list-group-item-action">
          <a className="nav-link active" href="#">
            <span className="media-body">Search</span>
          </a>
        </li>
        <li className="list-group-item list-group-item-action">
          <a className="nav-link active" href="#">
            <span className="media-body">Library</span>
          </a>
        </li>
      </aside>
    );
  }
}

export default Sidenav;
