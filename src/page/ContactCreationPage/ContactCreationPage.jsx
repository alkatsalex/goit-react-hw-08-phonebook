import ContactForm from 'components/ContactForm/ContactForm';
import { Link } from 'react-router-dom';
import css from './ContactCreation.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { postNewContact } from 'store/operetions';
import { selectContacts } from 'store/contactSlice/selectors';

export default function ContactCreationPage() {
  const { items } = useSelector(selectContacts);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const number = form.number.value;
    const name = form.name.value;
    const contact = {
      name,
      number,
    };

    const isDublicated = items.find(
      e => e.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isDublicated) {
      alert('This contact is already added');
      return;
    } else {
      dispatch(postNewContact(contact));
    }
    form.reset();
  };
  return (
    <div className={css.back}>
      <Link to="/">
        <span class="material-symbols-outlined">arrow_back_ios</span>
      </Link>
      <h1 className={css.title}>Add contact</h1>
      <ContactForm handleSubmit={handleSubmit} />
    </div>
  );
}
