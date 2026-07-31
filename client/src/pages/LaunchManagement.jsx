import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import DashboardStats from "../components/DashboardStats/DashboardStats";
import Filters from "../components/Filters/Filters";
import LaunchTable from "../components/LaunchTable/LaunchTable";
import LaunchModal from "../components/LaunchModal/LaunchModal";
import CreateLaunchModal from "../components/CreateLaunchModal/CreateLaunchModal";

import api from "../services/api";

import "./LaunchManagement.css";

function LaunchManagement() {

  const [selectedLaunch, setSelectedLaunch] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingLaunch, setEditingLaunch] = useState(null);
  const [launches, setLaunches] = useState([]);
  const [filters, setFilters] = useState({

    search: "",

    market: "",

    status: "",

    launch_date: "",

  });

  useEffect(() => {
    loadLaunches();
  }, []);

  async function loadLaunches() {
    try {
      const response = await api.get("/launches");
      setLaunches(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const filteredLaunches = launches.filter((launch) => {

    const matchesSearch =
      launch.name
        .toLowerCase()
        .includes(filters.search.toLowerCase());

    const matchesMarket =
      filters.market === "" ||
      launch.market === filters.market;

    const matchesStatus =
      filters.status === "" ||
      launch.status === filters.status;

    const matchesDate =
      filters.launch_date === "" ||
      launch.launch_date >= filters.launch_date;

    return (

      matchesSearch &&

      matchesMarket &&

      matchesStatus &&

      matchesDate

    );

  });

  return (
    <div className="launch-page">

      <Sidebar />

      <main className="main-content">

        <Header />

        <DashboardStats launches={launches} />

        <Filters
          filters={filters}

          setFilters={setFilters}

          onCreate={() => setShowCreateModal(true)}
        /> 

        <LaunchTable
          launches={filteredLaunches}
          onSelectLaunch={setSelectedLaunch}
        /> 

      </main>

      {selectedLaunch && (

        <LaunchModal
          launch={selectedLaunch}
          loadLaunches={loadLaunches}
          onClose={() => setSelectedLaunch(null)}
          onEdit={(launch) => {

            setSelectedLaunch(null);

            setEditingLaunch(launch);

            setShowCreateModal(true);

          }}
        />
        

      )}

      {showCreateModal && (

        <CreateLaunchModal

          launch={editingLaunch}

          onClose={() => {

              setShowCreateModal(false);

              setEditingLaunch(null);

          }}

          loadLaunches={loadLaunches}

        />

      )}

    </div>
  );
}

export default LaunchManagement;