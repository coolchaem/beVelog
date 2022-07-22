module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions', 'ie >= 11'],
        },
        useBuiltIns: 'usage',
        corejs: 3,
        shippedProposals: true,
      },
    ],
    '@babel/preset-typescript',
    ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }],
  ],
  plugins: ['@emotion/babel-plugin'],
};
