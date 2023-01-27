
<template>
<Header></Header>
<content></content>
<Footer></Footer>
 
</template>

<script>
 
import './style/style.css'
import './plugins/bootstrap/css/bootstrap.min.css'
import './plugins/animate-css/animate.css'
import './plugins/fontawesome/css/all.css'
import './plugins/fonts/Pe-icon-7-stroke.css'
import './plugins/themify/css/themify-icons.css'
import './plugins/slick-carousel/slick/slick.css'
import './plugins/slick-carousel/slick/slick-theme.css'
import Content from './components/Content.vue'
import Content from './components/Header.vue'
import Content from './components/Footer.vue'




export default {
  components: { Content, Header, Footer},
  name: 'App'
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}


.c-details span {
    font-weight: 300;
    font-size: 13px
}

.icon {
    width: 50px;
    height: 50px;
    background-color: #eee;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 39px
}
.card-stat {
    border-top: 4px solid #ffc107;
}

</style>
