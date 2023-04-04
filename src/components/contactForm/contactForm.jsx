import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  AddContactBtn,
  NameInput,
  NameLabel,
  NewContactForm,
  NumberInput,
  NumberLabel,
} from './contactForm.styled';

export class ContactForm extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  contactChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  contactSubmit = e => {
    e.preventDefault();
    const { addContact, contacts } = this.props;

    const searchTwins = contacts.some(
      contact =>
        contact.name.toLowerCase() === e.target.name.value.toLowerCase().trim()
    );

    if (searchTwins) {
      alert(`${e.target.name.value.trim()} is already in contacts`);
      this.reset();
      return;
    }

    addContact({
      id: nanoid(),
      name: this.state.name.trim(),
      number: this.state.number.trim(),
    });

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <NewContactForm onSubmit={this.contactSubmit}>
        <NameLabel htmlFor="nameContact">Name</NameLabel>
        <NameInput
          type="text"
          name="name"
          id="nameContact"
          placeholder="Jack Jonson"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.contactChange}
        />
        <NumberLabel htmlFor="numberContact">Number</NumberLabel>
        <NumberInput
          type="tel"
          name="number"
          id="numberContact"
          placeholder="123-45-67"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.contactChange}
        />
        <AddContactBtn
          type="submit"
          disabled={!this.state.name || !this.state.number}
        >
          Add contact
        </AddContactBtn>
      </NewContactForm>
    );
  }
}
