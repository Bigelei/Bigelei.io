<template>
  <div class="container">
      <Contact/>
  </div>
</template>

<script>
import Contact from "./components/SiteAside/Contact/test.vue"
import "@/style/global.less"
export default {
    components:{
        Contact,
    }
}
</script>

<style>
  .container {
    width: 400px;
    height: 400px;
    border: 2px solid red;
    background: #000;
    margin: 0 auto;
    padding-top: 200px;
  }

</style>