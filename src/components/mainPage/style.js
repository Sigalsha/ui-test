import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fonts, fontSizes } from "../../styles/typography";

export const MainPageWrapper = styled.div`
  transition: margin-left 0.5s;
  margin-left: ${({ open }) => (open ? "15vw" : "0")};
  height: 60vw;
  background-color: ${colors.LIGHT_GREY};
`;

export const MainPageTitle = styled.h1`
  color: ${colors.BLACK};
  font-family: ${fonts.fontPrimary};
  font-size: ${fontSizes.fontXL};
  font-weight: 550;
  text-align: left;
  margin-left: 25px;
  padding-top: 15px;
`;

export const SectionsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  text-decoration: none;
`;
