import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Charts
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Downloads
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Profile
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Settings
          </a>
        </li>
      </ul>
    );
  }
}

export default Header;
