import React from 'react';
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import css from './ContactElement.module.css';
import { deleteContact } from 'redux/contactSlice/operations';

const ContactElement = ({ name, phone, id }) => {
    const dispatch = useDispatch();
    return (
        <li className={css.item} key={id}>{name}: {phone}
            <button className={css.button} value={id} onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
    )
}

ContactElement.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};

export default ContactElement;

