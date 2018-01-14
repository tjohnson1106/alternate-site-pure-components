import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div class="inner">
          <section>
            <form method="post" action="#">
              <div class="field half first">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div class="field half">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div class="field">
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="6" />
              </div>
              <ul class="actions">
                <li>
                  <input type="submit" value="Send Message" class="special" />
                </li>
                <li>
                  <input type="reset" value="Clear" />
                </li>
              </ul>
            </form>
          </section>
          <section class="split">
            <section>
              <div class="contact-method">
                <span class="icon alt fa-envelope" />
                <h3>Email</h3>
                <a href="#">info@bracketfactory.com</a>
              </div>
            </section>
            <section>
              <div class="contact-method">
                <span class="icon alt fa-phone" />
                <h3>Phone</h3>
                <span> (646) 481-0317 </span>
              </div>
            </section>
            <section>
              <div class="contact-method">
                <span class="icon alt fa-home" />
                <h3>Address</h3>
                <span>
                  323 East 21st Street<br />
                  New York, NY 10010<br />
                </span>
              </div>
            </section>
          </section>
        </div>
      </section>
    );
  }
}

export default Contact;
