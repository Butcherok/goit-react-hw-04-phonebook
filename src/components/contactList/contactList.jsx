import PropTypes from 'prop-types';
import { ContactItem } from './contactItem';
import {
  ContactDeleteBtn,
  ContactsItem,
  ContactsList,
} from './contactList.jstyled';

export const ContactList = ({ getFilterContact, deleteContacts }) => {
  return (
    <ContactsList>
      {getFilterContact().map(({ id, name, number }) => {
        return (
          <ContactsItem className="contact" key={id}>
            <ContactItem name={name} number={number} />
            <ContactDeleteBtn
              className="contactDeleteBtn"
              type="button"
              onClick={() => deleteContacts(id)}
            >
              Delete
            </ContactDeleteBtn>
          </ContactsItem>
        );
      })}
    </ContactsList>
  );
};

ContactList.propTypes = {
  getFilterContact: PropTypes.func.isRequired,
  deleteContacts: PropTypes.func.isRequired,
};
