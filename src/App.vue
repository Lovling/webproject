<template>
  <div id="app">
    <v-head :seller="seller"></v-head>
    <router-link to="/">商品</router-link>
    <router-link to="/ratings">评价</router-link>
    <router-link to="/seller">商家</router-link>
    <router-view />
  </div>
</template>
<script>
import head from "./components/head.vue";
export default {
  data() {
    return {
      seller: {}
    };
  },
  components: {
    "v-head": head
  },
  created() {
    this._getSeller();
  },
  methods: {
    _getSeller() {
      this.api.getSeller().then(res => {
        if (res.code === "0000") {
          this.seller = res.seller;
        }
      });
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import 'common/stylus/index.styl'
</style>
