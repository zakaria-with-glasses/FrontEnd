// MIT License

// Copyright (c) 2021 Zakaria Harira

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { ActiveBlock } from "./PostBlock";
import { User } from "../UserContext";
import { Helmet } from "react-helmet";
import io from "socket.io-client";

const CheckToken = async () => {
  await axios.get("http://localhost:4000/", {}).then((res) => {});
};

const Index: React.FC = () => {
  const UserContext = useContext(User);
  const ENDPOINT = "http://localhost:4000/";
  const socket = io(ENDPOINT, {
    transports: ["websocket"],
    timeout: 10000,
  });
  var res;
  socket.on("connection", (socks) => {
    socket.on("task:getdata", (msg) => {
      console.error(msg);
    });
  });
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
          <ActiveBlock user={UserContext.user} />
        </div>
      )}
    </React.Fragment>
  );
};

export default Index;
