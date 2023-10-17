// import { GlobalStyle } from "./GlobalStyle";
import { Layout} from "./Layout";
// import { ErrMsg, Layout, Title } from "./Layout";
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { fetchContacts } from "redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { selectError, selectIsLoading } from "redux/selectors";
// import { Loader } from "./Loader/Loader";
// import { RegisterForm } from "./RegisterForm/RegisterForm";
import { Home } from "pages/Home";
import { refresh } from "redux/auth/operations";
import { selectIsRefreshing } from "redux/auth/authSlice";
import { Route, Routes } from "react-router-dom";
import { Contacts } from "pages/Contacts";
import { Register } from "pages/Register";
import { Login } from "pages/Login";
// import { PrivateRoute, RestrictedRoute } from "./AuthRoutes/AuthRoutes";


export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // const isLogged = useSelector(selectIsLoading);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
        {/* <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<Register />} />}/>
        <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />}/>
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<Contacts />} />}/> */}
      </Route>
    </Routes>
  );
}

