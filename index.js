const express = require("express");
const dotenv = require("dotenv");
const deployRoutes = require("./src/routes/deployRoutes");
const { loadEnv } = require("./config/env");

dotenv.config();
loadEnv();

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

// Middleware
app.use(express.json());

// Routes
app.use("/deploy", deployRoutes);

// Start Server
app.listen(PORT, HOST, () => console.log(`API running on port ${PORT}`));
