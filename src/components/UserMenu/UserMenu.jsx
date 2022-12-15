import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/userSlice/operations';
import css from './UserMenu.module.css';


const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.userData);

    const onLogOut = () => {
        dispatch(logOut());
    };

    return (
        <div className={css.userMenu}>
            <p className={css.infoWrapper1}>
                <span className={css.itemTitle}>Email:</span> <span className={css.nameInfo}>{user?.user.email}</span>
            </p>
            <p className={css.infoWrapper}>
                <span className={css.itemTitle}>Name:</span> <span className={css.nameInfo}>{user?.user.name}</span>
                <button className={css.button} onClick={onLogOut}>Log Out</button>
            </p>
        </div >
    )
}
export default UserMenu