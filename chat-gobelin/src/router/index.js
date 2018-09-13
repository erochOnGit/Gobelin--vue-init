import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/Container'
import ChatView from '@/view/ChatView'
import LoginView from '@/view/LoginView'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Container',
    //   component: Container
    // },
    {
      path: '/',
      name: 'home',
      component: ChatView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})
