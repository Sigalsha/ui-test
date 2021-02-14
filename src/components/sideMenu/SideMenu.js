import React from "react";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import { SideMenuWrapper } from "./style";

const SideMenu = (props) => {
  return (
    <SideMenuWrapper open={props.open} onClick={props.onClick}>
      <Logo />
      <Navbar />
    </SideMenuWrapper>
  );
};

export default SideMenu;
