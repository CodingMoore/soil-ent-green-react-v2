import  React from "react";
import Header from "./Header";
import PlantControl from "./PlantControl";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../App.scss";

function App() {
  return (
    <Router>
      <div id="body">
        <div className="container">
            <Header />
          <Switch>
            <Route path = "/signin">
              <Signin />
            </Route>
            <Route path = "/">
              <PlantControl />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
