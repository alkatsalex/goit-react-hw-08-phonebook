import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import PrivateRoute from '../guards/PrivateRoute';
import PublicRoute from '../guards/PublicRoute';
import Loading from './Loading';
import SharedLayout from './SharedLayout';
import { useDispatch } from 'react-redux';
import { currentUser } from 'store/operetions';

const PhoneBookPage = lazy(() => import('../page/PhoneBookPage'));
const RegisterPage = lazy(() => import('../page/RegistrationPage'));
const LogInPage = lazy(() => import('../page/LogIn'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />

          <Route
            path="contact"
            element={
              <PrivateRoute>
                <PhoneBookPage />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <LogInPage />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
