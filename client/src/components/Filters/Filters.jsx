import "./Filters.css";

function Filters({
  filters,
  setFilters,
  onCreate,
}) {

  function handleChange(e) {

    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });

  }

  return (

    <section className="filters">

      <input
        className="search-input"
        type="text"
        name="search"
        placeholder="Search launches..."
        value={filters.search}
        onChange={handleChange}
      />

      <select
        name="market"
        value={filters.market}
        onChange={handleChange}
      >

        <option value="">All Markets</option>

        <option>Global</option>

        <option>North America</option>

        <option>LATAM</option>

        <option>Europe</option>

        <option>APAC</option>

      </select>

      <select
        name="status"
        value={filters.status}
        onChange={handleChange}
      >

        <option value="">All Status</option>

        <option>Draft</option>

        <option>In Review</option>

        <option>Approved</option>

        <option>Published</option>

      </select>

      <input
        type="date"
        name="launch_date"
        value={filters.launch_date}
        onChange={handleChange}
      />

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