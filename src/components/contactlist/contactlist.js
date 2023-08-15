import React from "react";
import { ContactListItem } from "./contactlistitems/contactlistitems";



export const ContactList = ({contacts, onDelete}) => (
    <ul>
    {contacts.map((contact => (<ContactListItem key={contact.id} name={contact.name} number ={contact.number} onDelete={onDelete} id={contact.id}/> 
)))}
</ul> 
);