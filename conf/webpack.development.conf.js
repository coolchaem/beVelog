const { merge } = require('webpack-merge');
const common = require('./webpack.common.conf');

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    port: 9000,
    hot: true, // HMR 기능 활성화
    // compress : 모든 항목에 대해 gzip 압축 사용
    // contentBase: 정적 파일 제공하려는 경우 필요
    open: true,
    historyApiFallback: true,
  },
});
