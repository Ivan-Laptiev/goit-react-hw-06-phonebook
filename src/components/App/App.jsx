import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { Container } from "./App.styled";
//import { useSelector } from 'react-redux';

export function App() { 
 
   //const filter = useSelector(state => state.contacts.filter); value={filter}
  
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm  />
      <h2>Contacts</h2>
      <Filter  />
      <ContactList  />
    </Container>
    );
}