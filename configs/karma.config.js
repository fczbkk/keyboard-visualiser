const webpack_config = require('./webpack.config')

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      './../tests/*.spec.js'
    ],
    preprocessors: {
      './../tests/*.spec.js': ['webpack']
    },
    webpack: {
      mode: 'development',
      module: {
        rules: webpack_config.module.rules
      }
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [
      'ChromeHeadless'
    ],
    singleRun: false
  })
}
