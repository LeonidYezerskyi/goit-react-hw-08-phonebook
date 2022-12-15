import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SignInForm from 'components/SignInForm/SignInForm';

function SignInPage() {
    const { isLoading, error, user } = useSelector(state => state.userData);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) return;

        navigate('/contacts');
    }, [user, navigate]);

    return (
        <div>
            {error.length > 0 && <p>Some error occured... With message {error}</p>}
            <SignInForm isLoading={isLoading} />
        </div>
    );
}

export default SignInPage;
