import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Big = styled.h1`
    position: fixed;
    margin-top: -100px;
    margin-left: -100px;
    left: 50%;
    top: 50%;
    font-family: monospace;
    font-size: 100px;
    color: #a0d2eb;
`;
const Back = styled.button`
    position: fixed;
    margin-top: -100px;
    margin-left: -100px;
    left: 40%;
    top: 60%;
    border-radius: 16px;
    border: 1px solid #a0d2eb;
    text-align: center;
    font-family: monospace;
    font-size: 100px;
    &:hover {
        background-color: #e5eaf5;
    }
`;
class Not extends Component {
    render() {
        return (
            <>
                <Big>404</Big>
                <Back>
                    <Link to="/" style={{ textDecoration: "none", color: "#A0D2EB" }}>
                        Back Home
                    </Link>
                </Back>
            </>
        );
    }
}
export default Not;
