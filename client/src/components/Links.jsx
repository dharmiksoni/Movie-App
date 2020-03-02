import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const collapse = styled.div.attrs({
  className: "collpase navbar-collapse"
})``

const List = styled.div.attrs({
  className: "navbar-nav mr-auto"
})``

const Item = styled.div.attrs({
  className: "collpase navbar-collapse"
})``

const Links = () => {
  return (
    <Fragment>
      <Link to="/" className="navbar-brand">
        React/Express
      </Link>
      <collapse>
        <List>
          <Item>
            <Link to="/movies/list" className="nav-link">
              Movies
            </Link>
          </Item>
          <Item>
            <Link to="/movies/create" className="nav-link">
              Create Movie
            </Link>
          </Item>
        </List>
      </collapse>
    </Fragment>
  );
};

export default Links;
