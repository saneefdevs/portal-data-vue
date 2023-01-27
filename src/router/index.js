import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MetadataView from '../views/MetadataView.vue'
import DatasetView from '../views/DatasetView.vue'
import PublikasiView from '../views/PublikasiView.vue'
import DataindukView from '../views/DataindukView.vue'
import PendidikanView from '../views/PendidikanView.vue'
import AccountMuseumView from '../views/AccountMuseumView.vue'
import KebudayaanView from '../views/KebudayaanView.vue'
import KebahasaanView from '../views/KebahasaanView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Portal Data - Data Induk Nasional',
      metaTags: [
        {
          name: 'Portal Data',
          content: 'Portal Seluruh data terkait Pendidikan Nasional.'
        },
        {
          property: 'og:description',
          content: 'Portal Resmi Data Indonesia Pusdatin'
        }
      ]
    }
  },
  {
    path: '/metadata',
    name: 'metadata',
    component: MetadataView
  },
  {
    path: '/dataset',
    name: 'dataset',
    component: DatasetView
  },
  {
    path: '/datainduk',
    name: 'datainduk',
    component: DataindukView
  },
  {
    path: '/publikasi',
    name: 'publikasi',
    component: PublikasiView
    // component: () => import(/* webpackChunkName: "about" */ '../views/DatasetView.vue')
  
  },
  {
    path: '/pendidikan',
    name: 'pendidikan',
    component: PendidikanView,
    meta: {
      title: 'Data Pendidikan Nasional',
      metaTags: [
        {
          name: 'Data Pendidikan',
          content: 'Berisi Seluruh data terkait Pendidikan Nasional.'
        },
        {
          property: 'og:description',
          content: 'Data Pendidikan Nasional'
        }
      ]
    }
    // component: () => import(/* webpackChunkName: "about" */ '../views/DatasetView.vue')
  
  },
  {
    path: '/museum',
    name: 'museum',
    component: AccountMuseumView
    // component: () => import(/* webpackChunkName: "about" */ '../views/DatasetView.vue')
  
  },
  {
    path: '/budaya',
    name: 'budaya',
    component: KebudayaanView
    // component: () => import(/* webpackChunkName: "about" */ '../views/DatasetView.vue')
  
  },
  {
    path: '/bahasa',
    name: 'bahasa',
    component: KebahasaanView
    // component: () => import(/* webpackChunkName: "about" */ '../views/DatasetView.vue')
  
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
