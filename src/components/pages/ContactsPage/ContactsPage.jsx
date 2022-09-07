import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../../redux/contacts/ContactsAPI';
import { useSelector } from 'react-redux';
import ContactForm from 'components/contactsComponents/ContactForm/ContactForm';
import ContactList from 'components/contactsComponents/ContactList/ContactList';
import Filter from 'components/contactsComponents/Filter/Filter';


export const Contacts = () => {
  const {error } = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {error ? (
        <h1>Error backend</h1>
      ) : (
        <div>
          <h1>Add new contact</h1>
          <ContactForm />
          <h2>Contacts list</h2>
          <Filter/>
          <ContactList />

        </div>
      )}
    </div>
  );
};
