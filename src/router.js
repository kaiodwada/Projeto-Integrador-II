import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },

    {
      path: '/classes',
      name: 'classes',
     
      component: () => import('./views/Classes.vue')
    },

    {
      path: '/professores',
      name: 'professores',
     
      component: () => import('./views/Professores.vue')
    },

    {
      path: '/login',
      name: 'login',
     
      component: () => import('./views/painel/Login.vue')
    },


    {
      path: '/registration',
      name: 'registrar',
     
      component: () => import('./views/painel/Registration.vue')
    },

    {
      path: '/painel',
      name: 'painel',
     
      component: () => import('./views/painel/Painel.vue')
    },

    {
      path: '/painel/perfis',
      name: 'perfis',
     
      component: () => import('./views/painel/Perfis.vue')
    },

    {
      path: '/painel/cursos',
      name: 'cursos',
     
      component: () => import('./views/painel/Cursos.vue')
    },

    {
      path: '/painel/professores',
      name: 'professorescurso',
     
      component: () => import('./views/painel/Professores.vue')
    }



  ]
})
