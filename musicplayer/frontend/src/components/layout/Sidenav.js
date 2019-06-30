import React, { Component } from "react";

export class Sidenav extends Component {
  render() {
    return (
        <div className="sidebar">
            <ul className="list-group">
                <li class="list-group-item">
                    <a>Something</a>
                </li>
                <li class="list-group-item">
                    <a>In</a>
                </li>
            </ul>
        </div>
    );
  }
}

export default Sidenav;
