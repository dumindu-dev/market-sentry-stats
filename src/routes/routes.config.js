const express = require("express")
const router = express.Router()

const StatRouter = require("./stat.routes");

router.use('/stats', StatRouter);

module.exports = router;