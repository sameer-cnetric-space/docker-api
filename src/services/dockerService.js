const { exec } = require("child_process");

const executeDockerCompose = () => {
  const command =
    process.env.COMMAND ||
    "docker-compose -f /path/to/docker-compose.yml up -d";
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return reject(error);
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
      }
      resolve(stdout);
    });
  });
};

module.exports = { executeDockerCompose };
