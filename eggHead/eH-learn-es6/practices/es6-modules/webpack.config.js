module.exports = {
  entry: './src/main.js',
  output: { filename: './dist/bundle.js' },
  resolve: { root: __dirname + '/src' },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: [ 'babel' ] }
    ]
  }
};
