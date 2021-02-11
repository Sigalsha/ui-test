import React from "react";
// import { LogoLink } from "react-router-dom";
import logo from "../../assets/logo192.png";
import Link from "../link/Link";
import { LogoWrapper, StyledLogo, CompanyName } from "./style";
import { COMPANY_NAME } from "../../utils/consts";

const Logo = () => {
  return (
    <Link to="/">
      <LogoWrapper>
        <StyledLogo src={logo} />
        <CompanyName>{COMPANY_NAME}</CompanyName>
      </LogoWrapper>
    </Link>
  );
};

export default Logo;
