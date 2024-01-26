import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import PrivateRoute from '../guards/PrivateRoute';
import PublicRoute from '../guards/PublicRoute';
import Loading from './Loading';
import PhoneBoookPage from '../page/PhonebookPageLayout/PhoneBookLayout';
import { useDispatch } from 'react-redux';
import { currentUser } from 'store/operetions';
import Home from 'page/HomeLayout/HomeLayout';
import ContactCreationPage from 'page/ContactCreationPage/ContactCreationPage';
import HomePage from 'page/Home/HomePage';
import Page404 from 'page/Page404/Page404';

const ContactsPage = lazy(() => import('../page/ContactPage/ContactsPage'));
const RegisterPage = lazy(() =>
  import('../page/Registration/RegistrationPage')
);
const LogInPage = lazy(() => import('../page/Login/LogInPage'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route
            path="/"
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LogInPage />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />

          <Route
            path="*"
            element={
              <PublicRoute>
                <Page404 />
              </PublicRoute>
            }
          />
        </Route>
        <Route path="contact" element={<PhoneBoookPage />}>
          <Route
            index
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="creation"
            element={
              <PrivateRoute>
                <ContactCreationPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
