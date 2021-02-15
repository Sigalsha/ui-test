import React, { useContext } from "react";
import { MenuContext } from "../../contexts/MenuContext";
import Logo from "./logo/Logo";
import Navbar from "./navbar/Navbar";
import { SideMenuWrapper } from "./style";

const SideMenu = () => {
  const { open, onMenuClick } = useContext(MenuContext);
  //  onClick={() => onMenuClick()}
  return (
    <SideMenuWrapper open={open}>
      <Logo />
      <Navbar />
    </SideMenuWrapper>
  );
};

export default SideMenu;
