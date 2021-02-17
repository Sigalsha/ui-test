import styled from "styled-components";
import { device } from "../../../styles/devices";

export const AvatarImg = styled.img`
  border-radius: 50%;
  height: 2.5vw;
  width: 2.5vw;
  margin-right: 5px;

  @media ${device.mobileS} {
    height: 7vw;
    width: 7vw;
  }

  @media ${device.tablet} {
    height: 2.8vw;
    width: 2.8vw;
  }

  @media ${device.laptopL} {
    width: 2vw;
    height: 2vw;
  }
`;
