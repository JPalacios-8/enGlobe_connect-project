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

    </aside>
  );
}

export default Sidebar;