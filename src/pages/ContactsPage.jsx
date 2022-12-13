import React from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import css from '../components/App.module.css';

function ContactsPage() {

    return (
        <div className={css.paper}>
            <h1 className={css.title}> Phonebook</h1>
            <ContactForm />

            <h2 className={css.title}>Contacts</h2>
            <Filter />
            <ContactList />
        </div >
    );
}

export default ContactsPage;