import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logInUser } from 'store/operetions';
import { selectToken } from 'store/Registration/selectors';

export default function LogInPage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const token = useSelector(selectToken);

  useEffect(() => {
    token && navigate('contact');
  }, [token, navigate]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    const user = {
      email,
      password,
    };

    dispatch(logInUser(user));
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
            <h3>Email</h3>
          </label>
          <input
            type="text"
            name="email"
            // value={name}
            required
            // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="telInput">
            <h3>Password</h3>
          </label>
          <input
            type="text"
            name="password"
            // value={number}
            required
            // onChange={handleChange}
          />
        </div>
        <button type="submit">LogIn 📘</button>
      </form>
    </div>
  );
}
