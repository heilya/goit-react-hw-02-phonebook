// import { render } from "@testing-library/react";
import { Component } from "react";
import { nanoid } from 'nanoid';
import { Filter } from "./contactform/filter/filter";

export class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    name: '',
    number: '',
    filter: '',
  };
  handleNameChange = event => {
    this.setState({name: event.currentTarget.value});
  };
  handleNumberChange = event => {
    this.setState({number: event.currentTarget.value});
  };
  handleFilterChange = event => {
    this.setState({filter: event.currentTarget.value});
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState({contacts: [...this.state.contacts, {name: this.state.name,number:this.state.number, id: nanoid()}]});
    this.setState({name: ''});
    this.setState({number: ''});
    
  };


  render(){

const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));


    return (
      <div>
    <h1>Phonebook</h1>
    <form onSubmit={this.handleSubmit}>
      <label>
        Name
        <input
  type="text"
  name="name"
  value={this.state.name}
  onChange={this.handleNameChange}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
      </label>
      <label>
        Number
        <input
  type="tel"
  name="number"
  value={this.state.number}
  onChange={this.handleNumberChange}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
      </label>
      <button type="sumbit">Add contact</button>
    </form>
    <h2>Contacts</h2>
    <Filter value={this.state.filter} onChange={this.handleFilterChange}/>
    <ul>
    {visibleContacts.map((contact => (
      <li key={contact.id}>{contact.name}: {contact.number}</li>
    )))}
    </ul>
      </div>
    ); 
  }
    
};
