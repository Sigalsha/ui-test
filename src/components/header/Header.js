import React from "react";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import { HeaderWrapper, StyledIcon, Button } from "./style";
import {
  faSearch,
  faPlus,
  faEnvelope,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <HeaderWrapper>
      <BurgerMenu />
      <StyledIcon icon={faSearch} />
      <Button>
        <StyledIcon icon={faPlus} />
      </Button>
      <StyledIcon icon={faEnvelope} />
      <StyledIcon icon={faBell} />
    </HeaderWrapper>
  );
};

export default Header;
