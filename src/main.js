import "bootstrap/dist/css/bootstrap.min.css"
import "./plugins/bootstrap/css/bootstrap.min.css"
import "./plugins/animate-css/animate.css"
import "./plugins/fontawesome/css/all.css"
import "./plugins/fonts/Pe-icon-7-stroke.css"
import "./plugins/themify/css/themify-icons.css"
import "./plugins/slick-carousel/slick/slick.css"
import "./plugins/slick-carousel/slick/slick-theme.css"
// import '@coreui/coreui/dist/css/coreui.min.css'
// import Vue from 'vue'
// import VueRouter from 'vue-router'
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { createApp } from 'vue'


import App from './App.vue'
// import CoreuiVue from '@coreui/vue'
// import CIcon from '@coreui/icons-vue'
// import { iconsSet as icons } from '@/assets/icons'
//import { CAlert } from '@coreui/vue';
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'
//import "bootstrap/dist/css/bootstrap.min.css"
// import VueAwesomePaginate from "vue-awesome-paginate"
//import "vue-awesome-paginate/dist/style.css"

// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)

// Vue.use (VueAwesomePaginate)
createApp(App).use(router).mount('#app')
// .use(CoreuiVue)
// .provide('icons', icons)
// .component('CIcon', CIcon)
import "bootstrap/dist/js/bootstrap.js"

import router from './router'
