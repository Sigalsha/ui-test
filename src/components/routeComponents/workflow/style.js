import styled from "styled-components";
import { fontSizes } from "../../../styles/typography";
import { device } from "../../../styles/devices";

export const WorkflowWrapper = styled.div`
  text-align: center;
  font-size: ${fontSizes.fontXL};
  margin: 15% 0;
  margin-left: ${({ open }) => (open ? "15vw" : "0")};

  @media ${device.mobileS} {
    margin-left: ${({ open }) => (open ? "25.5vw" : "0")};
  }

  @media ${device.tablet} {
    margin-left: ${({ open }) => (open ? "15.5vw" : "0")};
  }
`;
