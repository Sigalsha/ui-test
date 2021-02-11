import React, { useState } from "react";
import SideMenu from "../sideMenu/SideMenu";
import { BurgerMenuWrapper, BurgerLine } from "./style";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <BurgerMenuWrapper open={open} onClick={() => setOpen(!open)}>
        <BurgerLine open={open}></BurgerLine>
        <BurgerLine open={open}></BurgerLine>
        <BurgerLine open={open}></BurgerLine>
      </BurgerMenuWrapper>
      <SideMenu open={open}></SideMenu>
    </div>
  );
};

export default BurgerMenu;
