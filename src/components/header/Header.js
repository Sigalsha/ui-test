import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPlus,
  faEnvelope,
  faBell,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { BUTTONS_TEXT } from "../../utils/consts";
import Avatar from "../shared/avatar/Avatar";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import {
  HeaderWrapper,
  StyledIcon,
  AddButton,
  AddButtonIcon,
  Text,
  AvatarButton,
} from "./style";

const Header = () => {
  return (
    <HeaderWrapper>
      <div style={{ marginRight: "auto" }}>
        <BurgerMenu />
        <StyledIcon icon={faSearch} />
      </div>

      <AddButton>
        <AddButtonIcon icon={faPlus} />
        <Text>{BUTTONS_TEXT.headerBtn}</Text>
      </AddButton>
      <StyledIcon icon={faEnvelope} />
      <StyledIcon icon={faBell} />
      <AvatarButton>
        <Avatar />
        <StyledIcon icon={faSortDown} />
      </AvatarButton>
    </HeaderWrapper>
  );
};

export default Header;
