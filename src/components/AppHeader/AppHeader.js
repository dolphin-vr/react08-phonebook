import { Navigation } from "components/Navigation/Navigation";
import { Wrapper } from "./AppHeader.styled";
import { AuthMenu } from "components/AuthMenu/AuthMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/authSlice";
import { UserMenu } from "components/UserMenu/UserMenu";

export const AppHeader = () =>{
   const isLogged = useSelector(selectIsLoggedIn);
   return(
      <Wrapper>
         <Navigation />
         {isLogged ? <UserMenu /> : <AuthMenu />}
      </Wrapper>

   )
}