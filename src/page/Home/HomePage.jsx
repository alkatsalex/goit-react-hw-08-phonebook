import { Outlet } from 'react-router-dom';
import css from './Home.module.css';
export default function Home() {
  return (
    <div>
      <div className={css.conteiner}>
        <h1 className={css.title}>
          Phone<span className={css.acentTitle}>book</span>
        </h1>
      </div>

      <Outlet />
    </div>
  );
}
