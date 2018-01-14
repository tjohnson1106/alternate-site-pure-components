import React, { Component, StyleSheet } from "react";

class Banner extends Component {
  render() {
    return (
      <section id="banner" className="major" alt="">
        <div className="inner">
          <header className="major">
            <h1 className="tag">&lt; Implementing the Future /&gt;</h1>
          </header>
          <div className="content">
            <p>
              NYC Based Mobile and Web Application<br />
              Building For Tomorrow
            </p>
            <ul className="actions">
              <li>
                <a href="#one" className="button next scrolly">
                  Read the Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
