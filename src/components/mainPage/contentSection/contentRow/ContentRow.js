import React from "react";
import { faClock, faReply, faCog } from "@fortawesome/free-solid-svg-icons";
// import Avatar from "../../shared/avatar/Avatar";
import {
  ContentRowWrapper,
  StyledBadge,
  StyledAvatar,
  RowTitle,
  RowInfo,
  Timestamp,
  Icon,
  DotesButton,
  Dotes,
  RowInfoWrapper,
  MessageInfoWrapper,
  VerticalLine,
} from "./style";

const ContentRow = ({
  title,
  item,
  isAvatar,
  activityType,
  message,
  isMsgRead,
}) => {
  return (
    <ContentRowWrapper
      isNewMsg={message && !isMsgRead}
      isMessage={message}
      isActivity={activityType}
    >
      {isAvatar ? (
        <StyledAvatar isActivity={activityType} />
      ) : (
        <StyledBadge>{title[0]}</StyledBadge>
      )}
      <div>
        {message && (
          <RowInfoWrapper isMessage={true}>
            <MessageInfoWrapper>
              <RowInfo isMessageName={true}>{item.name}</RowInfo>
              <Timestamp>{item.timestamp}</Timestamp>
            </MessageInfoWrapper>

            <RowInfo isMessage={true}>{item.message}</RowInfo>
            <div>
              <Icon icon={faReply} isMessage={true} />
              <Icon icon={faCog} isMessage={true} />
            </div>
          </RowInfoWrapper>
        )}

        {activityType && (
          <RowInfoWrapper>
            <RowInfo isActivity={true}>{item.name}</RowInfo>
            <RowInfo isActivityType={true} isActivity={true}>
              {item.activityType}
            </RowInfo>
            <RowInfo isActivity={true}>{item.activityName}</RowInfo>
          </RowInfoWrapper>
        )}

        {title && (
          <RowInfoWrapper>
            <RowTitle>{title}</RowTitle>
          </RowInfoWrapper>
        )}

        {!message && (
          <Timestamp isDelay={item.isDelay}>
            <Icon icon={faClock} />
            {item.timestamp}
          </Timestamp>
        )}
      </div>

      {title && (
        <DotesButton>
          <Dotes />
          <Dotes />
          <Dotes />
        </DotesButton>
      )}
    </ContentRowWrapper>
  );
};

export default ContentRow;
