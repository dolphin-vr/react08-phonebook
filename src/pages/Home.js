import { Layout, Text, Title } from 'components/Layout';
import { MdOutlineContactPhone } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSlice';

export const Home = () => {
  const isLogged = useSelector(selectIsLoggedIn);

  return (
    <Layout>
      <Title>
        <MdOutlineContactPhone size={48} /> Phonebook
      </Title>
      {isLogged ? <Text>Thanks for registering and using this app</Text> : <Text>Please register or login to use this app</Text>}
      {/* {error && <ErrMsg>Sorry, something went wrong. Try reload page</ErrMsg>} */}
    </Layout>
  );
};
