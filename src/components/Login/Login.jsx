import css from './Login.module.css';
export default function Login({ handleSubmit }) {
  return (
    <div className={css.formThumb}>
      <form className={css.form} onSubmit={handleSubmit}>
        <div>
          <label className={css.label} htmlFor="nameInput">
            Email
          </label>
          <input className={css.input} type="text" name="email" required />
        </div>
        <div>
          <label className={css.label} htmlFor="telInput">
            Password
          </label>
          <input
            className={css.input}
            type="password"
            name="password"
            required
          />
        </div>
        <button className={css.formBtn} type="submit">
          Sing in
        </button>
      </form>
    </div>
  );
}
