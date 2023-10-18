import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
// import { Header } from './SharedLayout.styled';
// import { Header, MainNav, StyledLink } from "./SharedLayout.styled";
import { Toaster } from 'react-hot-toast';
import { AppHeader } from './AppHeader/AppHeader';

const Wrapper = styled.div`
  padding: 20px;
`;

export const SharedLayout = () => {
  // const location = useLocation();
  return (
    <Wrapper>
      <AppHeader />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <Toaster />
    </Wrapper>
  );
};
