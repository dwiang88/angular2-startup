module.exports = {
  entry: {
    app: './src',
  },
  output: {
    path: __dirname,
    filename: './built/bundle.js',
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.html', '.less', '.js', '.ts'],
  },
  module: {
    loaders: [{
      test: /\.tsx?$/, loaders: ['ts-loader'], exclude: /node_modules/
    }],
  }
};
