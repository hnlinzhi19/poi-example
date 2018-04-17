const poi = require('poi')
const config = require('./poi.config')

const app = poi(config)
const webpackConfig = app.createWebpackConfig()

module.exports = {
  extends: [
    'xo', 
    'plugin:import/errors', 
    'plugin:import/warnings'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: webpackConfig
      }
    },
  },
  "globals": {
    'window': true,
    'wx': true
  },
  rules:{
    'linebreak-style': 0,
    "indent": ["error", 2]
  }
}
