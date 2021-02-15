import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fontSizes } from "../../styles/typography";
import { colors } from "../../styles/colors";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  transition: margin-left 0.5s;
  margin: 10px 20px;
  margin-left: ${({ open }) => (open ? "16vw" : "20px")};
`;

export const LeftWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: auto;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: ${fontSizes.fontS};
  color: ${colors.BLACK};
  margin: 0 10px;
  cursor: pointer;
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.MAIN_BLUE};
  color: white;
  width: 11vw;
  height: 3vw;
  border-radius: 20px;
  border-color: ${colors.TRANSPARENT};
  margin: 0 30px 0 10px;
`;

export const AddButtonIcon = styled(StyledIcon)`
  color: ${colors.BORDER_GREY};
  font-size: ${fontSizes.fontXXS};
  font-weight: 400;
  margin-right: 8px;
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

export const ChooseIcon = styled(StyledIcon)`
  margin: 0 5px 10px 0;
  font-size: ${fontSizes.fontXS};
`;
