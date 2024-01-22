import { useSelector } from 'react-redux';
import { selectToken } from 'store/Registration/selectors';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = useSelector(selectToken);
  const location = useLocation();

  return token ? children : <Navigate to="/login" state={location} />;
};

export default PrivateRoute;
