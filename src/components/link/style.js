import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fontSizes } from "../../styles/typography";
import { colors } from "../../styles/colors";
import { device } from "../../styles/devices";

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  text-align: left;
  border: none;
  border-left: ${({ isActiveRoute, isLogo }) =>
    isActiveRoute && !isLogo ? `4px solid ${colors.MAIN_BLUE}` : `none`};
  background-color: ${({ isActiveRoute, isLogo }) =>
    isActiveRoute && !isLogo ? `${colors.FOCUS_BLUE}` : `${colors.DARK_BLUE}`};
  cursor: pointer;
  padding: ${({ isLogo }) => (isLogo ? "0" : `15%`)};

  &:hover {
    opacity: ${({ isLogo }) => (isLogo ? "none" : `0.8`)};
    border: ${({ isLogo }) => (isLogo ? "inherit" : `none`)};
  }

  &:focus {
    border-left: ${({ isLogo }) =>
      isLogo ? `none` : `4px solid ${colors.MAIN_BLUE}`};
    background-color: ${({ isLogo }) =>
      isLogo ? `${colors.DARK_BLUE}` : `${colors.FOCUS_BLUE}`};
    outline: none;
  }

  @media ${device.mobileS} {
    padding: ${({ isLogo }) => (isLogo ? "0" : `15% 2%`)};
  }

  @media ${device.mobileM} {
    padding: ${({ isLogo }) => (isLogo ? "0" : `15% 10%`)};
  }

  @media ${device.mobileL} {
    padding: ${({ isLogo }) => (isLogo ? "0" : `15%`)};
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
