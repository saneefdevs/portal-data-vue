<template>
    <HeaderWeb></HeaderWeb>
    <hr /><hr />
     <div class="container">
    <div class="row align-items-center">
      <div class="col-md-12 col-lg-12">
        <div class="row">
          <div class="col-md-12 col-lg-12 bg-st">
            <div class="jumbotron rounded-radius text-white">
              <h1 class="display-6 text-white">Meta Data</h1>
              <p class="lead">
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <br />
    <FooterWeb />
   </template>
   
   <script>
   // @ is an alias to /src
   // import HelloWorld from '@/components/HelloWorld.vue'
   import HeaderWeb from '@/components/HeaderWeb.vue';
   import FooterWeb from '@/components/FooterWeb.vue';
   
   export default {
     name: 'MetadataView',
     components: {
       HeaderWeb,
       FooterWeb
     }
   }
   </script>
   