<template>
  <section class="header">
    <div class="info">
      <div class="avatar">
        <img :src="seller.avatar" alt="" />
      </div>
      <div class="content"></div>
    </div>
    <div class="bulletin"></div>
  </section>
</template>
<script>
export default {
  props: {
    seller: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  created() {
    console.log(this.seller);
  }
};
</script>
<style lang="stylus" scoped>
.header
  width 100%

  .info
    width 100%
    height 105px
    font-size 0
    background-color rgba(7, 17, 27, 0.5)
    padding 24px 12px 18px 24px
    box-sizing border-box

    .avatar
      display inline-block

      img
        width 64px
        height 64px
        border-radius 2px

  .bulletin
    width 100%
    height 28px
    background-color rgba(7, 17, 27, 0.2)
</style>
