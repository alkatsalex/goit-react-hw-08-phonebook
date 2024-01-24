import ContactItem from 'components/ContactItem/ContactItem.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'store/contactSlice/selectors';
import { selectFilter } from 'store/filterSlice/selectors';
import { useEffect } from 'react';
import { selectLoading } from 'store/loading/selectors';
import { getContactsThunk } from 'store/operetions';

export default function ContactList() {
  const dispatch = useDispatch();
  const { items } = useSelector(selectContacts);
  const { filter } = useSelector(selectFilter);
  const { isLoading } = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const filteredContacts =
    items &&
    items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <div>
      <ul>
        {!isLoading ? (
          filteredContacts?.map(({ name, number, id }) => {
            return <ContactItem key={id} id={id} name={name} number={number} />;
          })
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
}
