import { useSelector } from 'react-redux';
import css from './Profile.module.css';
import { selectProfile } from 'store/registration/selectors';

export default function Profile({ logOut }) {
  const profile = useSelector(selectProfile);
  console.log(profile);
  return (
    <div className={css.profile}>
      <div>
        <span class="material-symbols-outlined person">account_circle</span>
      </div>
      <div>
        {profile && <h3 className={css.name}>{profile.name}</h3>}
        <p className={css.description}>My card</p>
      </div>
      <button className={css.btn} type="click" onClick={logOut}>
        <span class="material-symbols-outlined logout">logout</span>
        <p>Log out</p>
      </button>
    </div>
  );
}
