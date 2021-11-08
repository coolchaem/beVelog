const path = require("path");

module.exports = {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { configFile: './conf/babel.conf.js' }]
  },
  roots: ['..'],
  testEnvironment: 'jest-environment-jsdom',
};