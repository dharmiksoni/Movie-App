import React from "react";
import styled from "styled-components";
import logo from "../netflix.svg";

const Wrapper = styled.a.attrs({
  className: "navbar-brand"
})``

const Logo = () => {
  return (
    <Wrapper href="http://techinroad.com">
      <img src={logo} width="50" height="45" alt="techinroad.com"></img>
    </Wrapper>
  );
};

export default Logo;
