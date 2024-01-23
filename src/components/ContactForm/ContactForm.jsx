import css from './ContactForm.module.css';

function ContactForm({ handleSubmit }) {
  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <div>
          <label className={css.title} htmlFor="nameInput">
            Name
          </label>
          <input className={css.input} type="text" name="name" required />
        </div>
        <div>
          <label className={css.title} htmlFor="telInput">
            Number
          </label>
          <input className={css.input} type="tel" name="number" required />
        </div>
        <button className={css.btn} type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
