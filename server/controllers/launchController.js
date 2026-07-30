const db = require("../db");

// get all registers from table launches
const getAllLaunches = (req, res) => {
  db.all(
    "SELECT * FROM launches ORDER BY created_at DESC",
    [],
    (err, rows) => {
      if (err) {
        return res.status(500).json({
          error: "Failed to retrieve launches",
          details: err.message,
        });
      }

      res.json(rows);
    }
  );
};

module.exports = {
  getAllLaunches,
};