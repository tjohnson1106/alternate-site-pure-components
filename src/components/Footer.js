import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div class="inner">
          <ul class="icons">
            <li>
              <a
                href="https://twitter.com/BracketFactory"
                class="icon alt fa-twitter"
              >
                <span class="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/bracketfactory/"
                class="icon alt fa-facebook"
              >
                <span class="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/bracketfactory/"
               class="icon alt fa-instagram">
                <span class="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/damianesteban"
                class="icon alt fa-github"
              >
                <span class="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="#" class="icon alt fa-google-plus-circle ">
                <span class="label">Google Plus</span>
              </a>
            </li>
          </ul>
          <ul class="copyright">
            <li>Bracket Factory</li>
            <li>
              <a href="#">Code as Art Art as Code</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
