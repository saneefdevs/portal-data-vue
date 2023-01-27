<template>
  <HeaderWeb></HeaderWeb>
  <h1> Satuan Pendidikan </h1>
        <PendidikanWeb></PendidikanWeb>
     
  <FooterWeb></FooterWeb>
</template>
<script>
import HeaderWeb from "@/components/HeaderWeb.vue";
import FooterWeb from "@/components/FooterWeb.vue";
import PendidikanWeb from "@/components/PendidikanWeb.vue"

export default {
  name: "PendidikanView",
  components: {
    HeaderWeb,
    FooterWeb,
    PendidikanWeb,
  },
};
</script>

