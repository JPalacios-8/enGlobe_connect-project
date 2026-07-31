import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useRole } from "../../context/RoleContext";

import "./LaunchCalendar.css";

function LaunchCalendar({
  launches,
  onSelectLaunch,
  onCreateLaunch
}) {

    const { role } = useRole();

  const statusColors = {

    Draft: "#E5E7EB",

    "In Review": "#F59E0B",

    Approved: "#2563EB",

    Published: "#16A34A",

  };

  const events = launches.map((launch) => ({

    id: launch.id,

    title: launch.name,

    date: launch.launch_date,

    backgroundColor:
      statusColors[launch.status],

    borderColor:
      statusColors[launch.status],

    extendedProps: {

      launch,

    },

  }));

  return (

    <section className="launch-calendar">

      <FullCalendar
      
      dateClick={(info) => {

            if (role !== "Creator") return;

            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const selected = new Date(info.dateStr);

            if (selected < today) return;

            onCreateLaunch(info.dateStr);

        }}

        plugins={[
          dayGridPlugin,
          interactionPlugin,
        ]}

        initialView="dayGridMonth"

        height="auto"

        events={events}

        eventClick={(info) => {

          onSelectLaunch(

            info.event.extendedProps.launch

          );

        }}

      />

    </section>

  );

}

export default LaunchCalendar;