import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContacts } from 'redux/contacts/ContactsAPI';
import { useSelector } from 'react-redux';
import s from './ContactForm.module.css'
const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      return alert(`"${name}" is already in contacts.`);
    }

    e.preventDefault();
    dispatch(addContacts({ name, number }));
    setName('')
    setNumber('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {' '}
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        {' '}
        Phone
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNumberChange}
        />
      </label>

      <button className={s.btn}type="submit">add contact</button>
    </form>
  );
};

export default ContactForm;
