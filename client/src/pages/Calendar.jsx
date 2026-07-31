import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import DashboardStats from "../components/DashboardStats/DashboardStats";
import LaunchCalendar from "../components/LaunchCalendar/LaunchCalendar";
import LaunchModal from "../components/LaunchModal/LaunchModal";
import CreateLaunchModal from "../components/CreateLaunchModal/CreateLaunchModal";

import api from "../services/api";

import "./LaunchManagement.css";

function Calendar() {

  const [launches, setLaunches] = useState([]);
  const [selectedLaunch, setSelectedLaunch] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
    const [showCreateModal, setShowCreateModal] = useState(false);

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

        <LaunchCalendar

          launches={launches}

          onSelectLaunch={setSelectedLaunch}
          onCreateLaunch={(date) => {

                setSelectedDate(date);

                setShowCreateModal(true);

            }}

        />

      </main>

      {selectedLaunch && (

        <LaunchModal

          launch={selectedLaunch}

          onClose={() => setSelectedLaunch(null)}

          loadLaunches={loadLaunches}

          onEdit={() => {}}

        />
        
        

      )}
      {showCreateModal && (

        <CreateLaunchModal

            initialDate={selectedDate}

            onClose={() => {

            setShowCreateModal(false);

            setSelectedDate("");

            }}

            loadLaunches={loadLaunches}

        />

        )}

    </div>

  );

}

export default Calendar;