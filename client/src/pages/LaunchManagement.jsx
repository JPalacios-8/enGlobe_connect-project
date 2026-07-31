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

  return (
    <div className="launch-page">

      <Sidebar />

      <main className="main-content">

        <Header />

        <DashboardStats launches={launches} />

        <Filters
          onCreate = {() => setShowCreateModal(true)}
        /> 

        <LaunchTable
          launches={launches}
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