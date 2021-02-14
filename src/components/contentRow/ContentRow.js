import React from "react";
import Avatar from "../shared/avatar/Avatar";
import { StyledBadge, DotesButton, Dotes } from "./style";

const ContentRow = ({ isAvatar, title }) => {
  return (
    <div>
      <div>{isAvatar ? <Avatar /> : <StyledBadge>{title[0]}</StyledBadge>}</div>
      <div>{title}</div>
      <DotesButton>
        <Dotes />
        <Dotes />
        <Dotes />
      </DotesButton>
    </div>
  );
};

export default ContentRow;
