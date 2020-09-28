import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./components/layout/Layout"


function App() {
  return (
    <Router>
      <div className="mainAAAA">
        <Route path="/">
          <Layout />
        </Route>
      </div>
    </Router>

  )
}



export default App;
