import React, { Component, Image } from "react";

class Main extends Component {
  render() {
    return (
      <section id="one" className="tiles">
        <article>
          <span className="image">
            <img src="../images/horizon_dark.jpg" alt="" />
          </span>
          <header className="major">
            <h3>
              <a href="/" className="link">
                iOS Applications
              </a>
            </h3>
            <p>iPhone iPad Apple Watch</p>
          </header>
        </article>
        <article>
          <span className="image">
            <img src="../images/Web.jpg" alt="" />
          </span>
          <header className="major">
            <h3>
              <a href="/" className="link">
                Progressive Web Applications
              </a>
            </h3>
            <p>Personal Enterprise Responsive</p>
          </header>
        </article>
        <article>
          <span className="image">
            {" "}
            <img src="../images/design.jpg" alt="" />
          </span>
          <header className="major">
            <h3>
              <a href="/" className="link">
                Dedicated to Design
              </a>
            </h3>
            <p>clean modern human</p>
          </header>
        </article>
        <article>
          <span className="image">
            <img src="../images/android.jpg" alt="" />
          </span>
          <header className="major">
            <h3>
              <a href="/" className="link">
                Android Applications
              </a>
            </h3>
            <p>Developing for a world of devices</p>
          </header>
        </article>
        <article>
          <span className="image">
            <img src="../images/resources.jpg" alt="" />
          </span>
          <header className="major">
            <h3>
              <a href="/" className="link">
                Cross-Platform Resources
              </a>
            </h3>
            <p>Code as Art Art as Code</p>
          </header>
        </article>
        <article>
          <span className="image">
            <img src="../images/articles.jpg" alt="" />
          </span>
          <header className="major">
            <h3>
              <a href="https://medium.com/@estebanrules" className="link">
                Articles
              </a>
            </h3>
            <p>Bleeding Edge Information</p>
          </header>
        </article>
      </section>
    );
  }
}

export default Main;
