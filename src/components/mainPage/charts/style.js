import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../../styles/colors";
import { fontSizes } from "../../../styles/typography";
import { device } from "../../../styles/devices";

export const ChartsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-decoration: none;
  margin: 2% 0;
  height: 30vh;

  @media ${device.mobileS} {
    flex-flow: column wrap;
    min-height: 10vh;
    margin: 0;
  }

  @media ${device.tablet} {
    height: 35vh;
    flex-flow: row;
  }
`;

export const ChartWrapper = styled.div`
  width: ${({ isReport }) => (isReport ? "55%" : "37.5%")};
  border: 1px solid ${colors.BORDER_GREY};
  background-color: ${colors.WHITE};
  display: flex;
  flex-flow: row wrap;
  align-items: start;

  @media ${device.mobileS} {
    margin: 2%;
    width: auto;
  }

  @media ${device.mobileL} {
    width: 96%;
  }

  @media ${device.tablet} {
    width: ${({ isReport }) => (isReport ? "55%" : "37.5%")};
    margin: 0.5% 2.5%;
  }
`;

export const ChartHeader = styled.div`
  padding: 1.5% 3%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;

  @media ${device.mobileS} {
    padding: 1%;
  }

  @media ${device.mobileM} {
    padding-left: 5%;
  }

  @media ${device.tablet} {
    padding: 1.5% 3%;
  }
`;

export const Header = styled.h3`
  color: ${colors.DARK_GREY};

  @media ${device.mobileS} {
    font-size: ${fontSizes.fontM};
  }

  @media ${device.tablet} {
    font-size: ${fontSizes.fontL};
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: ${colors.TRANSPARENT};
  width: 18vw;
  height: 3.5vw;
  border-radius: 20px;
  border: 1px solid ${colors.GREY};
  margin: 0 2% 0 auto;
  padding-left: 3%;

  @media ${device.mobileS} {
    width: 30vw;
    height: 7vw;
  }

  @media ${device.tablet} {
    height: 3.5vw;
    width: 15vw;
  }

  @media ${device.laptop} {
    width: 13vw;
    height: 3vw;
  }
`;

export const Text = styled.p`
  font-size: ${fontSizes.fontXS};
  letter-spacing: 0.8;
  font-weight: bold;
  font-size: ${fontSizes.fontXXS};
`;

export const TimeText = styled(Text)`
  color: ${colors.DARK_GREY};
  font-weight: normal;
  margin-right: 2px;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: ${fontSizes.fontXXS};
  color: ${colors.DARK_GREY};
  margin-right: 5px;
  margin-left: auto;
`;
