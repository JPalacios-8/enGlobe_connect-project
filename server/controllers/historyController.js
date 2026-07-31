const db = require("../db");

const getHistory = (req, res) => {

    db.all(

        `SELECT *
         FROM launch_history
         WHERE launch_id = ?
         ORDER BY created_at DESC`,

        [req.params.id],

        (err, rows) => {

            if (err) {

                return res.status(500).json(err);

            }

            res.json(rows);

        }

    );

};

module.exports = {

    getHistory,

};