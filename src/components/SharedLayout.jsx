import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProfile, selectToken } from 'store/Registration/selectors';
import { currentUser } from 'store/operetions';

export default function SharedLayout() {
  const profile = useSelector(selectProfile);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  useEffect(() => {
    !profile && token && dispatch(currentUser());
  }, [dispatch, profile, token]);
  return (
    <div
      style={{
        width: '370px',
        fontSize: 34,
        color: '#010101',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <h1>
        Phone<span style={{ color: 'rgb(54, 96, 212)' }}>book</span>
      </h1>
      <Header />
      <Outlet />
    </div>
  );
}
