const express = require("express");

const router = express.Router();

const {

  upload,

  uploadAsset,

  getAssets,

    deleteAsset,

} = require("../controllers/assetController");

router.get(
  "/:id",
  getAssets
);

router.post(

  "/:id",

  upload.single("file"),

  uploadAsset

);
router.delete("/:id", deleteAsset);

module.exports = router;