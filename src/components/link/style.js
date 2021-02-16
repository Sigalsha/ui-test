import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fontSizes } from "../../styles/typography";
import { colors } from "../../styles/colors";
import { device } from "../../styles/devices";

export const StyledLink = styled(Link)`
  z-index: 999;
  text-decoration: none;
  padding: ${({ isLogo }) => (isLogo ? "0" : "0 20px")};

  @media ${device.mobileS} {
    padding: ${({ isLogo }) => (isLogo ? "0" : "0 5px")};
  }

  @media ${device.mobileM} {
    padding: ${({ isLogo }) => (isLogo ? "0" : "0 10px")};
  }

  @media ${device.mobileL} {
    padding: ${({ isLogo }) => (isLogo ? "0" : "0 15px")};
  }

  @media ${device.tablet} {
    padding: ${({ isLogo }) => (isLogo ? "0" : "0 20px")};
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: ${fontSizes.fontS};
  color: ${colors.MAIN_BLUE};
  margin-right: 10px;

  @media ${device.mobileS} {
    font-size: ${fontSizes.fontXS};
  }

  @media ${device.tablet} {
    font-size: ${fontSizes.fontS2};
  }

  @media ${device.laptop} {
    font-size: ${fontSizes.fontS};
  }
`;

export const LinkTitle = styled.span`
  font-size: ${fontSizes.fontS};
  color: ${colors.WHITE};

  @media ${device.mobileS} {
    font-size: ${fontSizes.fontXS};
  }

  @media ${device.tablet} {
    font-size: ${fontSizes.fontS2};
  }

  @media ${device.laptop} {
    font-size: ${fontSizes.fontS};
  }
`;
