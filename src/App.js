import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import NoMatch from "./components/nomatch";
// import { Navmenubar } from "./components/navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Navmenubar /> */}
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
