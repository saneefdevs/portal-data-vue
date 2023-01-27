<template>
  <HeaderWeb></HeaderWeb>
  <h1> Bahasa Nasional </h1>
        <KebahasaanWeb></KebahasaanWeb>
     
  <FooterWeb></FooterWeb>
</template>
<script>
import HeaderWeb from "@/components/HeaderWeb.vue";
import FooterWeb from "@/components/FooterWeb.vue";
import KebahasaanWeb from "@/components/KebahasaanWeb.vue"

export default {
  name: "KebudayaanView",
  components: {
    HeaderWeb,
    FooterWeb,
    KebahasaanWeb,
  },
};
</script>

