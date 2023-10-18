import { BtnLogout, NavMenu, UserInfo } from "components/AppHeader/AppHeader.styled";
import { MdAccountCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "redux/auth/authSlice";
import { logout } from "redux/auth/operations";

export const UserMenu =()=>{
   const dispatch = useDispatch();
   const userName = useSelector(selectUser).name;
   return(
      <NavMenu>
         <UserInfo><MdAccountCircle/>Welcome, {userName}</UserInfo>
         <BtnLogout type="button" onClick={()=>dispatch(logout())}>Logout</BtnLogout>
      </NavMenu>
   )
}