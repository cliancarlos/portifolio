const { defineConfig } = require("cypress");

module.exports = defineConfig({
  videoRecording: false,
  videoCompression: false,
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      baseUrl: "http://localhost:1234";
    },
  },
});
