const express = require("express")
const router = express.Router()
const StatController = require("../controllers/stat.controller")

router.get('/countActiveUsers', [
	StatController.countActiveUsers
]);

module.exports = router