// your app's webpack.config.js
const custom = require('../conf/webpack.common.conf');
const path = require("path");
const fs = require("fs");

function getPackageDir(filepath) {
  let currDir = path.dirname(require.resolve(filepath));
  while (true) {
    if (fs.existsSync(path.join(currDir, "package.json"))) {
      return currDir;
    }
    const { dir, root } = path.parse(currDir);
    if (dir === root) {
      throw new Error(
        `Could not find package.json in the parent directories starting from ${filepath}.`
      );
    }
    currDir = dir;
  }
}

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
      resolve: {
        ...config.resolve, ...custom.resolve, 
        alias: {
          ...custom.resolve.alias,
          "@emotion/core": getPackageDir("@emotion/react"),
          "@emotion/styled": getPackageDir("@emotion/styled"),
          "emotion-theming": getPackageDir("@emotion/react"),
        },
      },
      module: {
        ...config.module,
        rules: custom.module.rules,
      },
    }
  },
}