import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signUp } from 'redux/userSlice/operations';

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
        <form onSubmit={onSubmit}>
            <h2 className="form-title">Sign up</h2>
            <label className="input-group">
                <span>Name:</span>
                <input
                    type="text"
                    name="name"
                    onChange={onChange}
                    value={formData.name}
                    required
                />
            </label>
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
                    placeholder="At least 7 characters"
                    required
                />
            </label>

            <button type="submit" disabled={isLoading}>Sign up</button>
        </form>
    );
}

export default SignUpForm;
