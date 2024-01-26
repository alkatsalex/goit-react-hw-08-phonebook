import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'store/operetions';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Registration from 'components/Registration/Registration';
import css from './Registration.module.css';
import { selectToken } from 'store/registration/selectors';

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
    <div>
      <Registration handleSubmit={handleSubmit} />
      <div className={css.conteiner}>
        <p className={css.labelToLink}>
          Have a profile?{' '}
          <span>
            <Link className={css.link} to="/login">
              Sing in
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
