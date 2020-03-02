import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Links from "./Links";

const Container = styled.div.attrs({
  className: "container-fullwidth"
})``

const NavTag = styled.nav.attrs({
  className: "navbar navbar-expand-lg navbar-dark bg-dark"
})`
  margin-bottom: 40 px;
`

const Navbar = () => {
  return (
    <Container>
      <NavTag>
        <Logo />
        <Links />
      </NavTag>
    </Container>
  );
};

export default Navbar;
