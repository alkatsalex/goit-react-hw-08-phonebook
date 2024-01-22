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
    <div>
      <label htmlFor="filterInput">
        <h3 className={css.title}>Serch contact: {filter}🔎</h3>
      </label>
      <form action="">
        <input
          className={css.input}
          type="text"
          name="filter"
          value={filter}
          onChange={hendleChange}
        />
      </form>
    </div>
  );
}
