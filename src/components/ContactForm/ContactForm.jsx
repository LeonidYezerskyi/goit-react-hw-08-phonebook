import React, { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'redux/contactSlice/operations';

const INITIAL_FORM_DATA = {
    contactName: '',
    contactNumber: '',
};

const ContactForm = () => {
    const contacts = useSelector((state) => state.contactsData.contacts.items);
    const [formData, setFormData] = useState(INITIAL_FORM_DATA)
    const dispatch = useDispatch();

    const onChange = e => {
        const { name, value } = e.target;

        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const onSubmitForm = e => {
        e.preventDefault();

        const newContact = {
            id: nanoid(),
            name: formData.contactName,
            phone: formData.contactNumber,
        };

        if (
            contacts.some(
                contact =>
                    contact.name.toLowerCase() === newContact.name.toLowerCase()
            )
        ) {
            alert(`${newContact.name} is already in contact list.`);
            return;
        }

        dispatch(addContact(newContact));
        reset();
    };

    const reset = () => {
        setFormData(INITIAL_FORM_DATA)
    }

    return (
        <div>
            <form className={css.form} onSubmit={onSubmitForm}>
                <label>
                    <p className={css.title}>Name</p>
                    <input
                        className={css.inputPaper}
                        type="text"
                        name="contactName"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        onChange={onChange}
                        value={formData.contactName}
                        placeholder='Write name and family name'
                        required
                    />
                </label>
                <label>
                    <p className={css.title}>Number</p>
                    <input
                        className={css.inputPaper}
                        type="tel"
                        name="contactNumber"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        onChange={onChange}
                        value={formData.contactNumber}
                        placeholder='Write phone number'
                        required
                    />
                </label>

                <button className={css.button} type="submit">Add contact</button>
            </form>
        </div>
    )
}

export default ContactForm;