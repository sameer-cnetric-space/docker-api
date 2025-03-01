const express = require("express");
const { deployDockerCompose } = require("../controllers/deployController");

const router = express.Router();

router.get("/hello", (req, res) => {
  return res.status(200).json({ message: "Hello World" });
});

router.post("/", deployDockerCompose);

module.exports = router;
