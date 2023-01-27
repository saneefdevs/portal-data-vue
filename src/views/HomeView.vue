<template>
  <HeaderWeb></HeaderWeb>
  <!-- <h1>testing</h1> -->
  <IsiWeb />
  <FooterWeb />
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import FooterWeb from "@/components/FooterWeb.vue";
import HeaderWeb from "@/components/HeaderWeb.vue";
import IsiWeb from "@/components/IsiWeb.vue";

export default {
  name: "HomeView",
  components: {
    HeaderWeb,
    FooterWeb,
    IsiWeb,
  },
};
</script>
