import { NavLink } from 'react-router-dom';
import { EmptyProps } from '../types';
import { Context } from '../../contexts';
import { LangContext } from '../../contexts/types';
import { useContext } from 'react';
import { EN, RU } from '../../contexts/languages';
import { auth, logout } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navigation: React.FC<EmptyProps> = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { mainLink, welcomeLink, lang, signOut },
  } = context;

  const [user] = useAuthState(auth);

  function onToggleLang() {
    if (context.lang.lang === 'en') {
      context.setLang(RU);
      localStorage.setItem('currentLangApp', 'ru');
    } else if (context.lang.lang === 'ru') {
      context.setLang(EN);
      localStorage.setItem('currentLangApp', 'en');
    }
  }

  return (
    <nav
      className="navbar navbar-expand-lg bg-primary sticky-top"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                to={'/'}
              >
                {mainLink}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={'/welcome'}
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                {welcomeLink}
              </NavLink>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onToggleLang}
          >
            {lang.toUpperCase()}
          </button>
          {user ? (
            <button
              type="button"
              className="btn btn-secondary mx-2"
              onClick={logout}
            >
              {signOut}
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
