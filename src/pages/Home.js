import { selectIsLoggedIn } from 'redux/auth/authSlice';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { GlobalStyle } from 'components/GlobalStyle';
import { ErrMsg, Layout, Title } from 'components/Layout';
import { Loader } from 'components/Loader/Loader';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { selectError, selectIsLoading } from 'redux/selectors';
import { MdOutlineContactPhone } from 'react-icons/md';
import { useSelector } from 'react-redux';

export const Home = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isLogged = useSelector(selectIsLoggedIn);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Layout>
      <RegisterForm />
      <Title>
        <MdOutlineContactPhone size={48} /> Phonebook
      </Title>
      {isLogged && <ContactForm />}
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <Loader />}
      <ContactList />
      {error && <ErrMsg>Sorry, something went wrong. Try reload page</ErrMsg>}
      <GlobalStyle />
    </Layout>
  );
};
