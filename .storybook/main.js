// your app's webpack.config.js
const custom = require('../conf/webpack.common.conf');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-docs',
    // TODO wepback5 compatibility problem (alternative addon: @storybook/addon-docs)
    // For those of you using CRA, at this point in time Storybook for CRA CAN'T be webpack5-compatible because CRA isn't webpack5-compatible and Storybook for CRA uses CRA's webpack config.    
    // https://github.com/storybookjs/storybook/issues/14789
    // "@storybook/preset-create-react-app"
  ],
  "core": {
    "builder": "webpack5"
  },
    webpackFinal: config => {
    return {
      ...config,
      resolve: { ...config.resolve },
      module: { ...config.module }
    }
  },
}