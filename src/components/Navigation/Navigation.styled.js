import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 20px;
  padding: 4px;
`;

export const MainNav = styled.ul`
  display: flex;
  gap: 30px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  color: black;

  &.active {
    color: darkorange;
  }
`;
