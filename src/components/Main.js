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
              <a href="landing.html" className="link">
                iOS
              </a>
            </h3>
            <p>iPhone iPad Apple Watch </p>
          </header>
        </article>
        <article>
          <span className="image">
            <img src="../images/Web.jpg" alt="" />
          </span>
          <header className="major">
            <h3>
              <a href="landing.html" className="link">
                Web
              </a>
            </h3>
            <p>feugiat amet tempus</p>
          </header>
        </article>
        <article>
          <span className="image">
            {" "}
            <img src="../images/design.jpg" alt="" />
          </span>
          <header className="major">
            <h3>
              <a href="landing.html" className="link">
                Design
              </a>
            </h3>
            <p>Lorem etiam nullam</p>
          </header>
        </article>
        <article>
          <span className="image">
            <img src="../images/android.jpg" alt="" />
          </span>
          <header className="major">
            <h3>
              <a href="landing.html" className="link">
                Android
              </a>
            </h3>
            <p>Nisl sed aliquam</p>
          </header>
        </article>
        <article>
          <span className="image">
            <img src="../images/resources.jpg" alt="" />
          </span>
          <header className="major">
            <h3>
              <a href="landing.html" className="link">
                Resources
              </a>
            </h3>
            <p>Ipsum dolor sit amet</p>
          </header>
        </article>
        <article>
          <span className="image">
            <img src="../images/articles.jpg" alt="" />
          </span>
          <header className="major">
            <h3>
              <a href="landing.html" className="link">
                Articles
              </a>
            </h3>
            <p>Feugiat amet tempus</p>
          </header>
        </article>
      </section>
    );
  }
}

export default Main;
