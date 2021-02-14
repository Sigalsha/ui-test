import React, { useState } from "react";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import SideMenu from "../sideMenu/SideMenu";
import {
  BurgerMenuContainer,
  BurgerMenuWrapper,
  BurgerLine,
  Icon,
} from "./style";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <BurgerMenuContainer open={open} onClick={() => setOpen(!open)}>
        <Icon icon={faCaretLeft} open={open} />

        <BurgerMenuWrapper open={open}>
          <BurgerLine open={open}></BurgerLine>
          <BurgerLine open={open}></BurgerLine>
          <BurgerLine open={open}></BurgerLine>
        </BurgerMenuWrapper>
      </BurgerMenuContainer>
      <SideMenu open={open}></SideMenu>
    </div>
  );
};

export default BurgerMenu;
