import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';


export const Contacts = () => {

  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};
