import { GlobalStyle } from 'GlobalStyle';
import { Layout } from './Layout/Layout.styled';
import { Component } from 'react';
import { ContactsForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

export class App extends Component{

  state = {
    contacts: [],
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
    this.setState({ filter: evt.target.value });
  };
  
  filterContact = (contactsArr) => {
    return contactsArr.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));
  }

  checkName = name => {
    if(this.state.contacts.find(contact => contact.name === name)){
      alert(`${name} is already in contacts!`)
    }
  }

  deleteContacts = name => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.name !== name),
      };
    });
  }
  
  render(){
    const { filter: filterValue } = this.state;
     return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactsForm onSave={this.addContact} contacts={this.state.contacts}></ContactsForm>
        <h2>Contacts</h2>
        <Filter onChange={this.handleChange} value={filterValue}/> 
        <ContactsList contactsList={this.filterContact(this.state.contacts)} onClickDelete={this.deleteContacts}/>
        <GlobalStyle/>
      </Layout>
    );
  }
};
