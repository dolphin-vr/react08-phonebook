import { BtnAuth, UserBar, UserInfo } from 'components/AppHeader/AppHeader.styled';
import { MdAccountCircle } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSlice';
import { logout } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser).name;
  return (
    <UserBar>
      <MdAccountCircle size={32} />
      <UserInfo>Welcome, {userName}</UserInfo>
      <BtnAuth type="button" onClick={() => dispatch(logout())}>
        Logout
      </BtnAuth>
    </UserBar>
  );
};
