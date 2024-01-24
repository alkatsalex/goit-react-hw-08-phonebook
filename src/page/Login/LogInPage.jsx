import Login from 'components/Login/Login';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logInUser } from 'store/operetions';
import { selectToken } from 'store/registration/selectors';
import css from './LoginPage.module.css';

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
    <div>
      <Login handleSubmit={handleSubmit} />
      <div className={css.conteiner}>
        <p className={css.labelToLink}>
          Don't have a profile?{' '}
          <span>
            <Link className={css.link} to="register">
              Sing in
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
