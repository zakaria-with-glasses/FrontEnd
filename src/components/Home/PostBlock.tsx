import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Input, Logo, Pic } from "./styles";
import logo from "../../Assets/logoicon.svg";
import avatar from "../../Assets/avatar.svg";
import mg from "../../Assets/search.svg";
import notification from "../../Assets/notifications.svg";
interface Props {
  user: string;
}

const Display = (Page: number) => {
  /*
  const [loading, setLoading] = useState(true);
  const [Posts, setPosts] = useState([]);
  const [hasMore, setMore] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:4567/", {
        params: {
          page: Page,
        },
      })
      .then((res) => {
        setPosts((prevpage) => {
          return [
            ...new Set([
              ...prevpage,
              res.data.first,
              res.data.second,
              res.data.third,
            ]),
          ];
        });
        setMore(res.data > 0);
        console.log(hasMore);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [Page]);
  return { Posts, loading, hasMore }; */
};

export let ActiveBlock: React.FC<Props> = ({ user, children }) => {
  return (
    <React.Fragment>
      <title>HomePage | Coral</title>
      <Container>
        <div>
          <Logo id="logo">
            <img src={logo} alt="Logo" />
            <span>
              <b>coral</b>
            </span>
          </Logo>
        </div>
        <div>
          <div
            style={{
              backgroundColor: "#2C333A",
              borderRadius: "9px",
              alignItems: "center",
              display: "inline-flex",
              width: "100%",
            }}
            id="search"
          >
            <div style={{ display: "inline-flex", margin: "15px" }}>
              <img src={mg} alt="search" />
            </div>
            <Input placeholder="Search a Person an Idea a Concept..."></Input>
          </div>
        </div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            margin: "15px",
          }}
        >
          <img src={avatar} alt="req" />
          <img src={notification} alt="not" />
          <Pic />
        </div>
      </Container>
    </React.Fragment>
  );
};
