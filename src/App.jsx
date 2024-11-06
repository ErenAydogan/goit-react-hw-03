import { useState, useEffect } from 'react';
import styles from './App.module.css';
import Contact from './components/Contact/Contact';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchForm from './components/SearchForm/SearchForm';
import Title from './components/Title/Title';


function App() {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
  });
  const [filter, setFilter] = useState('');
  const [showContacts, setShowContacts] = useState(contacts);

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  useEffect( () => {
    if (filter.trim() === '')
    {
      setShowContacts(contacts)
    }
    else
    {
      setShowContacts(contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())))
    }
  }
  )


  console.log(showContacts)

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
    <section className={styles['header']}>
      <Title>Phonebook</Title>
    </section>
    <section className={styles['main']}>
      <ContactForm contacts={contacts} setContacts={setContacts}/>
      <SearchForm filter={filter} setFilter={setFilter}/>
      <ContactList>
        {
          showContacts.length !== 0 
          ?
          showContacts.map((contact) => {
            return <Contact key={contact.id} id={contact.id} name={contact.name} number={contact.number} onClick={handleDelete}/>
          })
          : 
          <p>There are no contacts in the list</p>
        }
      </ContactList>
    </section>
    </>
  )
}

export default App
