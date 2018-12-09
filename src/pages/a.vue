<template>
  <div>
    this is page A
    <button @click="goB()">go to page b </button>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex, { mapMutations, mapState } from "vuex";
Vue.use(Vuex)

export default {
  data(){
    return {

    }
  },
  computed: {
    ...mapState({
      tabStatus: state => state.tabStatus.tabStatus
    })
  },
  methods:{
    ...mapMutations([
      'setTabStatus'
    ]),
    goB() {
      this.setTabStatus(0)
      this.$router.push({path:'/b'}) 
    }
  }
}
</script>

<style>
div{
  font-size: 32px
}
button{
  height: 100px;
  width: 300px;
  background: #e1e1e1;
  font-size: 38px;
  margin-left: 50px
}
</style>
