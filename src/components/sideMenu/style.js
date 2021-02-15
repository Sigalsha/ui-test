import styled from "styled-components";
import { colors } from "../../styles/colors";

export const SideMenuWrapper = styled.nav`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  background-color: ${colors.DARK_BLUE};
  height: 100vh;
  width: 12vw;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.5s;
`;
// transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
