import React, { useEffect } from 'react';

import WithAuthRedirect from '../HOC/WithAuthRedirect';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import css from '../components/App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice/operations';
import Loader from 'components/Loader/Loader';

function ContactsPage() {
    const dispatch = useDispatch();
    const { error, contacts, isLoading } = useSelector(
        state => state.contactsData
    );

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch])

    return (
        <div className={css.paper}>
            <h1 className={css.title}> Phonebook</h1>
            <ContactForm />

            <h2 className={css.title}>Contacts</h2>
            <Filter />
            {error && <p>Some error occured... {error}</p>}
            {isLoading && <Loader />}
            {contacts?.length > 0 &&
                <ContactList />}
        </div >
    );
}

export default WithAuthRedirect(ContactsPage, '/sign-in');