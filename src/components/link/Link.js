import React from "react";
import { useLocation } from "react-router-dom";
import { StyledLink, Icon, LinkTitle } from "./style";

const Link = (props) => {
  const location = useLocation();

  return (
    <StyledLink
      to={props.to}
      isLogo={props.isLogo}
      isActiveRoute={props.to === location.pathname}
    >
      {props.children}
      {props.icon && <Icon icon={props.icon} />}
      {props.name && <LinkTitle>{props.name}</LinkTitle>}
    </StyledLink>
  );
};

export default Link;
