module.exports = {
  entry: './js/index.js',
  output: {
            path: __dirname,
            filename: 'bundle.js'
        },
  module: {
            loaders: [
                { test: /\.js$/,
                  loader: 'babel?presets[]=es2015',
                  exclude: /node_modules/
                }
            ]
  },

}