import React, {useContext} from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { ActiveBlock } from "./PostBlock";
import {User} from "../UserContext";
import { Helmet } from "react-helmet";

const CheckToken = async () => {
  await axios.get("http://localhost:4000/", {}).then((res) => {
  });
};

const Index: React.FC = () => {
  const UserContext = useContext(User);
  return (
    <React.Fragment>
      {UserContext.user.username === "" ? (
        <Redirect to="/plans" />
      ) : (
        <div>
          <Helmet>
            <title>Home | Swap</title>
            <meta name="description" content="Skipping Homepage is MadLad" />
          </Helmet>
          <ActiveBlock user={UserContext.user}/>
        </div>
      )}
    </React.Fragment>
  );
};

export default Index;
