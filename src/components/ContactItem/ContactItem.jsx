import { useDispatch } from 'react-redux';
import css from './ContactItem.module.css';
import { deleteContact } from 'store/operetions';
export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  const delele = id => {
    dispatch(deleteContact(id));
  };

  const handlerClick = () => {
    delele(id);
  };

  const telLink = `tel:${number}`;

  return (
    <li className={css.item}>
      <span>
        <p className={css.name}>{name}</p>

        <a className={css.tel} href={telLink}>
          {number}
        </a>
      </span>
      <button className={css.btn} onClick={handlerClick}>
        Delete
      </button>
    </li>
  );
}
