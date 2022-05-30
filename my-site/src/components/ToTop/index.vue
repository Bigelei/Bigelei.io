<template>
  <div @click="handleClick" v-show="show" class="to-top-container">TOP</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroy() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    handleScroll(dom) {
      if (!dom) {
        this.show = false;
        return
      }
      this.show = dom.scrollTop >= 500;
    },
    handleClick() {
      //回到顶部
      this.$bus.$emit("setMainScroll", 0);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/style/var.less";
.to-top-container {
  height: 50px;
  width: 50px;
  position: fixed;
  border-radius: 50%;
  z-index: 99;
  background: @primary;
  right: 50px;
  bottom: 50px;
  color: #fff;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
}
</style>