import Vue from 'vue'
// import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.esm.browser.js'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Todo from '@/components/Todo'


Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    },


  ]
})
