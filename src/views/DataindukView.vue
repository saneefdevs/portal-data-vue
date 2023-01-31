<template>
    <HeaderWeb></HeaderWeb>
    <hr /><hr />
    
    <div class="container">
    <div class="row align-items-center">
      <div class="col-md-12 col-lg-12">
        <div class="row">
          <div class="col-md-12 col-lg-12 bg-s">
            <div class="jumbotron rounded-radius text-white">
              <h1 class="display-4 text-white">Data Induk Pendidikan</h1>
              <p class="lead">
                Data Induk Pendidikan. Satu Data Pendidikan dan Kebudayaan adalah
                kebijakan tata kelola data untuk menghasilkan informasi yang
                akurat, mutakhir, terpadu, dan dapat dipertanggungjawabkan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div><br />
    <FooterWeb />
   </template>
   
   <script>
   // @ is an alias to /src
   // import HelloWorld from '@/components/HelloWorld.vue'
   import HeaderWeb from '@/components/HeaderWeb.vue';
   import FooterWeb from '@/components/FooterWeb.vue';
   
   export default {
     name: 'DataindukView',
     components: {
       HeaderWeb,
       FooterWeb
     }
   }
   </script>
   