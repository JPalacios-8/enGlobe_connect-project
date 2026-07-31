import "./DescriptionTab.css";

function DescriptionTab({ launch }) {

  return (

    <div className="tab-content">

      <h3>Description</h3>

      <div className="description-box">

        {launch.description
          ? launch.description
          : "No description available."}

      </div>

    </div>

  );

}

export default DescriptionTab;