import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPlus,
  faEnvelope,
  faBell,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { BUTTONS_TEXT } from "../../utils/consts";
import { MenuContext } from "../../contexts/MenuContext";
import Avatar from "../shared/avatar/Avatar";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import {
  HeaderWrapper,
  LeftWrapper,
  StyledIcon,
  AddButton,
  AddButtonIcon,
  Text,
  AvatarButton,
  ChooseIcon,
  RightWrapper,
} from "./style";

const Header = () => {
  const { open } = useContext(MenuContext);
  return (
    <HeaderWrapper open={open}>
      <LeftWrapper>
        <BurgerMenu />
        <StyledIcon icon={faSearch} />
      </LeftWrapper>

      <RightWrapper>
        <AddButton>
          <AddButtonIcon icon={faPlus} />
          <Text>{BUTTONS_TEXT.headerBtn}</Text>
        </AddButton>
        <StyledIcon icon={faEnvelope} />
        <StyledIcon icon={faBell} />
        <AvatarButton>
          <Avatar />
          <ChooseIcon icon={faSortDown} />
        </AvatarButton>
      </RightWrapper>
    </HeaderWrapper>
  );
};

export default Header;
