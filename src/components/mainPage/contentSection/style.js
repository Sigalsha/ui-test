import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { fonts } from "../../../styles/typography";

export const ContentSectionWrapper = styled.div`
  width: 30%;
  border: 1px solid ${colors.BORDER_GREY};
  background-color: ${colors.WHITE};
  display: flex;
  flex-flow: row wrap;
`;

export const ContentHeader = styled.div`
  padding: 5px 15px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;
`;

export const SectionHeader = styled.h5`
  margin: 10px auto 10px 0;
`;

export const BadgesWrapper = styled.div`
  display: inline-flex;
`;

export const StyledBadge = styled.div`
  border-radius: 50%;
  background-color: ${({ isDelay }) =>
    isDelay ? `${colors.PINK}` : `${colors.MAIN_BLUE}`};
  color: ${colors.WHITE};
  text-transform: uppercase;
  width: 2.8vw;
  height: 2.8vw;
  text-align: center;
  padding-top: 6px;
  margin: 0 5px;
`;

export const ContentBody = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-flow: column wrap;
  width: 100%;
`;

export const ContentSectionBody = styled.div`
  border-top: 0.8px solid ${colors.BORDER_GREY};
  margin: 0;
  padding: 5px 0;
`;

// border-bottom: 0.8px solid ${colors.BORDER_GREY};

export const ContentRow = styled.div`
  margin: 10px 15px;
`;

/* export const Line = styled.hr`
  border-top: 1px solid ${colors.BORDER_GREY};

  &:last-child {
    display: none;
  }
`; */
