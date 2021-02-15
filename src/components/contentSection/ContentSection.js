import React from "react";
import {
  TASKS_INFO,
  CONTENT_HEADERS,
  MESSAGES_INFO,
  ACTIVITIES_INFO,
} from "../../utils/consts";
import {
  ContentSectionWrapper,
  ContentHeader,
  SectionHeader,
  BadgesWrapper,
  StyledBadge,
  ContentSectionBody,
  ContentBody,
} from "./style";
import ContentRow from "../contentRow/ContentRow";

const ContentSection = ({ header }) => {
  const getContentTypeByHeader = (header) => {
    switch (header) {
      case "Tasks":
        return TASKS_INFO;
      case "Messages":
        return MESSAGES_INFO;
      case "Activity":
        return ACTIVITIES_INFO;
      default:
        return TASKS_INFO;
    }
  };

  const generateContentSectionBody = (data) => {
    return (
      <ContentBody>
        {data.map((item, i) => {
          return (
            <ContentSectionBody key={i}>
              <ContentRow
                key={i}
                item={item}
                isAvatar={item.isAvatar}
                title={item.title}
                activityType={item.activityType}
                message={item.message}
              />
            </ContentSectionBody>
          );
        })}
      </ContentBody>
    );
  };

  return (
    <ContentSectionWrapper>
      <ContentHeader>
        <SectionHeader>{header}</SectionHeader>
        <BadgesWrapper>
          <StyledBadge />
          {header === CONTENT_HEADERS[0] && <StyledBadge isDelay={true} />}
        </BadgesWrapper>
      </ContentHeader>

      {generateContentSectionBody(getContentTypeByHeader(header))}
    </ContentSectionWrapper>
  );
};

export default ContentSection;
