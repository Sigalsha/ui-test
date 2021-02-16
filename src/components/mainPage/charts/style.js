import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../../styles/colors";
import { fonts, fontSizes } from "../../../styles/typography";

export const ChartsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-decoration: none;
  margin: 15px 0 20px 0;
  height: 30vh;
`;

export const ChartWrapper = styled.div`
  width: ${({ isReport }) => (isReport ? "55%" : "37.5%")};

  border: 1px solid ${colors.BORDER_GREY};
  background-color: ${colors.WHITE};
  display: flex;
  flex-flow: row wrap;
  align-items: start;
`;

export const ChartHeader = styled.div`
  padding: 5px 15px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;
`;

export const Header = styled.h3`
  color: ${colors.DARK_GREY};
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.TRANSPARENT};
  width: 14vw;
  height: 3vw;
  border-radius: 20px;
  border: 1px solid ${colors.GREY};
  margin: 0 10px 0 auto;
`;

export const Text = styled.p`
  font-size: ${fontSizes.fontXS};
  letter-spacing: 0.8;
  font-weight: bold;
  font-size: ${fontSizes.fontXXS};
`;

export const TimeText = styled(Text)`
  color: ${colors.DARK_GREY};
  font-weight: normal;
  margin-right: 2px;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: ${fontSizes.fontXXS};
  color: ${colors.DARK_GREY};
  margin: 0 5px 0 15px;
`;
