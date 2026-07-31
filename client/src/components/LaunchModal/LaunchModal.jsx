import "./LaunchModal.css";
import OverviewTab from "./OverviewTab";

import { useRole } from "../../context/RoleContext";
import api from "../../services/api";
import { useState } from "react";

import DescriptionTab from "./DescriptionTab";
import AssetsTab from "./AssetsTab";
import HistoryTab from "./HistoryTab";

function LaunchModal({
  launch,
  onClose,
  loadLaunches,
  onEdit,
}) {

  const { role } = useRole();
  const [activeTab, setActiveTab] = useState("overview");

  async function updateStatus(status) {

    try {

      await api.patch(
        `/launches/${launch.id}/status`,
        { status }
      );

      await loadLaunches();

      onClose();

    } catch (error) {

      console.error(error);

    }

  }

  async function handleDelete() {

    if (!window.confirm("Archive this launch?")) {
      return;
    }

    try {

      await api.delete(`/launches/${launch.id}`);

      await loadLaunches();

      onClose();

    } catch (error) {

      console.error(error);

    }

  }

  return (

    <aside className="launch-modal">

      <div className="modal-header">

        <div>

          <h2>{launch.name}</h2>

          <p>{launch.assigned_to}</p>

        </div>

        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕

        </button>

      </div>

      <div className="tabs">

        <button
            className={activeTab === "overview" ? "active-tab" : ""}
            onClick={() => setActiveTab("overview")}
        >
            Overview
        </button>

        <button
            className={activeTab === "description" ? "active-tab" : ""}
            onClick={() => setActiveTab("description")}
        >
            Description
        </button>

        <button
            className={activeTab === "assets" ? "active-tab" : ""}
            onClick={() => setActiveTab("assets")}
        >
            Assets
        </button>

        <button
            className={activeTab === "history" ? "active-tab" : ""}
            onClick={() => setActiveTab("history")}
        >
            History
        </button>

    </div>

      <div className="modal-actions">

        {role === "Creator" ? (

          <>

            <button
              onClick={() => onEdit(launch)}
            >
              Edit
            </button>

            <button
              onClick={handleDelete}
            >
              Delete
            </button>

            {launch.status === "Draft" && (

              <button
                className="primary"
                onClick={() =>
                  updateStatus("In Review")
                }
              >
                Submit to Review
              </button>

            )}

          </>

        ) : (

          <>

            {launch.status === "In Review" && (

              <>

                <button
                  className="primary"
                  onClick={() =>
                    updateStatus("Approved")
                  }
                >
                  Approve
                </button>

                <button
                  onClick={() =>
                    updateStatus("Draft")
                  }
                >
                  Send Back
                </button>

              </>

            )}

          </>

        )}

      </div>

        <>
        {activeTab === "overview" && (
            <OverviewTab launch={launch} />
        )}

        {activeTab === "description" && (
            <DescriptionTab launch={launch} />
        )}

        {activeTab === "assets" && (
            <AssetsTab launch={launch} />
        )}

        {activeTab === "history" && (
            <HistoryTab launch={launch} />
        )}
    </>

    </aside>

  );

};
export default LaunchModal;