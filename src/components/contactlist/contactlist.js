import React from "react";
import { ContactListItem } from "./contactlistitems/contactlistitems";



export const ContactList = ({contacts}) => (
    <ul>
    {contacts.map((contact => (<ContactListItem key={contact.id} name={contact.name} number ={contact.number}/> 
)))}
</ul> 
);