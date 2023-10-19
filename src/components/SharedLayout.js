import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppHeader } from './AppHeader/AppHeader';
import styled from 'styled-components';

const Wrapper = styled.div`
max-width: 800px;
height: 100vh;
margin: 0 auto;
background-color: ${({ theme }) => theme.colors.background};
`;

export const SharedLayout = () => {
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
