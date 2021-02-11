import React from "react";
import { SideMenuWrapper } from "./style";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";

const SideMenu = (props) => {
  return (
    <SideMenuWrapper open={props.open} onClick={props.onClick}>
      <Logo />
      <Navbar />
    </SideMenuWrapper>
  );
};

export default SideMenu;
