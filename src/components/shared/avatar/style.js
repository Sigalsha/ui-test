import styled from "styled-components";

export const AvatarImg = styled.img`
  border-radius: 50%;
  height: 2.5vw;
  width: 2.5vw;
  margin-right: 5px;
`;

/*   &::after {
    left: 13px;
    position: absolute;
    top: 27px;
    content: "";
    height: 5.2vh;
    border-left: 1px solid;
  } */

/*     &&:after {
    position: absolute;
    left: 13px;
    top: 27px;
    content: "5";
    height: 5.2vh;
    border-left: 1px solid red;
  }

  ${({ isActivity }) =>
    isActivity
      ? `
  &::after {
    left: 13px;
    position: absolute;
    top: 27px;
    content: "";
    height: 5.2vh;
    border-left: 1px solid;
  }
  `
      : "none"}; */
