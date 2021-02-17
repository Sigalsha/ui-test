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

export const LogoContainer = styled.div`
  position: relative;
  margin-right: 5px;
  width: 2.8vw;
  height: 2.8vw;
  border-radius: 50%;
  background-image: linear-gradient(
    to left,
    ${colors.LOGO_BLUE} 10%,
    ${colors.MAIN_BLUE} 90%
  );

  @media ${device.mobileS} {
    display: none;
  }

  @media ${device.mobileL} {
    display: unset;
  }

  @media ${device.laptop} {
    width: 2.5vw;
    height: 2.5vw;
  }

  @media ${device.laptopL} {
    width: 2.2vw;
    height: 2.2vw;
    margin-right: 10px;
  }
`;

export const Circle = styled.div`
  background-color: ${colors.DARK_BLUE};
  content: "";
  position: absolute;
  top: 6px;
  bottom: 6px;
  right: 6px;
  left: 6px;
  border-radius: inherit;
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
