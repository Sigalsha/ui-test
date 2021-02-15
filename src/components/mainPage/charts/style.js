import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../../styles/colors";
import { fonts, fontSizes } from "../../../styles/typography";

export const ChartsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-decoration: none;
  margin: 20px 0;
`;

export const ChartWrapper = styled.div`
  width: ${({ isReport }) => (isReport ? "55%" : "37.5%")};

  border: 1px solid ${colors.BORDER_GREY};
  background-color: ${colors.WHITE};
  display: flex;
  flex-flow: row wrap;
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
  width: 12vw;
  height: 3vw;
  border-radius: 20px;
  border: 1px solid ${colors.GREY};
  margin: 0 10px;
`;

export const Text = styled.p`
  font-size: ${fontSizes.fontXS};
  letter-spacing: 0.8;
  font-weight: bold;
  font-size: ${fontSizes.fontXXS};
`;

export const TimeText = styled(Text)`
  color: ${colors.GREY};
  font-weight: normal;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: ${fontSizes.fontM};
  color: ${colors.GREY};
  margin: 0 5px;
`;
