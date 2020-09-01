module.exports = {
  module: {
    rules: [{
      test: /\.(js|jsx)?$/,
      loader: 'babel-loader',
      exclude: '/node_modules/',
      options: {
        presets:["@babel/preset-env","@babel/preset-react"]
      }
    }]
  }
}