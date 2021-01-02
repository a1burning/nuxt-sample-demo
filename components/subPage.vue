<template>
  <div>
    <h1>subPage</h1>
    <ul>
      <li
        v-for="item in posts"
        :key="item.id">
        <nuxt-link :to="'/article/'+item.id">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'subPage',
  props:['posts']
}
</script>

<style></style>