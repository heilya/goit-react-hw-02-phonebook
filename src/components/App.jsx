// import { render } from "@testing-library/react";
import { Component } from "react";
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  handleNameChange = event => {
    this.setState({name: event.currentTarget.value});
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({contacts: [...this.state.contacts, {name: this.state.name, id: nanoid()}]});
    this.setState({name: ''});
  
  }


  render(){
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
      <button type="sumbit">Add contact</button>
    </form>
    <h2>Contacts</h2>
    <ul>
    {this.state.contacts.map((contact => (
      <li key={contact.id}>{contact.name}</li>
    )))}
    </ul>
      </div>
    ); 
  }
    
};
