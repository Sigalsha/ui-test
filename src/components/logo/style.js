import styled from "styled-components";
import { fontSizes } from "../../styles/typography";

// TODO - add breakpoints

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const StyledLogo = styled.img`
  height: 4.8vw;
`;

export const CompanyName = styled.span`
  font-weight: 600;
  font-size: ${fontSizes.fontL};
`;
