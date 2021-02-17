import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fontSizes } from "../../styles/typography";
import { colors } from "../../styles/colors";
import { device } from "../../styles/devices";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  transition: margin-left 0.5s;
  padding: 10px 20px;
  margin-left: ${({ open }) => (open ? "15.25vw" : "0")};
  border-bottom: 0.8px solid ${colors.BORDER_GREY};
  background-color: ${colors.WHITE};

  @media ${device.mobileS} {
    padding: 1%;
    margin-left: ${({ open }) => (open ? "25.25vw" : "0")};
  }

  @media ${device.tablet} {
    padding: 10px 20px;
    margin-left: ${({ open }) => (open ? "15.25vw" : "0")};
  }
`;

export const LeftWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: auto;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: ${fontSizes.fontS};
  color: ${colors.BLACK};
  margin: 0 10px;
  cursor: pointer;
`;

export const RightWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin-left: auto;
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.MAIN_BLUE};
  color: white;
  width: 11.2vw;
  height: 3vw;
  border-radius: 20px;
  border-color: ${colors.TRANSPARENT};
  margin: 0 30px 0 10px;
  padding-right: 15px;

  @media ${device.mobileS} {
    width: 25vw;
    height: 6vw;
    margin: 0;
    padding-right: 0;
  }

  @media ${device.mobileM} {
    width: 20vw;
    height: 7vw;
    margin: 0 30px 0 0;
  }

  @media ${device.tablet} {
    width: 14.6vw;
    height: 3.3vw;
    margin: 0 30px 0 10px;
    padding-right: 15px;
  }

  @media ${device.laptop} {
    width: 12vw;
    height: 2.8vw;
  }

  @media ${device.laptopL} {
    width: 9.2vw;
    height: 2.2vw;
  }
`;

export const AddButtonIcon = styled(StyledIcon)`
  color: ${colors.BORDER_GREY};
  font-size: ${fontSizes.fontXXS};
  font-weight: 400;
  margin-right: 8px;
  margin-bottom: 2px;

  @media ${device.mobileS} {
    display: none;
  }

  @media ${device.tablet} {
    display: inherit;
  }
`;

export const Text = styled.p`
  font-size: ${fontSizes.fontXS};
  letter-spacing: 0.8;
  font-weight: bold;

  @media ${device.mobileS} {
    font-size: ${fontSizes.fontXXS};
  }

  @media ${device.mobileL} {
    font-size: ${fontSizes.fontXS};
  }
`;

export const AvatarButton = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: none;
  background-color: ${colors.TRANSPARENT};

  @media ${device.mobileS} {
    margin-left: auto;
  }
`;

export const ChooseIcon = styled(StyledIcon)`
  margin: 0 5px 10px 0;
  font-size: ${fontSizes.fontXS};
`;
