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
            {
                status,
                performedBy:
                role === "Creator"
                    ? launch.creator
                    : launch.assigned_to,
            }
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

        <div className="modal-title">

        <h2>{launch.name}</h2>

        <div className="modal-meta">

            <p>

            <strong>Creator:</strong> {launch.creator}

            </p>

            <p>

            <strong>Assigned To:</strong> {launch.assigned_to}

            </p>

        </div>

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


        <div className="modal-content">

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

        </div>

            <div className="modal-actions">

                {role === "Creator" && launch.status === "Draft" && (

                    <>

                        <button
                            onClick={() => onEdit(launch)}
                        >
                            Edit
                        </button>

                        <button
                            className="delete-btn"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>

                        <button
                            className="primary"
                            onClick={() => updateStatus("In Review")}
                        >
                            Submit to Review
                        </button>

                    </>

                )}

                {role === "Approver" && launch.status === "In Review" && (

                    <>

                        <button
                            onClick={() => updateStatus("Draft")}
                        >
                            Send Back
                        </button>

                        <button
                            className="approve-btn"
                            onClick={() => updateStatus("Approved")}
                        >
                            Approve
                        </button>

                    </>

                )}

                {role === "Creator" && launch.status !== "Draft" && (

                    <p className="modal-message">

                        This launch is currently <strong>{launch.status}</strong>. No actions are available.

                    </p>

                )}

                {role === "Approver" && launch.status !== "In Review" && (

                    <p className="modal-message">

                        No actions are available for this launch.

                    </p>

                )}

            </div>
    </aside>

  );

};
export default LaunchModal;