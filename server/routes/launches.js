//manage lauches petitions

const express = require("express");

const router = express.Router();



const {
  getAllLaunches,
  updateLaunchStatus,
  createLaunch,
  deleteLaunch,
  updateLaunch,
} = require("../controllers/launchController");

router.get("/", getAllLaunches);

router.post("/", createLaunch);


router.put("/:id", updateLaunch);


router.patch("/:id/status", updateLaunchStatus);

router.delete("/:id", deleteLaunch);


module.exports = router;