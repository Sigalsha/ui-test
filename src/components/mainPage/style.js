import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fonts, fontSizes } from "../../styles/typography";
import { device } from "../../styles/devices";

export const MainPageWrapper = styled.div`
  transition: margin-left 0.5s;
  margin-left: ${({ open }) => (open ? "15vw" : "0")};
  background-color: ${colors.LIGHT_GREY};
`;

export const MainPageTitle = styled.h1`
  color: ${colors.BLACK};
  font-family: ${fonts.fontPrimary};
  font-size: ${fontSizes.fontL2};
  font-weight: 550;
  text-align: left;
  margin-left: 2.5%;
  padding-top: 10px;
  margin-bottom: 0;

  @media ${device.mobileS} {
    font-size: ${fontSizes.fontL};
    padding-top: 0;
  }

  @media ${device.mobileL} {
    padding-top: 20px;
  }

  @media ${device.tablet} {
    font-size: ${fontSizes.fontXL};
    padding-top: 10px;
  }
`;

export const SectionsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  text-decoration: none;

  @media ${device.mobileS} {
    flex-direction: column;
  }

  @media ${device.tablet} {
    flex-direction: row;
  }
`;
