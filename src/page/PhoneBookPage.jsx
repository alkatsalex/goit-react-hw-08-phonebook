import ContactForm from 'components/ContactForm/ContactForm.jsx';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export default function PhoneBook() {
  return (
    <div>
      <ContactForm />
      <div
        style={{
          border: 'solid 2px rgb(11, 26, 68)',
          borderRadius: '24px',
          padding: '20px 16px',
          marginTop: '24px',
        }}
      >
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}
