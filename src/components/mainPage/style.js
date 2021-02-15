import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/typography";

export const MainPageWrapper = styled.div`
  width: 100%;
  height: 50vw;
  background-color: ${colors.LIGHT_GREY};
`;

export const MainPageTitle = styled.h1`
  color: ${colors.BLACK};
  font-family: ${fonts.fontPrimary};
  font-weight: 550;
  text-align: left;
  margin-left: 30px;
  padding-top: 30px;
`;

export const SectionsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  text-decoration: none;
`;
