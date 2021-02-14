import React from "react";
import { getTitle, CONTENT_HEADERS } from "../../utils/consts";
import { MainPageWrapper, MainPageTitle, SectionsWrapper } from "./style";
import ContentSection from "../contentSection/ContentSection";

const MainPage = () => {
  return (
    <MainPageWrapper>
      <MainPageTitle>{getTitle("John")}</MainPageTitle>
      <SectionsWrapper>
        {CONTENT_HEADERS.map((header, i) => {
          return <ContentSection header={header} key={i} />;
        })}
      </SectionsWrapper>
    </MainPageWrapper>
  );
};

export default MainPage;
