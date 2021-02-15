import React, { useContext } from "react";
import { MenuContext } from "../../contexts/MenuContext";
import Logo from "./logo/Logo";
import Navbar from "./navbar/Navbar";
import { SideMenuWrapper } from "./style";

const SideMenu = () => {
  const { open, onMenuClick } = useContext(MenuContext);
  return (
    <SideMenuWrapper open={open} onClick={() => onMenuClick()}>
      <Logo />
      <Navbar />
    </SideMenuWrapper>
  );
};

export default SideMenu;
