const path = require('path');
/* eslint-disable */
// enable import from typscript files
exports.onCreateWebpackConfig = function({ stage, loaders, actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@src': path.resolve(__dirname, 'src'),
      },
    },
  });
};
