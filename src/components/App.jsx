import React, { lazy, Suspense, useEffect } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { getAuth } from 'redux/userSlice/operations';
import UserMenu from './UserMenu/UserMenu';
import css from '../components/App.module.css';

const LazyHomePage = lazy(() => import("../pages/NavigationPage"));
const LazySignUp = lazy(() => import('../pages/SignUpPage'))
const LazySignIn = lazy(() => import('../pages/SignInPage'));
const LazyContacts = lazy(() => import('../pages/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector(state => state.userData);

  useEffect(() => {
    if (!localStorage.getItem('token')) return;

    dispatch(getAuth());
  }, [dispatch]);

  const isUserLoggedIn = Boolean(user?.user);

  if (!isUserLoggedIn && isLoading) return <p>Initializing...</p>
  return (
    <div>
      <div className={css.header}>
        <h1 className={css.title}>PhoneBook</h1>
        {isUserLoggedIn ? (
          <UserMenu />
        ) : (
          <p className={css.text}>You are not authorized</p>
        )}

        <div className={css.navContainer}>
          {isUserLoggedIn ? (
            <>
              <NavLink className={({ isActive }) =>
                cn(css.navPage, { [css.active]: isActive, })} to="/contacts">Contacts</NavLink>
            </>
          ) : (
            <>
              <NavLink className={({ isActive }) =>
                cn(css.navPage, { [css.active]: isActive, })} to='/'>Home</NavLink>
              <NavLink className={({ isActive }) =>
                cn(css.navPage, { [css.active]: isActive, })} to="/register">Register</NavLink>
              <NavLink className={({ isActive }) =>
                cn(css.navPage, { [css.active]: isActive, })} to="/sign-in">Login</NavLink>
            </>
          )}
        </div>
      </div>

      <Suspense fallback={<p>Wait, page is downloading...😒</p>}>
        <Routes>
          <Route path="/" element={< LazyHomePage />} />
          <Route path="/contacts" element={< LazyContacts />} />
          <Route path="/register" element={<LazySignUp />} />
          <Route path="/sign-in" element={<LazySignIn />} />
        </Routes>
      </Suspense>
    </div >
  );
}


export { App };