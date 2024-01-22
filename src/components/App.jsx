import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PrivateRoute from '../guards/PrivateRoute';
import PublicRoute from '../guards/PublicRoute';

const SharedLayout = lazy(() => import('./SharedLayout'));
const Loading = lazy(() => import('./Loading'));
const PhoneBookPage = lazy(() => import('../page/PhoneBookPage'));
const RegisterPage = lazy(() => import('../page/RegistrationPage'));
const LogInPage = lazy(() => import('../page/LogIn'));

export const App = () => {
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
