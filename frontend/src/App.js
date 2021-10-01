import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import CreateContact from './components/CreateContact';
import Table from './components/Table';

export default function App() {
  const [contacts, setConstacts] = useState([])
  const [contact, setConstact] = useState({})

  useEffect(() => {
    loadContacts()
  }, [])

  const loadContacts = async () => {
    const response = await axios.get('http://localhost:3001/')

    setConstacts(response.data.contact)
  }

  const editContact = (contact) => { 
    setConstact(contact)
  }

  const deleteContact = async (contact) => {
    await axios.delete(`http://localhost:3001/${contact._id}`)

    window.location.assign('/')
  }

  return (
    <div className="App">
      <Header />
      <CreateContact contact={contact} />
      <Table contacts={contacts} editContact={editContact} deleteContact={deleteContact} />
   </div>
  );
}