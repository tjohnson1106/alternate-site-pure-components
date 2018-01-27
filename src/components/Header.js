import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header id="header" className="alt">
        <a href="/" className="logo">
          <strong>Bracket</strong> <span>Factory</span>
        </a>
        <nav>
          <a href="#menu">Create an Experience (Do Not Press)</a>
        </nav>
      </header>
    );
  }
}

export default Header;
