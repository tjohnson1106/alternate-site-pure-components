import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <nav id="menu">
        <ul className="links">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="landing.html">Social</a>
          </li>
          <li>
            <a href="generic.html">Contact</a>
          </li>
          <li>
            <a href="elements.html">Blog</a>
          </li>
        </ul>
        <ul className="actions vertical">
          <li>
            <a href="#" className="button special fit">
              Our Work(Coming Soon)
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
