import { useEffect, useState } from 'react';
import ContactForm from './contactForm/contactForm';
import Filter from './filter/filter';
import ContactList from './contactList/contactList';
import {
  ContactsTitle,
  Container,
  Phonebook,
  PhonebookTitle,
} from './App.styled';

function loadData(key) {
  const savedData = localStorage.getItem(key);
  return savedData === null ? undefined : JSON.parse(savedData);
}

export default function App() {
  const [contacts, setContacts] = useState(() => loadData('contacts') ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const contactChange = ({ target: { name, value } }) => {
    if (name === 'filter') {
      setFilter(value);
    }
  };

  const addContact = contact => {
    setContacts(contacts => [...contacts, contact]);
  };

  const getFilterContact = () =>
    contacts.filter(contacts =>
      contacts.name
        .toLowerCase()
        .includes(
          filter.toLowerCase())
        );

  const deleteContacts = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <Container>
      <Phonebook>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm addContact={addContact} contacts={contacts} />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter contactChange={contactChange} filter={filter} />
        <ContactList
          getFilterContact={getFilterContact}
          deleteContacts={deleteContacts}
        ></ContactList>
      </Phonebook>
    </Container>
  );
}
