import React, { useState, useRef, useCallback } from "react";
import {
  MessageContainer,
  List,
  Grouper,
  Block,
  Head,
  Pic,
  Content,
  Load,
  User,
} from "./styles";
import { Link } from "react-router-dom";
import Display from "./Display";

let Index = () => {
  const [Page, setPage] = useState(0);
  const { Posts, loading, hasMore } = Display(Page);
  const observer = useRef<any>();
  const PostRef = useCallback(
    (node) => {
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
    [loading]
  );
  return (
    <MessageContainer>
      <List>
        <Grouper>
          {Posts &&
            Posts.map(
              (post, index) => {
                if (Posts.length === index + 1) {
                  return (
                    <Block ref={PostRef} key={Math.random()}>
                      <Head>
                        <Pic></Pic>
                        <h5 style={{ marginLeft: "25px" }}>
                          <Link
                            to="/user"
                            style={{ textDecoration: "none", color: "#cccccc" }}
                          >
                            {post.author}
                          </Link>
                        </h5>
                      </Head>
                      <Content>{post.content}</Content>
                    </Block>
                  );
                }
                if (!post) {
                  return (
                    <div>
                      <h5>NO MORE!!</h5>
                    </div>
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
              },
              <div>
                {loading && (
                  <div>
                    <Load />
                  </div>
                )}
              </div>
            )}
        </Grouper>
      </List>
    </MessageContainer>
  );
};
export default Index;
