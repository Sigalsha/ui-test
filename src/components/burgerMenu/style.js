import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../styles/colors";
import { fontSizes } from "../../styles/typography";

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
`;

export const BurgerLine = styled.div`
  background-color: ${colors.BLACK};
  height: 0.25vw;
  width: 1.8vw;
  align-self: center;
  transition: all linear;
`;

/*   &:first-child {
    transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0deg)")};
    transform-origin: top left;
  }

  &:nth-child(2) {
    opacity: ${(props) => (props.open ? "0" : "1")};
  }

  &:last-of-type {
    transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0deg)")};
    transform-origin: bottom left;
  } */

export const Icon = styled(FontAwesomeIcon)`
  font-size: ${fontSizes.fontXS};
  color: ${colors.MAIN_BLUE};
`;
