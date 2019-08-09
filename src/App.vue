<template>
  <div id="app">
    <v-head></v-head>
    <router-link to="/">商品</router-link>
    <router-link to="/ratings">评价</router-link>
    <router-link to="/seller">商家</router-link>
    <router-view />
  </div>
</template>
<script>
import head from "./components/head.vue";
export default {
  components: {
    "v-head": head
  }
};
</script>

<style></style>
