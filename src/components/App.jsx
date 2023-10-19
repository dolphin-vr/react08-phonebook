import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Home } from "pages/Home";
import { refresh } from "redux/auth/operations";
import { selectIsRefreshing } from "redux/auth/authSlice";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { PrivateRoute, RestrictedRoute } from "./AuthRoutes/AuthRoutes";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { GlobalStyle } from "./GlobalStyle";
import { RegisterForm } from "./RegisterForm/RegisterForm";
import { LoginForm } from "./LoginForm/LoginForm";

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (<>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegisterForm />} />}/>
        <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LoginForm />} />}/>
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactList />} />}/>
        <Route path="/newcontact" element={<PrivateRoute redirectTo="/login" component={<ContactForm />} />}/>
      </Route>
    </Routes>
      <GlobalStyle />
  </>
  );
}
