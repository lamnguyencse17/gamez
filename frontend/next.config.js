const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        FRONT_END_URL: "http://localhost:8080",
        BACKEND_END_URL: "http://localhost:3000",
      },
      target: "server",
      compress: false,
      reactStrictMode: true,
    };
  }
  return {
    env: {
      FRONT_END_URL: "http://localhost:8080",
      BACKEND_END_URL: "http://localhost:3000",
    },
    target: "server",
    compress: true,
    reactStrictMode: true,
  };
};
