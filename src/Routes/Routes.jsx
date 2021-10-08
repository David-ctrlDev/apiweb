import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Login from '../components/Login'
import Register from '../components/Register'
import HomePage from "../components/HomePage";
//import Search from '../components/Search'

export default function Routes() {

  return (
    <Router basename = "/">
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/Register">
            <Register/>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/Home/:token">
            <HomePage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

