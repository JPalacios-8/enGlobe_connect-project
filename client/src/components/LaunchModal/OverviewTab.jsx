function OverviewTab({ launch }) {

    return (

        <div>

            <div className="overview-row">
                <strong>Category</strong>
                <span>{launch.category}</span>
            </div>

            <div className="overview-row">
                <strong>Market</strong>
                <span>{launch.market}</span>
            </div>

            <div className="overview-row">
                <strong>Style</strong>
                <span>{launch.style}</span>
            </div>

            <div className="overview-row">
                <strong>Segment</strong>
                <span>{launch.segment}</span>
            </div>

            <div className="overview-row">
                <strong>Launch Date</strong>
                <span>{launch.launch_date}</span>
            </div>

            <div className="overview-row">
                <strong>End Date</strong>
                <span>{launch.end_date}</span>
            </div>

            <div className="overview-row">
                <strong>Status</strong>

                <span className={`status ${launch.status.toLowerCase().replace(/\s/g,"-")}`}>
                    {launch.status}
                </span>

            </div>

        </div>

    )

}

export default OverviewTab;