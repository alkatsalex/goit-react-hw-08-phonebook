import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectToken } from 'store/registration/selectors';

const PublicRoute = ({ children }) => {
  const token = useSelector(selectToken);
  const { state: prevLocation } = useLocation();
  return !token ? children : <Navigate to={prevLocation ?? '/contact'} />;
};

export default PublicRoute;
