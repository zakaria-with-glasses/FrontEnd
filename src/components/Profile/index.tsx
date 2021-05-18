import React, { useState } from "react";

import {
  Bio,
  Upper,
  Name,
  Button,
  Picture,
  Wrapper,
  Separator,
  Profile,
  Down,
  Link,
} from "./style";
import pic from "./profile.jpg";

var sub = "Follow";
const post = document.getElementById("post");
const Index: React.FC = () => {
  const [sub, setSub] = useState("Follow");
  return (
    <Wrapper>
      <Upper>
        <Profile id="post">
          <Picture src={pic} />
          <Name>
            Hi! Im Zakaria Harira
            <div>
              <Bio>
                im a young programmer my career started before i had 10 then i
                started at 10 i have 4 years of expirience +1 years of basics
                including some besics in design in figma and some Montage in Pr
                i also like playing games these are my accounts:
                <br />
                ザカリア#4279 # @ziko_dev. wish y'all a happy expirence here
                with us , Have a nice day ❤️️
              </Bio>
            </div>
          </Name>
          <Button
            onClick={() => {
              fetch("https://reqres.in/api/users?page=2")
                .then((res) => console.log(res.body))
                .catch((e) => console.error(e));
              setSub("Following");
            }}
          >
            {sub}
          </Button>
        </Profile>
        <Down>
          <Separator />
          <div style={{ flexDirection: "row" }}>
            <br />
            <Link>JOURNAL</Link>
            <Link>MEDIA</Link>
            <Link>INFO</Link>
          </div>
        </Down>
      </Upper>
    </Wrapper>
  );
};
export default Index;
