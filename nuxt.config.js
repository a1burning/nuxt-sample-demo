/**
 * Nuxt.js 配置文件，在运行编译的时候加载模块并使用
 * 使用环境是Node.js
 */

module.exports = {
  router: {
    base: '/abc',
    // routes: 路由配置表，也是一个数组，可以动态push路由
    // resolve：解析路由组件路径
    extendRoutes(routes, resolve) {
      routes.push({
        // 设置之后访问的路由
        path: '/hello',
        // 设置个名称
        name: 'hello',
        // 设置对应的组件
        component: resolve(__dirname, 'pages/about.vue')
      })
    }
  }
}