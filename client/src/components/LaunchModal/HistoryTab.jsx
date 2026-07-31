import { useEffect, useState } from "react";
import api from "../../services/api";

import "./HistoryTab.css";

function HistoryTab({ launch }) {

  const [history, setHistory] = useState([]);

  useEffect(() => {

    loadHistory();

  }, [launch]);

  async function loadHistory() {

    try {

      const response = await api.get(
        `/launches/${launch.id}/history`
      );

      setHistory(response.data);

    } catch (error) {

      console.error(error);

    }

  }

  function getIcon(action) {

    if (action.includes("Approved")) return "🔵";

    if (action.includes("In Review")) return "🟠";

    if (action.includes("created")) return "🟢";

    if (action.includes("updated")) return "🟡";

    if (action.includes("archived")) return "🔴";

    return "⚪";

  }

  return (

    <div className="history">

      <div className="history-item">

        <h4>Created</h4>

        <p>{launch.created_at}</p>

      </div>

      <div className="history-item">

        <h4>Last Updated</h4>

        <p>{launch.updated_at}</p>

      </div>

      <div className="history-timeline">

        <h3>Activity History</h3>

        {history.map((item) => (

          <div
            className="timeline-item"
            key={item.id}
          >

            <div className="timeline-icon">

              {getIcon(item.action)}

            </div>

            <div className="timeline-content">

              <strong>{item.action}</strong>

              <p>{item.performed_by}</p>

              <span>{item.created_at}</span>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default HistoryTab;