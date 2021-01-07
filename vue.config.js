module.exports = {
  configureWebpack:{
    resolve:{
      extensions:[],   // 后缀
      alias:{  // 别名配置
        '@':'src',
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'store':'@/store',
        'views':'@/views',
      }
    }
  }
}