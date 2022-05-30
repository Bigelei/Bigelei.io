<template>
  <div>
    <h1>App组件</h1>
    <Avatar
    url="https://img2.baidu.com/it/u=285834694,1458566727&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400"
    :size="150"
  />
    </div>
  
</template>

<script>
import Avatar from "./";
export default {
  components: {
    Avatar,
  },
};
</script>

<style>
</style>