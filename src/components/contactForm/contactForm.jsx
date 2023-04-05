import { useState } from 'react';
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

export default function ContactForm({ addContact, contacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactChange = ({ target: { name, value } }) => {
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const contactSubmit = e => {
    e.preventDefault();

    const searchTwins = contacts.some(
      contact =>
        contact.name.toLowerCase() === e.target.name.value.toLowerCase().trim()
    );

    if (searchTwins) {
      alert(`${e.target.name.value.trim()} is already in contacts`);
      reset();
      return;
    }

    addContact({
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <NewContactForm onSubmit={contactSubmit}>
      <NameLabel htmlFor="nameContact">Name</NameLabel>
      <NameInput
        type="text"
        name="name"
        id="nameContact"
        placeholder="Jack Jonson"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={contactChange}
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
        value={number}
        onChange={contactChange}
      />
      <AddContactBtn type="submit" disabled={!name || !number}>
        Add contact
      </AddContactBtn>
    </NewContactForm>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};