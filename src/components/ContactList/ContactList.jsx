import React from 'react';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import ContactElement from '../ContactElement/ContactElement';
import Loader from 'components/Loader/Loader';

const ContactList = () => {
    const { items, isLoading, error } = useSelector((state) => state.contactsData.contacts);
    const filter = useSelector((state) => state.contactsData.filter);

    const filteredContacts = items.filter(
        item => item.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <section className={css.sectionList}>
            {Boolean(error).length > 0 && (
                <p className={css.notification}>Upss, Some error occured... {error}</p>
            )}
            {isLoading && <Loader />}
            <ul className={css.list}>
                {filteredContacts.map(({ id, name, phone }) => {
                    return <ContactElement name={name} phone={phone} key={id} id={id} />
                })}
            </ul>
        </section>
    )
}

export default ContactList;