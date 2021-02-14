import React from "react";
// import { Link } from "react-router-dom";
import { StyledLink, Icon, LinkTitle } from "./style";

const Link = (props) => {
  return (
    <StyledLink to={props.to}>
      {props.children}
      {props.icon && <Icon icon={props.icon} />}
      {props.name && <LinkTitle>{props.name}</LinkTitle>}
    </StyledLink>
  );
};

export default Link;
