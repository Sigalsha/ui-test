import React from "react";
// import { LogoLink } from "react-router-dom";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { COMPANY_NAME } from "../../../utils/consts";
import Link from "../../link/Link";
import { LogoWrapper, StyledLogo, CompanyName } from "./style";

const Logo = () => {
  return (
    <Link to="/" isLogo={true}>
      <LogoWrapper>
        <StyledLogo icon={faCircle} />
        <CompanyName>{COMPANY_NAME}</CompanyName>
      </LogoWrapper>
    </Link>
  );
};

export default Logo;
