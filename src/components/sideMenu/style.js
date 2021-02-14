import styled from "styled-components";

export const SideMenuWrapper = styled.nav`
  display: ${({ open }) => (open ? "block" : "none")};
`;
