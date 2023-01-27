import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router' 
// import HomeView from '../views/HomeView.vue'
// import DatasetVIew from '../views/DatasetVIew.vue'
// import PublikasiView from '../views/PublikasiView.vue'
// import DataindukView from '../views/DataindukView.vue'
// import ReferensioprView from '../views/ReferensioprView.vue'
// import About from '../views/About.vue'
// import MetadataView from '../views/MetadataView.vue'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/dataset',
  //   name: 'dataset', 
  //   component: DatasetVIew
  // },
  // {
  //   path: '/publikasi',
  //   name: 'publikasi',
  //   component: PublikasiView
  // },
 
  // {
  //   path: '/datainduk',
  //   name: 'datainduk',
  //   component: DataindukView
  // },
  // {
  //   path: '/referensiopr',
  //   name: 'referensiopr',
  //   component: ReferensioprView
  // },
  // {
  //   path: '/metadata',
  //   name: 'metadata',
  //   component: MetadataView
  // },
 
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //   component: About
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
