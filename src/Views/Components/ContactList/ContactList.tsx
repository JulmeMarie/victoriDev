import React, { FC } from 'react';
import './ContactList.css';

interface ContactListProps {}

const ContactList: FC<ContactListProps> = () => (
  <div className="ContactList" data-testid="ContactList">
    ContactList Component
  </div>
);

export default ContactList;
