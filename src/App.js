import React, {useState} from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import s from './App.module.css';


function App () {
  // const [contacts, setContacts] = useLocalStorage('contacts', []);

  return (
    <div className={s.context}>
      <h1 className="text">Phonebook</h1>
      <ContactForm />
      <h2 className="text">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  )
}

export default App;
