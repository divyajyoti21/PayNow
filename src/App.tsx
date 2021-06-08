import React, { useEffect, useState } from "react";
import PaymentDetails from "./PaymentDetails";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details" component={PaymentDetails} />
      </Switch>
    </Router>
  );
}

export default App;
