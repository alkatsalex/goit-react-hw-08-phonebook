import { Link } from 'react-router-dom';
import css from './Home.module.css';

export default function HomePage() {
  return (
    <div>
      <div className={css.title}>
        <h1>Hello User!</h1>
      </div>
      <Link className={css.link} to="register">
        Sing up
      </Link>
      <Link className={css.link} to="login">
        Sing in
      </Link>
    </div>
  );
}
