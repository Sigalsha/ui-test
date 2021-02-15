import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../../../styles/colors";
import { fontSizes } from "../../../../styles/typography";
import Avatar from "../../../shared/avatar/Avatar";

export const ContentRowWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 10px 15px;
  font-size: ${fontSizes.fontXS};
`;

export const StyledAvatar = styled(Avatar)`
  margin-right: 15px;
`;

export const StyledBadge = styled.div`
  border-radius: 50%;
  background-color: ${colors.MAIN_BLUE};
  color: ${colors.WHITE};
  text-transform: uppercase;
  width: 2.8vw;
  height: 2.8vw;
  text-align: center;
  padding-top: 6px;
  font-size: ${fontSizes.fontS};
  margin-right: 15px;
`;

export const RowInfoWrapper = styled.div`
  display: inline-flex;
  flex-direction: ${({ isMessage }) => (isMessage ? "column" : "row")};
  font-size: 10px;
`;

export const MessageInfoWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const RowTitle = styled.div`
  font-size: ${fontSizes.fontXS};
  font-weight: bold;
  line-height: 1.5;
`;

export const RowInfo = styled.p`
  font-size: ${fontSizes.fontXXS};
  margin: ${({ isMessageName }) => (isMessageName ? `0 5px 0 2px` : `0 2px`)};
  font-weight: ${({ isActivityType, isMessage }) =>
    !isActivityType && !isMessage ? "bold" : "inherit"};
  color: ${({ isActivityType }) =>
    isActivityType ? `${colors.DARK_GREY}` : "inherit"};
  line-height: ${({ isActivity }) => (isActivity ? `0` : `1.5`)}; ;
`;

export const Timestamp = styled.div`
  display: flex;
  align-items: center;
  line-height: 2;
  font-size: ${fontSizes.fontXXS};
  color: ${({ isDelay }) =>
    isDelay ? `${colors.PINK}` : `${colors.DARK_GREY}`};
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${({ isMessage }) => (isMessage ? `${colors.DARK_GREY}` : `inherit`)};
  font-size: ${fontSizes.fontXS};
  margin-right: ${({ isMessage }) => (isMessage ? `10px` : `5px`)};
  margin-top: ${({ isMessage }) => (isMessage ? `5px` : `0`)}; ;
`;

export const DotesButton = styled.button`
  background-color: ${colors.TRANSPARENT};
  border-color: ${colors.TRANSPARENT};
  margin-left: auto;
  margin-right: 5px;
`;

export const Dotes = styled.div`
  background-color: ${colors.DARK_GREY};
  height: 0.4vw;
  width: 0.4vw;
  align-self: center;
  margin: 3px 0;
  border-radius: 50%;
`;