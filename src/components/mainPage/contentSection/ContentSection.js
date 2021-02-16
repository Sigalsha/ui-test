import React from "react";
import {
  CONTENT_HEADERS,
  sumDelayedTasks,
  getStatsFromContent,
  getContentTypeByHeader,
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
