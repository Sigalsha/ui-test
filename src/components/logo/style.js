import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fontSizes } from "../../styles/typography";
import { colors } from "../../styles/colors";

// TODO - add breakpoints

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const StyledLogo = styled(FontAwesomeIcon)`
  font-size: ${fontSizes.fontXS};
  color: ${colors.WHITE};
  display: inline-block;
  border-radius: 50px;
  box-shadow: 0px 0px 2px #888;
  padding: 0.5em 0.5em;
  background-image: linear-gradient(to right, #07689f, #43658b);
  margin-right: 5px;
`;

export const CompanyName = styled.span`
  font-weight: 600;
  font-size: ${fontSizes.fontL};
`;
