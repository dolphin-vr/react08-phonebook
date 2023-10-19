import { useDispatch, useSelector } from 'react-redux';
import {
  BtnDelete,
  BtnEdit,
  List,
  ListItem,
  Name,
  Phone,
  Wrapper,
} from './ContactList.styled';
import { MdEdit, MdOutlineDeleteForever } from 'react-icons/md';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/operations';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(selectFilteredContacts);
  console.log('cont= ', contacts);
  return (
    <Wrapper>
      <Filter />
      <List>
        {contacts.map(el => (
          <ListItem key={el.id}>
            <Name>{el.name}</Name>
            <Phone>{el.number}</Phone>
            <BtnEdit>
              <MdEdit size={24} />
            </BtnEdit>
            <BtnDelete onClick={() => dispatch(deleteContact(el.id))}>
              <MdOutlineDeleteForever size={24} />
            </BtnDelete>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};
