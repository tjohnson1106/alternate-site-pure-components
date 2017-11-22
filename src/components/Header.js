import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header id="header" className="alt">
        <a href="index.html" className="logo">
          <strong>Bracket</strong> <span>Factory</span>
        </a>
        <nav>
          <a href="#menu">Menu</a>
        </nav>
      </header>
    );
  }
}

export default Header;
