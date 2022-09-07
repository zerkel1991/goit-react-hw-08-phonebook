import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/ContactsAPI';
import { useDispatch } from 'react-redux';
import s from './ContactList.module.css'
const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.value);
  const dispatch = useDispatch();

  const getfiltredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <ul>
        {contacts &&
          getfiltredContacts().map(el => (
            <li className={s.li}key={el.id}>
              <span className={s.name}><span>Name:</span><span className={s.userName}>{el.name}</span></span>
              <span>Phone:<span className={s.userName}>{el.number}</span></span>
              <button className={s.button}
                type="button"
                onClick={() => dispatch(deleteContact(el.id))}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ContactList;
