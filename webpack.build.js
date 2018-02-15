var config = require('./webpack.config.js')

config.entry = {
  'vue2-strap3': './src/index.js',
}

config.output = {
  filename: './dist/[name].js',
  library: 'VueStrap',
  libraryTarget: 'umd'
}


module.exports = config
