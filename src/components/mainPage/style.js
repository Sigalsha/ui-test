import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/typography";

export const MainPageWrapper = styled.div`
  width: 100%;
  /* height: 100%; */
  height: 50vw;
  background-color: #e7e6e1;
`;

export const MainPageTitle = styled.h1`
  color: ${colors.BLACK};
  font-family: ${fonts.fontPrimary};
  font-weight: regular;
  width: 100%;
  text-align: left;
`;

export const SectionsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  text-decoration: none;
`;
