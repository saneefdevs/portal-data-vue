<template>
  <HeaderWeb></HeaderWeb>
  <router-view/>
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


export default {
 
    // components: { HeaderWeb },
    name: 'App',
    created () {
            document.title = "Portal Data - Data Induk Nasional";
        }
    
}

</script>
<style lang="scss">
// Import Main styles for this application
// @import 'scss/_responsive';
// @import 'scss/style';
</style>
