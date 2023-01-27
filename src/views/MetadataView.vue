<template>
    <HeaderWeb></HeaderWeb>
    <hr /><hr />
    <h3>Metadata</h3>
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
   