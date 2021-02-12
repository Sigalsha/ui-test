import React from "react";
// import { LogoLink } from "react-router-dom";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Link from "../link/Link";
import { LogoWrapper, StyledLogo, CompanyName } from "./style";
import { COMPANY_NAME } from "../../utils/consts";

const Logo = () => {
  return (
    <Link to="/">
      <LogoWrapper>
        <StyledLogo icon={faCircle} />
        <CompanyName>{COMPANY_NAME}</CompanyName>
      </LogoWrapper>
    </Link>
  );
};

export default Logo;
