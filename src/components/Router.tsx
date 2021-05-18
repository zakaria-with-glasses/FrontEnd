import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Plan from "./MemberShip/";
import Home from "./Home";
import Credentials from "./Credentials";
import { User } from "./UserContext";

let Routes: React.FC = () => {
  const UserCont = useContext(User);
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <User.Provider value={UserCont}>
            <Route exact path="/creds" component={Credentials} />
            <Route exact path="/plans" component={Plan} />
            <Route exact path="/" component={Home} />
          </User.Provider>
        </Switch>
      </Router>
    </React.StrictMode>
  );
};



export default Routes;
