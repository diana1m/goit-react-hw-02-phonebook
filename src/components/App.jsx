import { GlobalStyle } from 'GlobalStyle';
import { Layout } from './Layout/Layout.styled';
import { Component } from 'react';
import { ContactsForm } from './Form/Form';



export class App extends Component{

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  handleChange = evt => {
    this.setState({ inputValue: evt.target.value });
  }

  render(){
    const { filterValue } = this.state;
     return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactsForm onSave = {this.addContact}></ContactsForm>

        <h2>Contacts</h2>

        <input onChange={this.handleChange}  value={filterValue} type="text" name="filter"/> 

        <ul> 
          {this.state.contacts.map(contact => <li key={contact.id}>  {contact.name}: {contact.number}</li>)}
        </ul>
        <GlobalStyle/>
      </Layout>
    );
  }
};
