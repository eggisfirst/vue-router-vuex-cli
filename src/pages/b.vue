<template>
  <div>
    this is page b
    <keep-alive>
    <ul>
      <li v-for="(item,index) in msg" :key="index"
        @click="changeStyle(index)" :class="{'active':tabStatus == index}">
        {{ item }}
      </li>
    </ul>
    </keep-alive>
    <button @click="goA()">go to page A</button>
    <button @click="goC()"> go to page C</button>
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
      msg:['导航1','导航2','导航3']
     
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
    changeStyle(index){ 
      this.setTabStatus(index)
    },
    goC() {
      this.$router.push({path:'/c'})
    },
    goA() {
      this.$router.push({path:'/a'})
    }
  }
}
</script>

<style>
div{
  font-size: 34px;
}
ul{
  display: flex;
 
}
li{
  width: 300px;
  height: 50px;
  background: #fff;
  color: #007aff;
  border: 1px solid #e1e1e1;
  text-align: center;
  line-height: 50px;
}
.active{
  background: #007aff;
  color: #fff;

}
button{
  width: 200px;
  height: 100px;
  background: #e1e1e1;
  margin-top: 20px;
  margin-left: 100px;
  font-size: 34px
}
</style>
