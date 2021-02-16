import React from "react";
import { StyledLink, Icon, LinkTitle } from "./style";

const Link = (props) => {
  return (
    <StyledLink to={props.to} isLogo={props.isLogo}>
      {props.children}
      {props.icon && <Icon icon={props.icon} />}
      {props.name && <LinkTitle>{props.name}</LinkTitle>}
    </StyledLink>
  );
};

export default Link;
