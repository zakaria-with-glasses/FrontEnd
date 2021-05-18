import React, { useState, useEffect, useRef, useCallback } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Cola,
  Colb,
  Input,
  Logo,
  Pic,
  Head,
  Block,
  Content,
} from "./styles";
import Icon from "../../Assets/logoicon.svg";
import Avatar from "../../Assets/avatar.svg";
import Mg from "../../Assets/search.svg";
import Notification from "../../Assets/notifications.svg";

interface Post {
  author: string;
  content: string;
}
interface User{
  user: {
    username: string,
  }
}

const Display = (Page: number) => {
  const [loading, setLoading] = useState(true);
  const [Posts, setPosts] = useState([]);
  const [hasMore, setMore] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:4000/", {
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
        console.error(e);
      });
  }, [Page, hasMore]);
  return { Posts, setPosts,loading, setLoading,hasMore, setMore};
};

export let ActiveBlock: React.FC<User> = ({ user, children }) => {
  const breakpoints = {
    desktop: "(min-width: 1025px)",
    tablet: "(min-width: 768px) and (max-width: 1024px)",
    phone: "(max-width: 767px)",
  };
  const isDesktop = useMediaQuery({ query: breakpoints.desktop });
  const isphone = useMediaQuery({ query: breakpoints.phone });
  const [Page, setPage] = useState(0);
  const { Posts, loading, hasMore } = Display(Page);
  const observer: any = useRef();
  const PostRef = useCallback(
    (node: any) => {
      if (loading) return;
      if (hasMore === false) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  return (
    <React.Fragment>
      {isDesktop && (
        <Container>
          <Cola>
            <div>
            <Logo id="logo">
              <img src={Icon} alt="icon" />
              <span>
                <b>dungeon</b>
              </span>
            </Logo>
            </div>
            <div id="profile">
              <div id="head">
                <Pic></Pic>
                <b>@{user.username}</b>
              </div>
            </div>
          </Cola>
          <Colb>
            <div id="search">
              <div style={{ display: "inline-flex", margin: "15px" }}>
               <img src={Mg} alt="Mg" id="img" />
              </div>
              <Input placeholder="Search a Person an Idea a Concept..."></Input>
            </div>
            <div
              style={{
                margin: "10px 0 0 10px",
                height: "98vh",
                overflowY: "scroll",
              }}
            >
              {Posts &&
                Posts.map((post: Post, index: number) => {
                  if (!post) {
                    return <h5>NO MORE!!</h5>;
                  }
                  if (Posts.length === index + 1) {
                    return (
                      <Block ref={PostRef} key={Math.random()}>
                        <Head>
                          <Pic></Pic>
                          <h5>
                            <Link to="/plans">
                              {post.author || "Loading..."}
                            </Link>
                          </h5>
                        </Head>
                        <Content>
                          {post.content || "Loading content..."}
                        </Content>
                      </Block>
                    );
                  }
                  return (
                    <Block key={Math.random()}>
                      <Head>
                        <Pic></Pic>
                        <h5 style={{ marginLeft: "25px" }}>
                          <Link
                            style={{ textDecoration: "none", color: "#cccccc" }}
                            to="/user"
                          >
                            {post.author}
                          </Link>
                        </h5>
                      </Head>
                      <Content>{post.content}</Content>
                    </Block>
                  );
                })}
            </div>
          </Colb>
          <div
            style={{
              display: "inline-flex",
              position: "relative",
              alignItems: "center",
              padding: "10px",
              height: "50px",
              justifyContent: "space-evenly",
            }}
          >
            <img src={Avatar} alt="avatar" />
            <img src={Notification} alt="notifications" />
            <Pic />
          </div>
        </Container>
      )}
      {isphone && (
        <Colb>
          <div
            style={{
              backgroundColor: "#2C333A",
              borderRadius: "9px",
              alignItems: "center",
              display: "block",
              position: "relative",
              width: "100%",
            }}
            id="search"
          >
            <div style={{ display: "inline-flex", margin: "15px" }}>
              <img src={Mg} alt='mg'/>
            </div>
            <Input placeholder="Search a Person an Idea a Concept..."></Input>
          </div>
          <div
            style={{
              margin: "10px 0 0 10px",
              height: "98vh",
              overflowY: "scroll",
            }}
          >
            {Posts &&
              Posts.map((post: Post, index: number) => {
                if (!post) {
                  return <h5>NO MORE!!</h5>;
                }
                if (Posts.length === index + 1) {
                  return (
                    <Block ref={PostRef} key={Math.random()}>
                      <Head>
                        <Pic></Pic>
                        <h5>
                          <Link
                            to="/plans"
                            style={{ textDecoration: "none", color: "#cccccc" }}
                          >
                            {post.author || "Loading..."}
                          </Link>
                        </h5>
                      </Head>
                      <Content>{post.content || "Loading content..."}</Content>
                    </Block>
                  );
                }
                return (
                  <Block key={Math.random()}>
                    <Head>
                      <Pic></Pic>
                      <h5 style={{ marginLeft: "25px" }}>
                        <Link
                          style={{ textDecoration: "none", color: "#cccccc" }}
                          to="/user"
                        >
                          {post.author}
                        </Link>
                      </h5>
                    </Head>
                    <Content>{post.content}</Content>
                  </Block>
                );
              })}
          </div>
        </Colb>
      )}
    </React.Fragment>
  );
};
