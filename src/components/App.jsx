import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import PrivateRoute from '../guards/PrivateRoute';
import PublicRoute from '../guards/PublicRoute';
import Loading from './Loading';
import PhoneBoookPage from '../page/PhonebookPage/PhoneBookPage';
import { useDispatch } from 'react-redux';
import { currentUser } from 'store/operetions';
import Home from 'page/Home/HomePage';
import ContactCreationPage from 'page/ContactCreationPage/ContactCreationPage';

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
            index
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
