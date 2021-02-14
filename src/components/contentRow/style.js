import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/typography";

export const ContentRowWrapper = styled.div`
  width: 100%;
`;

export const StyledBadge = styled.div`
  border-radius: 50%;
  background-color: ${colors.MAIN_BLUE};
  color: ${colors.WHITE};
  text-transform: uppercase;
  width: 2.5vw;
  height: 2.5vw;
  text-align: center;
  padding-top: 6px;
`;

export const DotesButton = styled.button`
  height: 40px;
  background-color: transparent;
  border-color: transparent;
`;

export const Dotes = styled.div`
  background-color: grey;
  height: 0.35vw;
  width: 0.35vw;
  align-self: center;
  margin: 3px 0;
  border-radius: 50%;
`;
