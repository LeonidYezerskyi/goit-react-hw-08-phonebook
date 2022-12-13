import React, { lazy, Suspense, useEffect } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/contactSlice/operations';
import css from './App.module.css';
import { getAuth, logOut } from 'redux/userSlice/operations';

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

  const onLogOut = () => {
    dispatch(logOut());
  };

  // const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  const isUserLoggedIn = Boolean(user?.user);

  if (!isUserLoggedIn && isLoading) return <p>Initializing...</p>
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,
        color: '#010101',
      }}
    >
      {
        isUserLoggedIn ? (
          <div>
            <p>
              Email: <b>{user?.user.email}</b>
            </p>
            <p>
              Name: <b>{user?.user.name}</b>
            </p>
          </div >
        ) : (
          <p>You are not authorized</p>
        )}
      <nav className={css.header}>
        <NavLink to="/contacts">Contacts</NavLink>
        {!isUserLoggedIn && (
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/sign-in">Login</NavLink>
          </>
        )}
        {isUserLoggedIn && <button onClick={onLogOut}>Log Out</button>}
      </nav>
      <Suspense fallback={<p>Wait, page is downloading...😒</p>}>
        <Routes>
          <Route path="/contacts" element={< LazyContacts />} />
          <Route path="/register" element={<LazySignUp />} />
          <Route path="/sign-in" element={<LazySignIn />} />
        </Routes>
      </Suspense>
    </div >
  );
}


export { App };