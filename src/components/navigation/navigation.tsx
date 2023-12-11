import { NavLink } from "react-router-dom";
import { EmptyProps } from "../types";

const Navigation: React.FC<EmptyProps> = (): JSX.Element => {
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
                Main
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/welcome"}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Welcome page
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
