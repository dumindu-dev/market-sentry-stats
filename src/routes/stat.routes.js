const express = require("express")
const router = express.Router()
const StatController = require("../controllers/stat.controller")

router.post('/countActiveUsers', [
	StatController.countActiveUsers
]);

module.exports = router