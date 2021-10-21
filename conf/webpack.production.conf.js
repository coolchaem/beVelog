const { merge } = require('webpack-merge');
const common = require('./webpack.common.conf');

module.exports = merge(common, {
  mode: 'production',
});
