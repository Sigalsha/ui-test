import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../styles/colors";
import { fontSizes } from "../../styles/typography";
import { device } from "../../styles/devices";

export const BurgerMenuContainer = styled.div`
  display: flex;
  flex-flow: row-wrap;
  align-items: center;
`;

export const BurgerMenuWrapper = styled.div`
  height: 1.5vw;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: column;
  margin: 0.8vw;

  @media ${device.mobileS} {
    height: 2.5vw;
  }

  @media ${device.tablet} {
    height: 1.45vw;
  }

  @media ${device.laptop} {
    height: 1.3vw;
  }
`;

export const BurgerLine = styled.div`
  background-color: ${colors.BLACK};
  height: 0.25vw;
  width: 1.8vw;
  align-self: center;
  transition: all linear;

  @media ${device.mobileS} {
    height: 0.5vw;
    width: 2vw;
  }

  @media ${device.tablet} {
    height: 0.25vw;
    width: 1.8vw;
  }

  @media ${device.laptop} {
    width: 1.4vw;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: ${fontSizes.fontXS};
  color: ${colors.MAIN_BLUE};
`;
