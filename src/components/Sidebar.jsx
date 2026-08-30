import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-bold" : ""
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/applications"
          className={({ isActive }) =>
            isActive ? "font-bold" : ""
          }
        >
          Applications
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "font-bold" : ""
          }
        >
          Profile
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "font-bold" : ""
          }
        >
          Settings
        </NavLink>

        <p>Logout</p>
      </nav>
    </aside>
  );
}

export default Sidebar;