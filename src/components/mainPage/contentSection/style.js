import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { fontSizes } from "../../../styles/typography";
import { device } from "../../../styles/devices";

export const ContentSectionWrapper = styled.div`
  width: 30%;
  border: 1px solid ${colors.BORDER_GREY};
  background-color: ${colors.WHITE};
  display: flex;
  flex-direction: column;
  max-height: 45vh;

  @media ${device.mobileS} {
    width: auto;
    margin: 2%;
  }

  @media ${device.tablet} {
    width: 30%;
    margin: 2% 0;
  }
`;

export const ContentHeader = styled.div`
  padding: 5px 15px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;

  border-bottom: ${({ isActivity }) =>
    isActivity ? `0.8px solid ${colors.BORDER_GREY}` : `none`};

  @media ${device.mobileS} {
    padding: 2px 15px;
  }
`;

export const SectionHeader = styled.h5`
  margin: 10px auto 10px 0;
`;

export const BadgesWrapper = styled.div`
  display: inline-flex;
`;

export const StyledBadge = styled.div`
  border-radius: 50%;
  background-color: ${({ isDelay }) =>
    isDelay ? `${colors.PINK}` : `${colors.MAIN_BLUE}`};
  color: ${colors.WHITE};
  text-transform: uppercase;
  width: 2.5vw;
  height: 2.5vw;
  text-align: center;
  padding-top: 5px;
  margin: 0 5px;
  font-size: ${fontSizes.fontS};
  font-weight: 550;

  @media ${device.mobileS} {
    width: 7vw;
    height: 7vw;
    font-size: ${fontSizes.fontXS};
  }

  @media ${device.mobileM} {
    padding-top: 6px;
  }

  @media ${device.mobileL} {
    padding-top: 7px;
    width: 5.5vw;
    height: 5.5vw;
    font-size: 12px;
  }

  @media ${device.tablet} {
    width: 2.8vw;
    height: 2.8vw;
    padding-top: 4px;
    font-size: ${fontSizes.fontS};
  }

  @media ${device.laptopL} {
    width: 2vw;
    height: 2vw;
    font-size: ${fontSizes.fontS2};
  }

  @media ${device.laptop} {
    padding: 8px;
  }
`;

export const ContentBody = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-flow: column wrap;
  width: 100%;
  height: 100%;
`;

export const ContentRow = styled.div`
  margin: 10px 15px;
`;
