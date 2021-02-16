import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fontSizes } from "../../../styles/typography";
import { colors } from "../../../styles/colors";
import { device } from "../../../styles/devices";

export const LogoWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0;
  margin: 10% 0 10% 15%;

  @media ${device.mobileS} {
    margin: 10% 15%;
  }

  @media ${device.tablet} {
    margin: 10% 0 10% 15%;
  }
`;

export const StyledLogo = styled(FontAwesomeIcon)`
  font-size: ${fontSizes.fontXS};
  color: ${colors.WHITE};
  display: inline-block;
  border-radius: 50px;
  box-shadow: 0px 0px 2px #888;
  padding: 0.5em 0.5em;
  background-image: linear-gradient(to right, #07689f, #43658b);
  margin-right: 10px;

  @media ${device.mobileS} {
    display: none;
  }

  @media ${device.mobileL} {
    display: unset;
  }
`;

export const CompanyName = styled.span`
  font-weight: 600;
  font-size: ${fontSizes.fontL};
  color: ${colors.WHITE};

  @media ${device.mobileS} {
    font-size: ${fontSizes.fontXS};
  }

  @media ${device.tablet} {
    font-size: ${fontSizes.fontM};
  }
`;
