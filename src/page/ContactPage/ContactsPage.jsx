import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Profile from 'components/Profile/Profile';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOutUser } from 'store/operetions';
import css from './ContactPage.module.css';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const hendlerClick = () => {
    dispatch(logOutUser());
  };
  return (
    <div>
      <header className={css.header}>
        <h2 className={css.title}>Contact</h2>
        <Link className={css.navLink} to="creation">
          ➕
        </Link>
      </header>

      <Filter />
      <Profile logOut={hendlerClick} />
      <ContactList />
    </div>
  );
}
