import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signUp } from 'redux/userSlice/operations';
import css from './SignUpForm.module.css'

function SignUpForm({ isLoading }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const dispatch = useDispatch();

    const onChange = e => {
        const { name, value } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onSubmit = e => {
        e.preventDefault();

        const finalData = {
            email: formData.email,
            name: formData.name,
            password: formData.password,
        };
        dispatch(signUp(finalData));
        reset();
    };

    const reset = () => {
        setFormData({
            name: '',
            email: '',
            password: '',
        });
    };

    return (
        <form className={css.form} onSubmit={onSubmit}>
            <h2 className={css.formTitle}>Sign up</h2>
            <label>
                <p className={css.title}>Name</p>
                <input
                    className={css.inputPaper}
                    type="text"
                    name="name"
                    onChange={onChange}
                    value={formData.name}
                    placeholder='Write your name'
                    required
                />
            </label>
            <label>
                <p className={css.title}>Email</p>
                <input
                    className={css.inputPaper}
                    type="text"
                    name="email"
                    onChange={onChange}
                    value={formData.email}
                    placeholder='Write your email'
                    required
                />
            </label>
            <label>
                <p className={css.title}>Password</p>
                <input
                    className={css.inputPaper}
                    type="password"
                    name="password"
                    onChange={onChange}
                    value={formData.password}
                    placeholder="At least 7 characters"
                    required
                />
            </label>

            <button className={css.button} type="submit" disabled={isLoading}>Sign up</button>
        </form>
    );
}

export default SignUpForm;
