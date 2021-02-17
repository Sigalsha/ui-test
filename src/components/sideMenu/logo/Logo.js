import React from "react";
import { COMPANY_NAME } from "../../../utils/consts";
import Link from "../../link/Link";
import { LogoWrapper, CompanyName, LogoContainer, Circle } from "./style";

const Logo = () => {
  return (
    <Link to="/" isLogo={true}>
      <LogoWrapper>
        <LogoContainer>
          <Circle />
        </LogoContainer>
        <CompanyName>{COMPANY_NAME}</CompanyName>
      </LogoWrapper>
    </Link>
  );
};

export default Logo;
