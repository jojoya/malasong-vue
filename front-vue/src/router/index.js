import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FormDemo from '@/components/FormDemo'
import Layout from '@/components/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/FormDemo', name: 'FormDemo', component: FormDemo },
    { path: '/Layout', name: 'Layout', component: Layout },
    { path: '/HelloWorld', name: 'HelloWorld', component: HelloWorld }
  ]
})
