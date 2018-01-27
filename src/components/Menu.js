import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <nav id="menu">
        <ul className="links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#social">Social</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="http://damianesteban.com">Blog</a>
          </li>
        </ul>
        <ul className="actions vertical">
          <li>
            <a href="#" className="button special fit">
              Our Work(Coming Soon)
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;

// import { Route, HashRouter, NavLink, Switch } from "react-router-dom";

// class Menu extends Component {
//   render() {
//     return (
//       <nav id="menu">
//         <ul className="links">
//           <li>
//             <NavLink exact to="/" activeClassName={activeClassName}>
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/Footer" activeClassName={activeClassName}>
//               Social
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/Contact" activeClassName={activeClassName}>
//               Contact
//             </NavLink>
//           </li>
//           <li>
//             <a href="http://damianesteban.com/" />
//             Blog
//           </li>
//         </ul>
//         <ul className="actions vertical">
//           <li>
//             <a href="#" className="button special fit">
//               Our Work(Coming Soon)
//             </a>
//           </li>
//         </ul>
//       </nav>
//     );
//   }
// }

// const MenuRouting = () => (
//   <HashRouter>
//     {" "}
//     <Switch>
//       <Route exact path="/" component={Rout} />
//       <Route path="/Footer" component={Rout} />
//       <Route path="/Contacts" component={Rout} />
//     </Switch>
//   </HashRouter>
// );

// export default MenuRouting;
