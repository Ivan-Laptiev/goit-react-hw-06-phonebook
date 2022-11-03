import PhonebookForm from "components/PhonebookForm/PhonebookForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { Container } from "./App.styled";
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, setContact } from '../../Redux/Slice';

export function App() {
 
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const onAddContact = (newContact) => {
    const contactsNames = contacts.map(contact => contact.name);

    if (contactsNames.includes(newContact.name)) {
      alert(`${newContact.name} is already in contacts`)
    } else {
      dispatch(addContact(newContact));
    }    
  }

  const delContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilter = e => {
    dispatch(setContact(e.target.value));
  };

  const getFilteredContacts = () => {                                               
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  const filteredContacts = getFilteredContacts();

  return (
    <Container>
      <h1>Phonebook</h1>
      <PhonebookForm onAddContact={onAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilter}  />
      <ContactList value={filteredContacts} onDeleteContact={delContact} />
    </Container>
    );
}