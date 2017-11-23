import React, { Component } from "react";

class Filler extends Component {
  render() {
    return (
      <section id="two">
        <div className="inner">
          <header className="major">
            <h2>A Culture of Building Products</h2>
          </header>
          <p>Check Out our Tech Stack</p>
          <ul className="actions">
            <li>
              <a href="landing.html" className="button next">
                Discover the Process
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Filler;
