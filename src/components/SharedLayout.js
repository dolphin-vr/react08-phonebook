import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import { Header } from "./SharedLayout.styled";
// import { Header, MainNav, StyledLink } from "./SharedLayout.styled";
import { Toaster } from 'react-hot-toast';
import { Navigation } from "./Navigation/Navigation";

const Wrapper = styled.div`
   padding: 20px;
`

export const SharedLayout = ()=>{
   // const location = useLocation();
   return (
      <Wrapper>
      <Header>
         <Navigation />
         {/* <MainNav>
            <li><StyledLink to="/" >Home</StyledLink></li>
            <li><StyledLink to="movies" end>Movies</StyledLink></li>
         </MainNav> */}
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
         <Outlet/>
      </Suspense>
        <Toaster />
      </Wrapper>
   )
}
