import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainNavigation from "./components/Navigation/MainNavigation";

import "./App.css";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <Switch>
        <Route path="/" exact></Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
