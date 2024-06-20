const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "YOUR_USERNAME",
        mongodb_password: "YOUR_PASSWORD",
        mongodb_clustername: "YOUR_CLUSTER_NAME",
        mongodb_database: "YOUR_DATABASE",
      },
    };
  }

  return {
    env: {
      mongodb_username: "YOUR_USERNAME",
      mongodb_password: "YOUR_PASSWORD",
      mongodb_clustername: "YOUR_CLUSTER_NAME",
      mongodb_database: "YOUR_DATABASE",
    },
  };
};
