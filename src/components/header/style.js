import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fontSizes } from "../../styles/typography";
import { colors } from "../../styles/colors";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  padding: 30px;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: ${fontSizes.fontM};
  color: ${colors.BLACK};
  margin: 0 5px;
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.MAIN_BLUE};
  color: white;
  width: 12vw;
  height: 3vw;
  border-radius: 20px;
  border-color: ${colors.TRANSPARENT};
  margin: 0 10px;
`;

export const AddButtonIcon = styled(StyledIcon)`
  color: ${colors.LIGHT_GREY};
  font-size: 10px;
  margin-right: 5px;
  margin-bottom: 2px;
`;

export const Text = styled.p`
  font-size: ${fontSizes.fontXS};
  letter-spacing: 0.8;
  font-weight: bold;
`;

export const AvatarButton = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: none;
  background-color: ${colors.TRANSPARENT};
`;
