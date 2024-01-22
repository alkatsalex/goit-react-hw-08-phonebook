import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'store/operetions';
import { useEffect } from 'react';
import { selectToken } from 'store/Registration/selectors';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);

  useEffect(() => {
    token && navigate('contact');
  }, [token, navigate]);

  useEffect(() => {});

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = {
      name,
      email,
      password,
    };

    console.log(user);
    dispatch(registerUser(user));
    // form.reset();
  };

  return (
    <div
      style={{
        border: 'solid 2px rgb(11, 26, 68)',
        borderRadius: '24px',
        padding: '20px 16px',
        marginTop: '24px',
      }}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nameInput">
            <h3>Name</h3>
          </label>
          <input
            type="text"
            name="name"
            // value={name}
            required
            // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="telInput">
            <h3>Email</h3>
          </label>
          <input
            type="tel"
            name="email"
            // value={number}
            required
            // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="telInput">
            <h3>Pasword</h3>
          </label>
          <input
            type="text"
            name="password"
            // value={number}
            required
            // onChange={handleChange}
          />
        </div>
        <button type="submit">Sing in 📗</button>
      </form>
    </div>
  );
}
