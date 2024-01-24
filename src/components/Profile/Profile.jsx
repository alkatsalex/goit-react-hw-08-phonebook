import { useSelector } from 'react-redux';
import { selectProfile } from 'store/Registration/selectors';
import css from './Profile.module.css';

export default function Profile({ logOut }) {
  const profile = useSelector(selectProfile);
  console.log(profile);
  return (
    <div className={css.profile}>
      <div>
        <p className={css.ava}>👽</p>
      </div>
      <div>
        {profile && <h3 className={css.name}>{profile.name}</h3>}
        <p className={css.description}>My card</p>
      </div>
      <button className={css.btn} type="click" onClick={logOut}>
        ⬅] logOut
      </button>
    </div>
  );
}
