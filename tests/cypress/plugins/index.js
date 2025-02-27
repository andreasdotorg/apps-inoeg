/* eslint-disable arrow-body-style */
// https://docs.cypress.io/guides/tooling/plugins-guide

// if you need a custom webpack configuration you can uncomment the following import
// and then use the `file:preprocessor` event
// as explained in the cypress docs
// https://docs.cypress.io/api/plugins/preprocessors-api.html#Examples

// /* eslint-disable import/no-extraneous-dependencies, global-require */
// const webpack = require('@cypress/webpack-preprocessor')

module.exports = (on, config) => {
  // on('file:preprocessor', webpack({
  //  webpackOptions: require('@vue/cli-service/webpack.config'),
  //  watchOptions: {}
  // }))

  require("cypress-fail-fast/plugin")(on, config);

  return Object.assign({}, config, {
    fixturesFolder: "tests/cypress/fixtures",
    integrationFolder: "tests/cypress/integration",
    screenshotsFolder: "tests/cypress/screenshots",
    downloadsFolder: "tests/cypress/downloads",
    videosFolder: "tests/cypress/videos",
    supportFile: "tests/cypress/support/index.ts",
  });
};
