const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: 'build/',
    filename: 'index.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              "presets": [
                [
                  "@babel/preset-env",
                  {
                    "targets": {
                      "chrome": "70",
                      "ie": "9"
                    }
                  }
                ]
              ]
            }
          }
        ]
      }
    ]
  }
}
