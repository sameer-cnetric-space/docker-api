const { executeDockerCompose } = require("../services/dockerService");

const AUTH_TOKEN = process.env.AUTH_TOKEN || "securetoken123";

const deployDockerCompose = async (req, res) => {
  // const token = req.headers.authorization;

  // if (!token || token !== `Bearer ${AUTH_TOKEN}`) {
  //   return res.status(403).json({ error: "Unauthorized" });
  // }

  try {
    const output = await executeDockerCompose();
    return res.json({
      message: "Docker Compose executed successfully",
      output,
    });
  } catch (error) {
    console.error(`Deployment error: ${error.message}`);
    return res.status(500).json({ error: "Failed to execute Docker Compose" });
  }
};

module.exports = { deployDockerCompose };
