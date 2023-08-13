import React from "react";


export const Filter = ({value, onChange}) => (
    <><p>Find contacts by name</p>
    <input type="text" name="filter" value={value} onChange={onChange}/></>
);