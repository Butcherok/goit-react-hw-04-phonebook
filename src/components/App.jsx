import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './contactForm/contactForm';
import { Filter } from './filter/filter';
import { ContactList } from './contactList/contactList';
import {
  ContactsTitle,
  Container,
  Phonebook,
  PhonebookTitle,
} from './App.styled';
// model.id = nanoid(); //=> "V1StGXR8_Z5jdHi6B-myT"

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);

    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevprops, prevstate) {
    if (this.state.contacts !== prevstate.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  contactChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  contactSubmit = e => {
    e.preventDefault();

    this.addContact({
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({
      name: '',
      number: '',
    });
  };

  addContact = contact => {
    console.log('addContact - ', contact);
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  getFilterContact = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <Container>
        <Phonebook>
          <PhonebookTitle>Phonebook</PhonebookTitle>
          <ContactForm
            addContact={this.addContact}
            contacts={this.state.contacts}
          />
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter
            contactChange={this.contactChange}
            filter={this.state.filter}
          />
          <ContactList
            getFilterContact={this.getFilterContact}
            deleteContacts={this.deleteContacts}
          ></ContactList>
        </Phonebook>
      </Container>
    );
  }
}
