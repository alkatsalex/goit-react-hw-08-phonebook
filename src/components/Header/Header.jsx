import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'store/Registration/selectors';
import { logOutUser } from 'store/operetions';

export default function Header() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  // const profile = useSelector(selectProfile);
  const hendlerClick = () => {
    dispatch(logOutUser());
  };
  return (
    <header
      style={{
        border: 'solid 2px rgb(11, 26, 68)',
        borderRadius: '24px',
        padding: '20px 16px',
        marginTop: '24px',
      }}
    >
      {!token ? (
        <nav className={css.nav}>
          <NavLink to="/">register</NavLink>
          <NavLink to="/login">login</NavLink>
        </nav>
      ) : (
        <div>
          {/* <h4>Hi {profile.name}</h4> */}
          <nav className={css.nav}>
            <NavLink to="/contact">contacts</NavLink>
            <button type="click" onClick={hendlerClick}>
              logOut
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
