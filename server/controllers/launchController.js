const db = require("../db");

// get all registers from table launches
const getAllLaunches = (req, res) => {
  db.all(
    `
    SELECT *
    FROM launches
    WHERE archived = 0
    ORDER BY created_at DESC
    `,
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

const updateLaunchStatus = (req, res) => {

  const { id } = req.params;
  const { status } = req.body;

  db.run(
    `
    UPDATE launches
    SET status = ?, updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
    `,
    [status, id],
    function (err) {

      if (err) {
        return res.status(500).json({
          error: err.message,
        });
      }

      res.json({
        message: "Status updated successfully",
      });

    }
  );

};

const createLaunch = (req, res) => {

  const {
    name,
    category,
    market,
    style,
    segment,
    launch_date,
    end_date,
    creator,
    assigned_to,
    description,
  } = req.body;

  db.run(
    `
    INSERT INTO launches
    (
      name,
      category,
      market,
      style,
      segment,
      launch_date,
      end_date,
      status,
      creator,
      assigned_to,
      description
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, 'Draft', ?, ?, ?)
    `,
    [
      name,
      category,
      market,
      style,
      segment,
      launch_date,
      end_date,
      creator,
      assigned_to,
      description,
    ],
    function (err) {

      if (err) {
        return res.status(500).json({
          error: err.message,
        });
      }

      res.status(201).json({
        id: this.lastID,
        message: "Launch created successfully",
      });

    }
  );

};

const deleteLaunch = (req, res) => {

  const { id } = req.params;

  db.run(
    `
    UPDATE launches
    SET archived = 1,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
    `,
    [id],
    function (err) {

      if (err) {
        return res.status(500).json({
          error: err.message,
        });
      }

      res.json({
        message: "Launch archived successfully",
      });

    }
  );

};

const updateLaunch = (req, res) => {

  const { id } = req.params;

  const {
    name,
    category,
    market,
    style,
    segment,
    launch_date,
    end_date,
    creator,
    assigned_to,
    description,
  } = req.body;

  db.run(
    `
    UPDATE launches
    SET
      name = ?,
      category = ?,
      market = ?,
      style = ?,
      segment = ?,
      launch_date = ?,
      end_date = ?,
      creator = ?,
      assigned_to = ?,
      description = ?,
      updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
    `,
    [
      name,
      category,
      market,
      style,
      segment,
      launch_date,
      end_date,
      creator,
      assigned_to,
      description,
      id,
    ],
    function (err) {

      if (err) {
        return res.status(500).json({
          error: err.message,
        });
      }

      res.json({
        message: "Launch updated successfully",
      });

    }
  );

};

module.exports = {
  getAllLaunches,
  updateLaunchStatus,
  createLaunch,
  deleteLaunch,
  updateLaunch,
};

