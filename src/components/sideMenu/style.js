import styled from "styled-components";
import { colors } from "../../styles/colors";
import { device } from "../../styles/devices";

export const SideMenuWrapper = styled.nav`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  background-color: ${colors.DARK_BLUE};
  height: 100vh;
  width: 15vw;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.5s;

  @media ${device.mobileS} {
    width: 25vw;
    height: 150vh;
  }

  @media ${device.tablet} {
    width: 15vw;
    height: 100vh;
  }
`;
