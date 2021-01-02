<template>
  <div>
    <!-- 获取到路由中的id动态参数 -->
    <h1>User page {{ $route.params.id }}</h1>
    <!-- 获取路由中的query参数 -->
    {{ $route.query.type }}
  </div>
</template>

<script>
export default {
  name: 'UserPage',
  // 这里设置id参数必须是number类型，不符合要求就跳转到错误页面
  validate({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id)
  }
}
</script>

<style></style>