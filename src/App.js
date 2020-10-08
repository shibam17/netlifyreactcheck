import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Home from "./component/pages/Home";
import Services from "./component/pages/Services";
import Product from "./component/pages/Product";
import Signup from "./component/pages/Signup";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Product} />
          <Route path="/sign-up" exact component={Signup} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
