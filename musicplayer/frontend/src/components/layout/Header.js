import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <ul class="nav nav-pills nav-fill">
        <li class="nav-item">
          <a class="nav-link" href="#">
            Charts
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Downloads
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Profile
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Settings
          </a>
        </li>
      </ul>
    );
  }
}

export default Header;
