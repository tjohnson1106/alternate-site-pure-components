import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  Footer,
  Contact,
  Filler,
  Main,
  Banner,
  Menu,
  Header
} from "./components";

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        <Menu />

        <Banner />

        <div id="main">
          <Main />
          <Filler />

          <Contact />
        </div>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
