const dotenv = require("dotenv");

function loadEnv() {
  dotenv.config();
  if (!process.env.AUTH_TOKEN) {
    console.warn(
      "Warning: AUTH_TOKEN is not set in the environment variables."
    );
  }
}

module.exports = { loadEnv };
