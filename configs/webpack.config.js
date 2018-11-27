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
  devServer: {
    contentBase: path.resolve(__dirname, '../dev-server'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [ 'file-loader' ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
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
