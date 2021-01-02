<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title}}</li>
    </ul>
    <nuxt-link to="/about">About</nuxt-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'IndexPage',
  // 想要动态页面的内容有利于 SEO 或者是提升首屏渲染速度的时候，就在asyncData中发送请求拿数据
  async asyncData () {
    console.log('asyncData')
    console.log(this)
    const res = await axios({
      method: 'GET',
      // 这里为啥不直接写data.json，是因为服务端地址默认是http://localhost:8080，所以这里需要写全名，不然请求的不是3000端口的数据
      url: 'http://localhost:3000/data.json'
    })
    // 这里将数据return，res.data里面就是返回的数据，这里会和下面的data进行融合
    return res.data
  },
  // 如果是非异步数据或者普通数据，则正常的初始化到 data 中即可
  data () {
    return {
      foo: 'bar'
    }
  }
}
</script>

<style></style>