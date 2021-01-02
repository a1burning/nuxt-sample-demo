<template>
  <div>
    <h1>{{ title }}</h1>
    <sub-page :posts="posts"></sub-page>
  </div>
</template>

<script>
import axios from 'axios'
import SubPage from '../components/subPage.vue'
export default {
  name: 'IndexPage',
  components: {
    SubPage
  },
  async asyncData () {
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:3000/data.json'
    })
    console.log("data")
    return res.data
  }
}
</script>

<style></style>