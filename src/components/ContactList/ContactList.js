import { useDispatch, useSelector } from 'react-redux';
import {
  BtnDelete,
  List,
  ListItem,
  Name,
  Phone,
  Wrapper,
} from './ContactList.styled';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { Filter } from 'components/Filter/Filter';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Filter />
      <List>
        {contacts.map(el => (
          <ListItem key={el.id}>
            <Name>{el.name}</Name>
            <Phone>{el.phone}</Phone>
            <BtnDelete onClick={() => dispatch(deleteContact(el.id))}>
              <MdOutlineDeleteForever size={24} />
            </BtnDelete>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};
