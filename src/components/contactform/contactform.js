import React from "react";
import { Component } from "react";

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };
    handleNameChange = event => {
        this.setState({name: event.currentTarget.value});
      };
      handleNumberChange = event => {
        this.setState({number: event.currentTarget.value});
      };
      handleSubmit = event => {
        event.preventDefault();
        this.setState({name: ''});
        this.setState({number: ''});
        this.props.onSumbit(this.state)
      };
    render() {
        return (
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
        );
    }
};