import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function WithAuthRedirect(Component, navigateTo) {
    const ComponentWithRedirect = (props) => {
        const user = useSelector(state => state.userData.user);

        return Boolean(user) ? <Component {...props} /> : <Navigate to={navigateTo} />
    }

    return ComponentWithRedirect;
}

export default WithAuthRedirect