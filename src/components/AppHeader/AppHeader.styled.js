import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 4px;
`
export const NavMenu = styled.ul`
  display: flex;
  gap: 30px;
`

export const NavItem = styled.li`
  padding: 4px;
`

export const StyledLink = styled(NavLink)`
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  color: black;

  &.active {
    color: darkorange;
  }
`;

export const UserInfo = styled.span`
  display: flex;
  gap: 20px;
`

export const BtnLogout = styled.button`
  padding: 4px;
`