const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
})

module.exports = {
  devServer: {
    proxy : 'https://api.data.kemdikbud.go.id/',
   // ws : true,
    //changeOrigin : true


  }
}