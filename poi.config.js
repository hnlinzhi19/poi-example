module.exports = {
  entry: './src/index.js',
  homepage: '/test/',
  postcss: {
    plugins: [
      require('postcss-px2rem')({
        remUnit: 75
      })
    ]
  },
  devServer: {
    proxy: 'http://yapi.demo.qunar.com/mock/6212/api'
  }
};
