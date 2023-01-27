<template>
    <HeaderWeb></HeaderWeb>
    <hr /><hr />
    <h3>Data Induk</h3>
    <br />
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
   