import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fontSizes } from "../../styles/typography";
import { colors } from "../../styles/colors";

export const StyledLink = styled(Link)`
  z-index: 999;
  text-decoration: none;
  color: inherit;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: ${fontSizes.fontM};
  color: ${colors.BLACK};
`;

export const LinkTitle = styled.span`
  font-size: ${fontSizes.fontM};
  color: ${colors.BLACK};
`;
