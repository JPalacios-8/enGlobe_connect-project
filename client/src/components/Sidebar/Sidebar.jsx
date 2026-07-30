import "./Sidebar.css";

import {
  MdDashboard,
  MdCalendarMonth,
  MdPerson,
} from "react-icons/md";

import logo from "../../assets/Adidas_Logo.svg";

import { useRole } from "../../context/RoleContext";

function Sidebar() {

  const { role, setRole } = useRole();

  return (
    <aside className="sidebar">

      <div className="logo">
        <img src={logo} alt="Adidas Logo" />
      </div>

      <nav className="sidebar-nav">

        <button className="nav-item active">
          <MdDashboard size={20} />
          <span>Launches</span>
        </button>

        <button className="nav-item">
          <MdCalendarMonth size={20} />
          <span>Calendar</span>
        </button>

      </nav>

      <div className="role-switcher">

        <label>Role</label>

        <div className="role-select">

          <MdPerson size={18} />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="Creator">Creator</option>
            <option value="Approver">Approver</option>
          </select>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;