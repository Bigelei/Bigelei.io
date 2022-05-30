<template>
  <div class="message-area-container">
    <DataFrom v-on="$listeners" />
    <h3>{{ title }}</h3>
    <span>{{ subTilte }}</span>
    <DataList :list="list" />
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataFrom from "./DataFrom.vue";
import DataList from "./DataList.vue";
export default {
  components: {
    DataFrom,
    DataList,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    subTilte: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => {},
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="less">
.loading {
  position: relative;
  height: 100%;
}
</style>