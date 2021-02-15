import React from "react";
import { getTitle, CONTENT_HEADERS } from "../../utils/consts";
import ContentSection from "../contentSection/ContentSection";
import Charts from "../charts/Charts";
import { MainPageWrapper, MainPageTitle, SectionsWrapper } from "./style";

const MainPage = () => {
  return (
    <MainPageWrapper>
      <MainPageTitle>{getTitle("John")}</MainPageTitle>
      <Charts />
      <SectionsWrapper>
        {CONTENT_HEADERS.map((header, i) => {
          return <ContentSection header={header} key={i} />;
        })}
      </SectionsWrapper>
    </MainPageWrapper>
  );
};

export default MainPage;
