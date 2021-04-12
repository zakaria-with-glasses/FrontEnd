import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Plan from "./MemberShip/";
import Home from "./Home";

let Routes: React.FC = () => {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/plans" component={Plan} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
};

export default Routes;
