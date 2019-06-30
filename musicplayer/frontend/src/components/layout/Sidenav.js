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
        <div class="navbar-header" style={{textAlign: "center"}}>
          <a class="navbar-brand" href="#">
            Spotify
          </a>
        </div>
        <li class="list-group-item list-group-item-action">
          <a class="nav-link active" href="#">
            <span class="media-body">Home</span>
          </a>
        </li>
        <li class="list-group-item list-group-item-action">
          <a class="nav-link active" href="#">
            <span class="media-body">Search</span>
          </a>
        </li>
        <li class="list-group-item list-group-item-action">
          <a class="nav-link active" href="#">
            <span class="media-body">Library</span>
          </a>
        </li>
      </aside>
    );
  }
}

export default Sidenav;
