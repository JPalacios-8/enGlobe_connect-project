import "./LaunchModal.css";
import OverviewTab from "./OverviewTab";

import { useRole } from "../../context/RoleContext";

function LaunchModal({ launch, onClose }) {

    const { role } = useRole();

    return (

        <aside className="launch-modal">

            <div className="modal-header">

                <div>

                    <h2>{launch.name}</h2>

                    <p>{launch.assigned_to}</p>

                </div>

                <button onClick={onClose}>
                    ✕
                </button>

            </div>

            <div className="tabs">

                <button className="active-tab">
                    Overview
                </button>

                <button>
                    Description
                </button>

                <button>
                    Assets
                </button>

                <button>
                    History
                </button>

            </div>
            
            <div className="modal-actions">

                {role === "Creator" ? (

                <>

                    <button>Edit</button>

                    <button>Delete</button>

                    <button className="primary">
                    Submit to Review
                    </button>

                </>

                ) : (

                <>

                    <button className="primary">
                    Approve
                    </button>

                    <button>
                    Send Back
                    </button>

                </>

                )}

        </div>

            <OverviewTab launch={launch} />

        </aside>

    )

}

export default LaunchModal;