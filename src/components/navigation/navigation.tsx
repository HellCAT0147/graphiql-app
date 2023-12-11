import { NavLink } from "react-router-dom";
import { EmptyProps } from "../types";
import { Context } from "../../contexts";
import { LangContext } from "../../contexts/types";
import { useContext } from "react";
import { EN, RU } from "../../contexts/languages";

const Navigation: React.FC<EmptyProps> = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);

  function onToggleLang() {
    if (context.lang.lang === "en") context.setLang(RU);
    else if (context.lang.lang === "ru") context.setLang(EN);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to={"/"}
              >
                {context.lang.mainLink}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/welcome"}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {context.lang.welcomeLink}
              </NavLink>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onToggleLang}
          >
            {context.lang.lang}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
