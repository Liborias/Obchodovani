import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Layout.css";
import Homepage from "../homepage/Homepage"
import Trading from "../trading/Trading"


const Layout = () => (
  <Router>
    <div className="allContent">
      <div className="navigator">

        <nav>
          <ul>
            <li>
              <Link to="/">Aktuální portfolio</Link>
            </li>
            <li>
              <Link to="/trading">Historie obchodů</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="content">
        <Switch>
          <Route path="/trading">
            <Trading />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </div></Router>


);

export default Layout;
