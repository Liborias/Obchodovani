import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/layout/Layout"


function App() {
  return (
        <Router>
      <div className="mainAAAA">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

          <Route path="/">
            <Layout />
          </Route>
      </div>
    </Router>

  )       
}



export default App;
