const express = require("express");
const { deployDockerCompose } = require("../controllers/deployController");

const router = express.Router();

router.post("/", deployDockerCompose);

module.exports = router;
