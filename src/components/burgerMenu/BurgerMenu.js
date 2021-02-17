import React, { useContext } from "react";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { MenuContext } from "../../contexts/MenuContext";
import {
  BurgerMenuContainer,
  BurgerMenuWrapper,
  BurgerLine,
  Icon,
} from "./style";

const BurgerMenu = () => {
  const { onMenuClick, open } = useContext(MenuContext);

  return (
    <div>
      <BurgerMenuContainer open={open} onClick={() => onMenuClick()}>
        <Icon icon={faCaretLeft} open={open} />

        <BurgerMenuWrapper open={open}>
          <BurgerLine></BurgerLine>
          <BurgerLine></BurgerLine>
          <BurgerLine></BurgerLine>
        </BurgerMenuWrapper>
      </BurgerMenuContainer>
    </div>
  );
};

export default BurgerMenu;
