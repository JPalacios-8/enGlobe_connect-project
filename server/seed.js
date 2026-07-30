const db = require("./db");

const launches = [
  {
    name: "Ultraboost 2026",
    category: "Footwear",
    market: "Global",
    style: "UB-2026",
    segment: "Running",
    launch_date: "2026-10-20",
    end_date: "2026-11-20",
    status: "In Review",
    creator: "Emma Johnson",
    assigned_to: "Janelle P.",
    description: "Global launch of the new Ultraboost generation.",
    assets: "ultraboost.jpg"
  },
  {
    name: "Superstar Vintage",
    category: "Footwear",
    market: "Mexico",
    style: "SS-VTG",
    segment: "Originals",
    launch_date: "2026-10-20",
    end_date: "2026-11-05",
    status: "Approved",
    creator: "Daniel Kim",
    assigned_to: "Daniel W.",
    description: "Classic Superstar relaunch.",
    assets: "superstar.jpg"
  },
  {
    name: "Campus Trip Collection",
    category: "Apparel",
    market: "EMEA",
    style: "CMP-TRIP",
    segment: "Lifestyle",
    launch_date: "2026-10-22",
    end_date: "2026-11-15",
    status: "Published",
    creator: "Sofia Lopez",
    assigned_to: "Maria G.",
    description: "Campus seasonal apparel collection.",
    assets: "campus.jpg"
  },
  {
    name: "Predator Accuracy",
    category: "Footwear",
    market: "Global",
    style: "PRED-ACC",
    segment: "Football",
    launch_date: "2026-11-25",
    end_date: "2026-12-20",
    status: "Draft",
    creator: "Emma Johnson",
    assigned_to: "Anders J.",
    description: "New Predator Accuracy football boots.",
    assets: "predator.jpg"
  },
  {
    name: "NMD_S1",
    category: "Footwear",
    market: "Asia",
    style: "NMD-S1",
    segment: "Originals",
    launch_date: "2026-11-01",
    end_date: "2026-11-30",
    status: "In Review",
    creator: "Daniel Kim",
    assigned_to: "David M.",
    description: "NMD S1 launch for Asia.",
    assets: "nmd.jpg"
  },
  {
    name: "Adilette Boston 12",
    category: "Footwear",
    market: "USA",
    style: "ADI-12",
    segment: "Running",
    launch_date: "2026-11-13",
    end_date: "2026-12-10",
    status: "Published",
    creator: "Emma Johnson",
    assigned_to: "Donald M.",
    description: "Boston 12 performance launch.",
    assets: "boston12.jpg"
  },
  {
    name: "City Cup LTD",
    category: "Footwear",
    market: "Japan",
    style: "CITY-LTD",
    segment: "Originals",
    launch_date: "2026-11-18",
    end_date: "2026-12-05",
    status: "Approved",
    creator: "Sofia Lopez",
    assigned_to: "Maria G.",
    description: "Limited edition City Cup.",
    assets: "citycup.jpg"
  },
  {
    name: "Adizero Evo SL",
    category: "Footwear",
    market: "Global",
    style: "EVO-SL",
    segment: "Running",
    launch_date: "2026-12-01",
    end_date: "2026-12-20",
    status: "Draft",
    creator: "Daniel Kim",
    assigned_to: "Sarah B.",
    description: "High performance running shoe.",
    assets: "adizero.jpg"
  },
  {
    name: "Samba OG",
    category: "Footwear",
    market: "Europe",
    style: "SAMBA-OG",
    segment: "Originals",
    launch_date: "2026-12-05",
    end_date: "2026-12-30",
    status: "Approved",
    creator: "Emma Johnson",
    assigned_to: "Michael C.",
    description: "Iconic Samba relaunch.",
    assets: "samba.jpg"
  },
  {
    name: "Terrex Free Hiker",
    category: "Footwear",
    market: "LATAM",
    style: "TRX-HKR",
    segment: "Outdoor",
    launch_date: "2026-12-12",
    end_date: "2027-01-10",
    status: "Draft",
    creator: "Sofia Lopez",
    assigned_to: "Alex C.",
    description: "Outdoor hiking collection.",
    assets: "terrex.jpg"
  }
];

db.serialize(() => {

  db.run("DELETE FROM launches");

  const stmt = db.prepare(`
    INSERT INTO launches
    (name, category, market, style, segment, launch_date, end_date, status, creator, assigned_to, description, assets)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  launches.forEach((launch) => {
    stmt.run(
      launch.name,
      launch.category,
      launch.market,
      launch.style,
      launch.segment,
      launch.launch_date,
      launch.end_date,
      launch.status,
      launch.creator,
      launch.assigned_to,
      launch.description,
      launch.assets
    );
  });

  stmt.finalize();

});

console.log("Database seeded successfully.");