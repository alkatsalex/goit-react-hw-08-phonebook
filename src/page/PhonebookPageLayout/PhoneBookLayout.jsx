import { Outlet } from 'react-router-dom';
import css from './PhoneBook.module.css';

export default function PhoneBoookPage() {
  return (
    <div className={css.conteiner}>
      <h1 className={css.title}>
        Phone<span className={css.acentTitle}>book</span>
      </h1>
      <Outlet />
    </div>
  );
}
