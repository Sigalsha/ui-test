import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../../../styles/colors";
import { fontSizes } from "../../../../styles/typography";
import Avatar from "../../../shared/avatar/Avatar";

export const ContentRowWrapper = styled.div`
  display: flex;
  padding: ${({ isMessage }) => (isMessage ? `10px 15px 5px 15px` : "15px")};
  width: 100%;
  border-top: ${({ isActivity }) =>
    isActivity ? `none` : `0.8px solid ${colors.BORDER_GREY}`};
  font-size: ${fontSizes.fontXS};
  background-color: ${({ isNewMsg }) =>
    isNewMsg ? `${colors.LIGHT_GREY}` : "inherit"};
`;

export const StyledAvatar = styled(Avatar)`
  margin-right: 15px;
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
  font-size: ${fontSizes.fontS2};
  font-weight: bold;
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

export const VerticalLine = styled.hr`
  border: none;
  border-left: 1px solid ${colors.BORDER_GREY};
  width: 1px;
  height: 5vh;
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
  font-size: ${({ isMessage }) =>
    isMessage ? `${fontSizes.fontXXS}` : `${fontSizes.fontXS}`};
  margin-right: ${({ isMessage }) => (isMessage ? `10px` : `5px`)};
  margin-top: ${({ isMessage }) => (isMessage ? `5px` : `0`)};
  cursor: ${({ isMessage }) => (isMessage ? `pointer` : `unset`)};
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
