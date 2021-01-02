import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

//import page404 from "./404";
import Admin from "./admin";
import Home from "./home";
import Loader from "./elements/Loader";


class App extends Component {
  _isMounted = false;
  state = {
    authed: false,
    loading: false,
    theme: ""
  };

  render() {
    if (this.state.theme === "light") {
      localStorage.setItem("theme", "light");
      document.getElementById("root").classList.add("light");
    }
    if (this.state.theme === "dark") {
      localStorage.setItem("theme", "dark");
      document.getElementById("root").classList.remove("light");
    }
    return this.state.loading ? (
      <div className="loader-background">
        <Loader />
      </div>
    ) : (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route component={page404} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;