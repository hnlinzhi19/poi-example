module.exports = {
  entry: './src/index.js',
  homepage: '/test/',
  postcss: {
    plugins: [
      require('postcss-px2rem')({
        remUnit: 75
      })
    ]
  }
};
