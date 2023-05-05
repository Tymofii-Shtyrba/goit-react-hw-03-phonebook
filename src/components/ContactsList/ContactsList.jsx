import React from 'react';
import PropTypes from 'prop-types';
import { StyledList } from './ContactList.styled';

export default function ContactsList({ contacts, contactToDelete }) {
  return (
    <StyledList>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <span>
              {contact.name}: {contact.number}
            </span>
            <button onClick={() => contactToDelete(contact.id)}>Delete</button>
          </li>
        );
      })}
    </StyledList>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  contactToDelete: PropTypes.func,
};
