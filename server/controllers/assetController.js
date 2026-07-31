const db = require("../db");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
    

  destination: (req, file, cb) => {

    cb(null, "uploads/");

  },

  filename: (req, file, cb) => {

    const uniqueName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);

    cb(null, uniqueName);

  },

});

const upload = multer({
  storage,
});

const uploadAsset = (req, res) => {

  const { id } = req.params;

  if (!req.file) {

    return res.status(400).json({
      error: "No file uploaded",
    });

  }

  db.run(

    `
    INSERT INTO assets
    (
      launch_id,
      file_name,
      file_path,
      file_type
    )
    VALUES
    (?, ?, ?, ?)
    `,

    [
      id,
      req.file.originalname,
      req.file.filename,
      req.file.mimetype,
    ],

    function (err) {

      if (err) {

        return res.status(500).json({
          error: err.message,
        });

      }

      res.json({
        message: "Asset uploaded",
      });

    }

  );

};

const getAssets = (req, res) => {

  db.all(

    `
    SELECT *
    FROM assets
    WHERE launch_id = ?
    ORDER BY created_at DESC
    `,

    [req.params.id],

    (err, rows) => {

      if (err) {

        return res.status(500).json({
          error: err.message,
        });

      }

      res.json(rows);

    }

  );

};

const deleteAsset = (req, res) => {

  const { id } = req.params;

  db.get(

    "SELECT * FROM assets WHERE id = ?",

    [id],

    (err, asset) => {

      if (err || !asset) {

        return res.status(404).json({
          error: "Asset not found",
        });

      }

      const filePath = path.join(
        __dirname,
        "..",
        "uploads",
        asset.file_path
      );

      if (fs.existsSync(filePath)) {

        fs.unlinkSync(filePath);

      }

      db.run(

        "DELETE FROM assets WHERE id = ?",

        [id],

        function (err) {

          if (err) {

            return res.status(500).json({
              error: err.message,
            });

          }

          res.json({
            message: "Asset deleted",
          });

        }

      );

    }

  );

};

module.exports = {

  upload,

  uploadAsset,

  getAssets,

  deleteAsset,

};