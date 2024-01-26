import css from './Registration.module.css';
export default function Registration({ handleSubmit }) {
  return (
    <div className={css.formThumb}>
      <form className={css.form} onSubmit={handleSubmit}>
        <div>
          <label className={css.label} htmlFor="nameInput">
            Name
          </label>
          <input className={css.input} type="text" name="name" required />
        </div>
        <div>
          <label className={css.label} htmlFor="telInput">
            Email
          </label>
          <input className={css.input} type="text" name="email" required />
        </div>
        <div>
          <label className={css.label} htmlFor="telInput">
            Pasword
          </label>
          <input
            className={css.input}
            type="password"
            name="password"
            required
          />
        </div>
        <button className={css.formBtn} type="submit">
          Sing up
        </button>
      </form>
    </div>
  );
}
