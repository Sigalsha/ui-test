import styled from "styled-components";
import { fontSizes } from "../../styles/typography";
import { colors } from "../../styles/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-flow: row-wrap;
  align-items: center;
  justify-content: space-evenly;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: ${fontSizes.fontXS};
  color: ${colors.BLACK};
`;

export const Button = styled.button`
  background-color: #2d8cff;
  width: 8vw;
`;
