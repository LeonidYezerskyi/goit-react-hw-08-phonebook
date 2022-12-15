import React, { useEffect } from 'react';

import WithAuthRedirect from '../HOC/WithAuthRedirect';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import css from '../components/ContactList/ContactList.module.css';
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
            <ContactForm />
            <Filter />
            <div className={css.contactsWrapper}>
                <h2 className={css.title}>Contact list</h2>
                {error && <p>Some error occured... {error}</p>}
                {isLoading && <Loader />}
                {contacts?.length > 0 ?
                    <ContactList /> : <p className={css.notification}>There are no contacts yet</p>}
            </div>
        </div >
    );
}

export default WithAuthRedirect(ContactsPage, '/sign-in');