import { NavItem, NavMenu, StyledLink } from 'components/AppHeader/AppHeader.styled';

export const AuthMenu = () => {
  return (
   <NavMenu>
      {/* <li><StyledLink to="/register">Register</StyledLink></li> */}
      <NavItem><StyledLink to="/register">Register</StyledLink></NavItem>
      <NavItem><StyledLink to="/login">Log In</StyledLink></NavItem>
   </NavMenu>
  );
};
