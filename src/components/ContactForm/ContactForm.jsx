// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css';
import { selectContacts } from 'store/ContactSlice/selectors';
import { postNewContact } from 'store/operetions';

function ContactForm() {
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
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nameInput">
            <h3 className={css.title}>Name</h3>
          </label>
          <input
            className={css.input}
            type="text"
            name="name"
            // value={name}
            required
            // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="telInput">
            <h3 className={css.title}>Number</h3>
          </label>
          <input
            className={css.input}
            type="tel"
            name="number"
            // value={number}
            required
            // onChange={handleChange}
          />
        </div>
        <button className={css.btn} type="submit">
          Add contact 📲
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
