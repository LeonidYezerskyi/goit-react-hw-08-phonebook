import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm/SignUpForm';

function SignUpPage() {
    const { isLoading, error, user } = useSelector(state => state.userData);

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) return;

        navigate('/contacts');
    }, [user, navigate]);

    return (
        <div>
            <h1>Sign Up</h1>
            {error.length > 0 && <p>Some error occured... With message {error}</p>}
            <SignUpForm isLoading={isLoading} />
        </div>
    );
}

export default SignUpPage;
