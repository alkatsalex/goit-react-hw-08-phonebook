import { Link } from 'react-router-dom';
import css from './Page404.module.css';

export default function Page404() {
  return (
    <div className={css.title}>
      <h1>Error 404</h1>
      <Link className={css.link} to="/">
        go Home
      </Link>
    </div>
  );
}
