import React from "react";


export const ContactListItem =({id,name, number, onDelete}) => (
    <div><li>{name}: {number}</li>
    <button onClick={()=>onDelete(id)}>Delete</button>
    </div>
);



