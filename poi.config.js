module.exports = {
  entry: './src/index.js',
  publicPath: '/test/',
  postcss: {
    plugins: [
      require('postcss-px2rem')({
        remUnit: 75
      })
    ]
  },
  devServer: {
    proxy: {
      "/api": "http://yapi.demo.qunar.com/mock/6212/api"
    }
  }
};
