import { GlobalStyle } from 'GlobalStyle';
import { Layout } from './Layout/Layout.styled';
import { Component } from 'react';
import { ContactsForm } from './Form/Form';



export class App extends Component{

  state = {
    contacts: [],
    name: ''
  }

  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  render(){
     return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactsForm onSave = {this.addContact}></ContactsForm>

        <h2>Contacts</h2>
        <ul> 
          {this.state.contacts.map(contact => <li key={contact.id}>  {contact.name}</li>)}
        </ul>
        <GlobalStyle/>
      </Layout>
    );
  }
};
