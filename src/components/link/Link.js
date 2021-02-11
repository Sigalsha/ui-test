import React from "react";
// import { Link } from "react-router-dom";
import { StyledLink, Icon, LinkTitle } from "./style";

const Link = (props) => {
  console.log("props from link", props);

  return (
    <StyledLink to={props.to}>
      {props.children}
      {props.src && <Icon {...props.src} />}
      {props.name && <LinkTitle>{props.name}</LinkTitle>}
    </StyledLink>
  );
};

export default Link;
