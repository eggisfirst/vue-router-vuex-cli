<template>
  <div>
    this is page C
    <button @click="goB()">return to page B</button>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'

export default {
  data(){
    return {

    }
  },
  methods:{
    goB() {
      this.$router.go(-1)
    }
  },
  beforeRouteLeave(to, from, next) {
    // 设置下一个路由meta
    to.meta.keepAlive = true; // 让B缓存，不请求数据
    next(); // 跳转到B页面
  }
}
</script>
