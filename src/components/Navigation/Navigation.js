import { MainNav, NavItem, StyledLink } from 'components/AppHeader/AppHeader.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSlice';

export const Navigation = () => {
  const isLogged = useSelector(selectIsLoggedIn);

  return (
    <MainNav>
      <NavItem><StyledLink to="/">Home</StyledLink></NavItem>
      {isLogged && <>
        <NavItem><StyledLink to="/contacts">Contacts List</StyledLink></NavItem>
        <NavItem><StyledLink to="/newcontact">New Contact</StyledLink></NavItem>
      </>}
    </MainNav>
  );
};
