import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'CreatePost',
    component: () => import('../views/CreatePost.vue'),
  },
  {
    path: '/:id',
    name: 'Detail',
    component: () => import('../views/Detail.vue'),
    props: true
  },
  {
    path: '/:id/edit',
    name: 'EditPost',
    component: () => import('../views/EditPost.vue'),
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',	
  routes
})

export default router
