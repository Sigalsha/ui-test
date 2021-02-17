import React, { useContext } from "react";
import { MenuContext } from "../../contexts/MenuContext";
import { getTitle, CONTENT_HEADERS } from "../../utils/consts";
import ContentSection from "./contentSection/ContentSection";
import Charts from "./charts/Charts";
import { MainPageWrapper, MainPageTitle, SectionsWrapper } from "./style";

const MainPage = () => {
  const { open } = useContext(MenuContext);

  return (
    <MainPageWrapper open={open}>
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
