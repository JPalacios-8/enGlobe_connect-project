import "./Filters.css";

function Filters({ onCreate }) {
  return (
    <section className="filters">

      <input
        className="search-input"
        type="text"
        placeholder="Search launches..."
      />

      <select>
        <option>All Markets</option>
      </select>

      <select>
        <option>All Status</option>
      </select>

      <input type="date" />

      <button
          className="new-launch-btn"
          onClick={onCreate}
      >
          + New Launch
      </button>

    </section>
  );
}

export default Filters;