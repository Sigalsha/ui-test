import styled from "styled-components";

export const SideMenuWrapper = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
`;
