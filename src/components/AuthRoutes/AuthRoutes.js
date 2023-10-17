import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefreshing } from "redux/auth/authSlice";

// export const PrivateRoute = ()=>{
//    const isLoggedIn = useSelector(selectIsLoggedIn);
//    return(
//       <Route>
//          {isLoggedIn ? children : }
//       </Route>
//    )
// }

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
   const isLoggedIn = useSelector(selectIsLoggedIn);
   const isRefreshing = useSelector(selectIsRefreshing);
   // const { isLoggedIn, isRefreshing } = useAuth();
   const shouldRedirect = !isLoggedIn && !isRefreshing;
 
   return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
 };
 

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
   const isLoggedIn = useSelector(selectIsLoggedIn);
 
   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
 };
 