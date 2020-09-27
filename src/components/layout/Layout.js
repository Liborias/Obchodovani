import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Layout.css";
import Homepage from "../homepage/Homepage"


const Layout = () => (

  <div>
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
    <div className="content">
      <Switch>
        <Route path="/">
        <Homepage />
        </Route>
        <Route path="/trading">
        <Trading />
        </Route>
      </Switch>
    </div>

  </div>
);

export default Layout;
