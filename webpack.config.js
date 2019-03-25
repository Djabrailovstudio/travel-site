module.exports = {
  mode: "development",
  entry: {
    App: __dirname + "/app/assets/scripts/App.js",
    Vendor:  __dirname + "/app/assets/scripts/Vender.js"
  },
  output: {
    path: __dirname + "/app/temp/scripts",
    filename: "[name].js"
  }, 
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}