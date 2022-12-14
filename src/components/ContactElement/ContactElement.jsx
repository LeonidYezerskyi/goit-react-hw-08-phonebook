import React from 'react';
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import css from './ContactElement.module.css';
import { deleteContact } from 'redux/contactsSlice/operations';

const ContactElement = ({ name, number, id }) => {
    const dispatch = useDispatch();
    return (
        <li className={css.item} key={id}>{name}: {number}
            <button className={css.button} value={id} onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
    )
}

ContactElement.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default ContactElement;

