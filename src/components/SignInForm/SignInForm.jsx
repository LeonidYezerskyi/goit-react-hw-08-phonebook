import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signIn } from 'redux/userSlice/operations';
import css from './SignInForm.module.css'

function SignInForm({ isLoading }) {
    const [formData, setFormData] = useState({
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
            password: formData.password,
        };

        dispatch(signIn(finalData));
        reset();
    };

    const reset = () => {
        setFormData({
            email: '',
            password: '',
        });
    };

    return (
        <form className={css.form} onSubmit={onSubmit}>
            <h2 className={css.formTitle}>Log in</h2>

            <label>
                <p className={css.title}>Email</p>
                <input
                    className={css.inputPaper}
                    type="text"
                    name="email"
                    onChange={onChange}
                    value={formData.email}
                    placeholder='Write your name'
                    required
                />
            </label>
            <label>
                <p className={css.title}>Password:</p>
                <input
                    className={css.inputPaper}
                    type="password"
                    name="password"
                    onChange={onChange}
                    value={formData.password}
                    placeholder='Write your email'
                    required
                />
            </label>

            <button className={css.button} type="submit" disabled={isLoading}>Sign in</button>
        </form>
    );
}

export default SignInForm;
