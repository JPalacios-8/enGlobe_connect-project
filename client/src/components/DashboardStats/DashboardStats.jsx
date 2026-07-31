import "./DashboardStats.css";

function DashboardStats( { launches } ) {
  const total = launches.length;

  const draft = launches.filter(l => l.status === "Draft").length;

  const review = launches.filter(l => l.status === "In Review").length;

  const approved = launches.filter(l => l.status === "Approved").length;

  const published = launches.filter(l => l.status === "Published").length;
  return (
    <section className="dashboard-stats">

      <div className="stat-card">
        <h2>{total}</h2>
        <p>Total Launches</p>
      </div>

      <div className="stat-card">
        <h2>{draft}</h2>
        <p>Draft</p>
      </div>

      <div className="stat-card">
        <h2>{review}</h2>
        <p>In Review</p>
      </div>

      <div className="stat-card">
        <h2>{approved}</h2>
        <p>Approved</p>
      </div>

      <div className="stat-card">
        <h2>{published}</h2>
        <p>Published</p>
      </div>

    </section>
  );
}

export default DashboardStats;