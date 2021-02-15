import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const NavGroup = styled.div`
  margin: 0;
  padding: 0;
`;

export const StyledButton = styled.button`
  padding: 30px 0;
  width: 100%;
  text-align: left;
  border: none;
  background-color: ${colors.DARK_BLUE};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    border: none;
  }

  &:focus {
    border-left: 4px solid ${colors.MAIN_BLUE};
    background-color: rgba(0, 51, 153, 0.5);
    outline: none;
  }
`;
