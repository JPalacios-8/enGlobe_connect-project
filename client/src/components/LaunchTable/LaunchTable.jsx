import "./LaunchTable.css";

function LaunchTable({ launches, onSelectLaunch }) {

  return (

    <section className="launch-table">

      <table>

        <thead>

          <tr>

            <th>Launch Name</th>
            <th>Category</th>
            <th>Market</th>
            <th>Launch Date</th>
            <th>Status</th>
            <th>Assigned To</th>
            <th></th>

          </tr>

        </thead>

        <tbody>

          {launches.map((launch) => (

            <tr
              key={launch.id}
              onClick={() => onSelectLaunch(launch)}
            >

              <td>{launch.name}</td>

              <td>{launch.category}</td>

              <td>{launch.market}</td>

              <td>{launch.launch_date}</td>

              <td>

                <span
                  className={`status ${launch.status
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                >
                  {launch.status}
                </span>

              </td>

              <td>{launch.assigned_to}</td>

              <td className="actions">⋮</td>

            </tr>

          ))}

        </tbody>

      </table>

    </section>

  );

}

export default LaunchTable;