<template>
  <div>
    <h1>{{ article.title }}</h1>
    <p>{{ article.body }}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ArticlePage',
  async asyncData (context) {
    const { data } = await axios({
      method: 'GET',
      url: 'http://localhost:3000/data.json'
    })
    // 下面不能使用this，所以不能通过这种方式获取路径
    // console.log(this.$route.params.id)
    const id = Number.parseInt(context.params.id)
    return {
      article: data.posts.find(item => item.id === id)
    }
  }
}
</script>

<style></style>