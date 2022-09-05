import s from './ContactList.module.css';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contactsApi';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function ContactList() {
  const [isDeleting, setIsDeleting] = useState(false);
  const filter = useSelector(state => state.filter);
  const { data, isLoading, isError } = useGetContactsQuery();

  const [deleteContact] = useDeleteContactMutation();

  const handleDeleteContact = async id => {
    setIsDeleting(true);
    await deleteContact(id).unwrap();
    setIsDeleting(false);
  };

  if (isLoading) {
    return <h1>Загружаем контакты....</h1>;
  }
  if (isError) {
    return <h1>Упс, бекэнд сломался</h1>;
  }

  const getFilteredContacts = () => {
    if (!data) {
    }

    const normalizedFilter = filter.toLowerCase();

    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredData = getFilteredContacts();

  return (
    <ul>
      {filteredData &&
        filteredData.map(el => (
          <li key={el.id}>
            <span className={s.span}>{el.name} : </span>
            <span>{el.number}</span>
            <button
              disabled={isDeleting}
              onClick={() => handleDeleteContact(el.id)}
            >
              {isDeleting ? 'Удаляю...' : 'Удалить'}
            </button>
          </li>
        ))}
    </ul>
  );
}

export default ContactList;
