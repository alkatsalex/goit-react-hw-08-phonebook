import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { chengeFilter } from 'store/filterSlice/filterSlice';
import { selectFilter } from 'store/filterSlice/selectors';

export default function Filter() {
  const { filter } = useSelector(selectFilter);
  const dispatch = useDispatch();

  const hendleChange = e => {
    const filter = e.target.value;
    console.log('filter :>> ', filter);
    dispatch(chengeFilter(filter));
  };

  return (
    <div className={css.filter}>
      <form className={css.form} action="">
        <input
          className={css.input}
          type="text"
          name="filter"
          value={filter}
          onChange={hendleChange}
          placeholder="🔎"
        />
      </form>
    </div>
  );
}
