const EventController = require("../controllers/event-controller");
const express = require("express");
const router = express.Router();

router.get("/list", EventController.getEvents);

module.exports = router;
