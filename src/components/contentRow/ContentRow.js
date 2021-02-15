import React from "react";
import { faClock, faReply, faCog } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../shared/avatar/Avatar";
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
} from "./style";

const ContentRow = ({ title, item, isAvatar, activityType, message }) => {
  return (
    <ContentRowWrapper>
      {isAvatar ? <StyledAvatar /> : <StyledBadge>{title[0]}</StyledBadge>}
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

/*   const generateContentSectionRows = (contentType, item, key) => {
    switch (contentType) {
      case "Tasks":
        getTasks(item, key);
      case "Messages":
        getMessages(item, key);
      case "Activity":
        getActivities(item, key);
      default:
        getTasks(item, key);
    }
  };

  const getTasks = (item, key) => {
    console.log("item task ", item);

    return (
      <ContentRowWrapper key={key}>
        <StyledBadge>{item.title && item.title[0]}</StyledBadge>
        <div>
          <div
            style={{
              display: "inline-flex",
              alignSelf: "center",
              alignContent: "center",
              fontSize: "10px",
            }}
          >
            <RowTitle>{item.title}</RowTitle>
          </div>
          <Timestamp isDelay={item.isDelay}>
            <Icon icon={faClock} />
            {item.timestamp}
          </Timestamp>
        </div>
        <DotesButton>
          <Dotes />
          <Dotes />
          <Dotes />
        </DotesButton>
      </ContentRowWrapper>
    );
  };

  const getMessages = (item, key) => {
    return (
      <ContentRowWrapper key={key}>
        <StyledAvatar />
        <div>
          <div
            style={{
              display: "inline-flex",
              alignSelf: "center",
              alignContent: "center",
              fontSize: "10px",
            }}
          >
            <RowInfo>{item.name}</RowInfo>
            <Timestamp>{item.timestamp}</Timestamp>
            <p>message here</p>
            <Icon icon={faReply} />
            <Icon icon={faCog} />
          </div>
        </div>
      </ContentRowWrapper>
    );
  };

  const getActivities = (item, key) => {
    return (
      <ContentRowWrapper key={key}>
        <StyledAvatar />
        <div>
          <div
            style={{
              display: "inline-flex",
              alignSelf: "center",
              alignContent: "center",
              fontSize: "10px",
            }}
          >
            <RowInfo>{item.name}</RowInfo>
            <RowInfo isActivityType={true}>{item.activityType}</RowInfo>
            <RowInfo>{item.activityName}</RowInfo>
          </div>
          <Timestamp>
            <Icon icon={faClock} />
            {item.timestamp}
          </Timestamp>
        </div>
      </ContentRowWrapper>
    );
  }; */

/*         <div>
      {generateContentSectionRows("Tasks", item, key)}
      {generateContentSectionRows("Messages", item, key)}
      {generateContentSectionRows("Activity", item, key)}
    </div> */
