import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <nav id="menu">
        <ul className="links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#footer">Social</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="http://damianesteban.com">Blog</a>
          </li>
        </ul>
        <ul className="actions vertical">
          <li>
            <a href="/" className="button special fit">
              Our Work(Coming Soon)
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
