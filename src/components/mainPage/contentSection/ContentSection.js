import React from "react";
import {
  TASKS_INFO,
  CONTENT_HEADERS,
  MESSAGES_INFO,
  ACTIVITIES_INFO,
  sumDelayedTasks,
  getStatsFromContent,
} from "../../../utils/consts";
import {
  ContentSectionWrapper,
  ContentHeader,
  SectionHeader,
  BadgesWrapper,
  StyledBadge,
  ContentBody,
} from "./style";
import ContentRow from "./contentRow/ContentRow";

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
            <ContentRow
              key={i}
              item={item}
              isAvatar={item.isAvatar}
              title={item.title}
              activityType={item.activityType}
              message={item.message}
              isMsgRead={item.isRead}
            />
          );
        })}
      </ContentBody>
    );
  };

  return (
    <ContentSectionWrapper>
      <ContentHeader isActivity={header === CONTENT_HEADERS[2]}>
        <SectionHeader>{header}</SectionHeader>
        <BadgesWrapper>
          <StyledBadge>{getStatsFromContent(header)}</StyledBadge>
          {header === CONTENT_HEADERS[0] && (
            <StyledBadge isDelay={true}>{sumDelayedTasks().length}</StyledBadge>
          )}
        </BadgesWrapper>
      </ContentHeader>

      {generateContentSectionBody(getContentTypeByHeader(header))}
    </ContentSectionWrapper>
  );
};

export default ContentSection;
