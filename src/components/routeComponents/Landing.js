import React, { Fragment } from "react";
import MenuContextProvider from "../../contexts/MenuContext";
import Header from "../header/Header";
import SideMenu from "../sideMenu/SideMenu";
import MainPage from "../mainPage/MainPage";

const Landing = () => {
  return (
    <MenuContextProvider>
      <MainPage />
    </MenuContextProvider>
  );
};

export default Landing;
