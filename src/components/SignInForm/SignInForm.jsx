import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signIn } from 'redux/userSlice/operations';

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
        <form onSubmit={onSubmit}>
            <h2 className="form-title">Log in</h2>

            <label className="input-group">
                <span>Email:</span>
                <input
                    type="text"
                    name="email"
                    onChange={onChange}
                    value={formData.email}
                    required
                />
            </label>
            <label className="input-group">
                <span>Password:</span>
                <input
                    type="text"
                    name="password"
                    onChange={onChange}
                    value={formData.password}
                    required
                />
            </label>

            <button type="submit" disabled={isLoading}>Sign in</button>
        </form>
    );
}

export default SignInForm;
