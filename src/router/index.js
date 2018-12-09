import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export var router = new VueRouter({
  routes: [{
    path: '/',
    name: 'Home',
    component: resolve => require(['../pages/home'], resolve)
  }, {
    path: '/child',
    name: 'Child',
    component: resolve => require(['../pages/child'], resolve)
  },
  {
    path: '/a',
    name: 'a',
    component: resolve => require(['../pages/a'], resolve)
  
  },
  {
    path: '/b',
    name: 'b',
    component: resolve => require(['../pages/b'], resolve)
    
  }, {
    path: '/c',
    name: 'c',
    component: resolve => require(['../pages/c'], resolve)
  }]
})