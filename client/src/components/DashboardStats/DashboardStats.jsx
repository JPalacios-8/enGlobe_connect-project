import "./DashboardStats.css";

function DashboardStats() {
  return (
    <section className="dashboard-stats">

      <div className="stat-card">
        <h2>7</h2>
        <p>Total Launches</p>
      </div>

      <div className="stat-card">
        <h2>1</h2>
        <p>Draft</p>
      </div>

      <div className="stat-card">
        <h2>2</h2>
        <p>In Review</p>
      </div>

      <div className="stat-card">
        <h2>2</h2>
        <p>Approved</p>
      </div>

      <div className="stat-card">
        <h2>2</h2>
        <p>Published</p>
      </div>

    </section>
  );
}

export default DashboardStats;