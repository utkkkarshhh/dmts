const express = require("express");
const router = express.Router();
const taskController = require("../../controller/taskController/taskController")

router.post("/getTasks", taskController.getTasks);

module.exports = router;