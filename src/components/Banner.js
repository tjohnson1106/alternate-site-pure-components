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
              NYC Based Mobile and Progressive Web Applications<br />
              Building For Tomorrow Right Now
            </p>
            <ul className="actions">
              <li>
                <a href="http://damianesteban.com/" className="button next scrolly">
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
