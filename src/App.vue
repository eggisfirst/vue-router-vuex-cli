<template>
  <div id="app">
    <router-view></router-view>
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive" ></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" ></router-view> -->
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'


export default{
  name: 'app',
  store
}
</script>

<style lang="scss">
//变量
$fontcolor: #fff;
$subfontcolor: #525252;
$bgcolor: #31c3b0;
  /*reset css */
body,dl,dd,ul,ol,h1,h2,h3,h4,h5,h6,pre,form,fieldset,legend,input,textarea,p,thead,tbody,tfoot,th,td {margin:0;padding:0}  
ul,ol{list-style-type:none;list-style-image:none}
a{text-decoration:none}a:active{background-color:transparent}  a:active,a:hover{outline:0 none}a:focus{outline:1px dotted}  
html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;text-size-adjust:100%;font-size:62.5%}  
body{font-size:14px;line-height:1.8}
h1,h2,h3,h4,h5,h6{font-weight:400}h1{font-size:36px}h2{font-size:30px}h3{font-size:22px}h4{font-size:18px}h5{font-size:14px}h6{font-size:12px}
a:link,a:visited,a:hover,a:active{text-decoration: none;}
a,button{
    outline:none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0); 
}
button,input,textarea{
    border: none;
    background: none;
    outline: none;
}
textarea{overflow: hidden;}
a:hover{text-decoration:none;}

/* common css */
.hide{
  display: none;
}

.left {
  float: left;
}

.right {
  float: right;
}

.clear {
  clear: both;
}

.clearfix {
  *zoom: 1;
  &:before {
    display: table;
    line-height: 0;
    content: "";
  }
  &:after {
    display: table;
    line-height: 0;
    content: "";
    clear: both;
  }
}

.line20 {
  height: 20px;
  background: #f9f9f9;
}

.line50 {
  height: 50px;
}

.line100 {
  height: 100px;
}

//设置input框的placeholder样式
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
    color: #fff;
    font-size: 20px;
  } 
  input:-moz-placeholder, textarea:-moz-placeholder {
    color: #fff;
    font-size: 20px;
  } 
  input::-moz-placeholder, textarea::-moz-placeholder {
    color: #fff;
    font-size: 20px;
  } 
  input:-ms-input-placeholder, textarea:-ms-input-placeholder {
    color: #fff;
    font-size: 20px;
  }
</style>
