import "./Sidebar.css";

import {
  MdDashboard,
  MdCalendarMonth,
  MdPerson,
} from "react-icons/md";

import logo from "../../assets/Adidas_Logo.svg";

import { useRole } from "../../context/RoleContext";

import { NavLink } from "react-router-dom";

function Sidebar() {

  const { role, setRole } = useRole();

  return (
    <aside className="sidebar">

      <div className="logo">
        <img src={logo} alt="Adidas Logo" />
      </div>

      <nav className="sidebar-nav">

        <NavLink
          to="/launches"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >

          <MdDashboard />

          <span>Launches</span>

        </NavLink>

        <NavLink
          to="/calendar"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >

          <MdCalendarMonth />

          <span>Calendar</span>

        </NavLink>

      </nav>
      
          <div className="role-switcher">

        <label>Role</label>

        <div className="role-select">

            <MdPerson />

            <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
            >

                <option value="Creator">
                    Creator
                </option>

                <option value="Approver">
                    Approver
                </option>

            </select>

        </div>

    </div>

    </aside>
  );
}

export default Sidebar;