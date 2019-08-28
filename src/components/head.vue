<template>
  <section class="header">
    <div class="info">
      <div class="avatar">
        <img :src="seller.avatar" alt="" />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="deliveryTime">
          <span>{{ seller.description }}/{{ seller.deliveryTime }}</span>
        </div>
        <div class="description" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>
      </div>
      <div class="countBox" v-if="seller.supports" @click="showDetail">
        <span class="count">{{ seller.supports.length }}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <!-- 公告 -->
    <div class="bulletin">
      <span class="brand"></span>
      <span class="text">{{ seller.bulletin }}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <!-- 模态框 -->
    <div class="popup" v-show="isShow">
      <div class="popup-wrapper">
        <div class="titles">{{ seller.name }}</div>
        <div class="star">
          <star :size="48" :score="seller.score"></star>
        </div>
        <div class="title">
          <div class="line"></div>
          <div class="text">优惠信息</div>
          <div class="line"></div>
        </div>
        <div class="bulletin"></div>
      </div>
      <div class="detail-close">
        <i class="icon-close"></i>
      </div>
    </div>
  </section>
</template>
<script>
import star from "./common/star";
export default {
  components: {
    star
  },
  props: {
    seller: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      isShow: false
    };
  },
  created() {
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];
  },
  methods: {
    showDetail() {
      this.isShow = true;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/mixin.styl'
@import '../common/stylus/icon.styl'

.header
  width 100%
  position relative

  .info
    width 100%
    height 105px
    font-size 0
    background-color rgba(7, 17, 27, 0.5)
    padding 24px 12px 18px 24px
    box-sizing border-box
    position relative

    // z-index 1
    // &:after
    // content ""
    // width 100%
    // height 100%
    // position absolute
    // left 0
    // top 0
    // background inherit
    // filter blur(2px)
    // z-index 2
    .avatar
      display inline-block
      vertical-align top

      img
        width 64px
        height 64px
        border-radius 2px

    .content
      display inline-block
      font-size 14px
      margin-left 16px

      .title
        margin 2px 0 8px 0

        .brand
          width 30px
          height 18px
          display inline-block
          vertical-align top
          bg-img('../common/imgs/brand/brand')
          background-size 30px 18px
          background-repeat no-repeat

        .name
          font-size 16px
          color #fff
          font-weight bold
          line-height 18px
          margin-left 6px

      .deliveryTime
        font-size 12px
        color #fff
        font-weight 200
        line-height 12px
        margin-bottom 10px

      .description
        .icon
          width 12px
          height 12px
          margin-right 4px
          display inline-block
          vertical-align top
          background-size 12px 12px
          background-repeat no-repeat

          &.decrease
            bg-img('../common/imgs/decrease/decrease_1')

          &.discount
            bg-img('../common/imgs/discount/discount_1')

          &.guarantee
            bg-img('../common/imgs/guarantee/guarantee_1')

          &.invoice
            bg-img('../common/imgs/invoice/invoice_1')

          &.special
            bg-img('../common/imgs/special/special_1')

        .text
          font-size 10px
          color #fff
          font-weight 200
          line-height 12px
          display inline-bliock
          vertical-align top

    .countBox
      width 40px
      height 24px
      background-color rgba(0, 0, 0, 0.2)
      position absolute
      right 12px
      bottom 18px
      line-height 24px
      border-radius 12px
      text-align center
      color #fff

      .count
        vertical-align top
        font-size 10px

      .icon-keyboard_arrow_right
        line-height 24px
        margin-left 2px
        font-size 10px

  .bulletin
    width 100%
    height 28px
    line-height 28px
    background-color rgba(7, 17, 27, 0.2)
    padding 0 12px
    box-sizing border-box
    position relative
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
    background rgba(7, 17, 27, 0.5)
    color #fff
    filter blur(-10px)

    .brand
      display inline-block
      vertical-align top
      margin-top 9px
      width 22px
      height 12px
      bg-img('../common/imgs/bulletin/bulletin')
      display inline-block
      vertical-align top
      background-size 22px 12px
      background-repeat no-repeat

    .text
      vertical-align top
      margin 0 4px
      font-size 10px
      color #fff
      font-weight 200
      line-height 28px

    .icon-keyboard_arrow_right
      position absolute
      font-size 10px
      right 10px
      top 8px

  .popup
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    background-color rgba(7, 17, 27, 0.8)
    backdrop-filter blur(10px)

    .titles
      margin-top 64px
      text-align center
      font-size 16px
      font-weight 700
      color #fff
      line-height 16px

    .star
      margin 16px 0 28px 0
      text-align center
      line-height 24px
      background rgba(7, 17, 27, 0.8)
    .title
      display flex
      width 80%
      margin 28px auto 24px
      .line
        flex 1
        position relative
        top -6px
        border-bottom 1px solid rgba(255,255,255, .2)
      .text
        padding 0 12px
        font-weight 700
        font-size 14px
        color #fff
</style>
