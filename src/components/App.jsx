import React, { lazy, Suspense, useEffect } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getAuth } from 'redux/userSlice/operations';
import UserMenu from './UserMenu/UserMenu';

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
      <div>
        <h1>PhoneBook</h1>
        {isUserLoggedIn ? (
          <UserMenu />
        ) : (
          <p>You are not authorized</p>
        )}

        <>
          <NavLink to='/'>
            Home
          </NavLink>
          {isUserLoggedIn ? (
            <>
              <NavLink to="/contacts">Contacts</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/sign-in">Login</NavLink>
            </>
          )}
        </>
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