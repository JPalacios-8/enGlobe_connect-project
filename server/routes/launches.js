//manage lauches petitions
const express = require("express");

const router = express.Router();

const {
  getAllLaunches,
} = require("../controllers/launchController");

router.get("/", getAllLaunches);

module.exports = router;