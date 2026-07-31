import "./HistoryTab.css";

function HistoryTab({ launch }) {

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

      <div className="history-item">

        <h4>Status</h4>

        <p>{launch.status}</p>

      </div>

      <div className="history-item">

        <h4>Creator</h4>

        <p>{launch.creator}</p>

      </div>

      <div className="history-item">

        <h4>Assigned To</h4>

        <p>{launch.assigned_to}</p>

      </div>

    </div>

  );

}

export default HistoryTab;