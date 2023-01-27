const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
})

module.exports = {
  devServer: {
    proxy : 'http://172.16.101.74:81/',
   // ws : true,
    //changeOrigin : true


  }
}