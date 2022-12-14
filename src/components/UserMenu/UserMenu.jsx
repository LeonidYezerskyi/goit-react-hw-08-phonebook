import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/userSlice/operations';


const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.userData);

    const onLogOut = () => {
        dispatch(logOut());
    };

    return (
        <div>
            <p>
                Email: <b>{user?.user.email}</b>
            </p>
            <p>
                Name: <b>{user?.user.name}</b>
            </p>
            <button onClick={onLogOut}>Logout</button>
        </div >
    )
}
export default UserMenu