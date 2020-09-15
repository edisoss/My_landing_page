import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HomePage'
import HomePage from "../components/HomePage";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
