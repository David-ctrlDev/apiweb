import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Login from '../components/Login'
import Register from '../components/Register'
//import HomePage from "../Components/HomePage";
import Search from '../components/Search'

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
            <Search/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

