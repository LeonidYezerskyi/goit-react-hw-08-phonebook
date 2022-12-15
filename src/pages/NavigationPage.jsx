import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';

function NavigationPage() {
    const { isLoading, error, user } = useSelector(state => state.userData);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) return;

        navigate('/');
    }, [user, navigate]);
    return (
        <div>
            {error.length > 0 && <p>Some error occured... With message {error}</p>}
            <Navigation isLoading={isLoading} />
        </div>
    );
}

export default NavigationPage;
