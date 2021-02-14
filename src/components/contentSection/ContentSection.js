import React from "react";
import { TASKS_TITLES } from "../../utils/consts";
import { ContentSectionWrapper, SectionHeader } from "./style";
import ContentRow from "../contentRow/ContentRow";

const ContentSection = ({ header }) => {
  return (
    <ContentSectionWrapper>
      <SectionHeader>{header}</SectionHeader>
      <hr style={{ borderTop: "1px solid #f8f1f1" }} />
      <div>
        {TASKS_TITLES.map((title, i) => {
          return <ContentRow key={i} isAvatar={false} title={title} />;
        })}
      </div>
      {/*      {TASKS_TITLES.map((title, i) => {
        return <p key={i}>{title}</p>;
      })} */}
    </ContentSectionWrapper>
  );
};

export default ContentSection;
