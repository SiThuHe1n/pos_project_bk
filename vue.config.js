//const { defineConfig } = require('@vue/cli-service')


module.exports = {
  transpileDependencies: true,
  publicPath: '',
  
  configureWebpack: {
    devServer: {
      historyApiFallback: true
    }
  },
  pluginOptions: {
    cordovaPath: 'Kkwstore'
  }
}
