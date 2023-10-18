import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSlice';
import { MainNav, StyledLink } from './Navigation.styled';
// import { useAuth } from 'hooks';

export const Navigation = () => {
  // const { isLoggedIn } = useAuth();
  const isLogged = useSelector(selectIsLoggedIn);

  return (
    <MainNav>
      <StyledLink to="/">
        Home
      </StyledLink>
      {isLogged && <>
        <StyledLink to="/contacts">
          Contacts List
        </StyledLink>
        <StyledLink to="/newcontact">
          New Contact
        </StyledLink>
      </>
      }
    </MainNav>
  );
};
