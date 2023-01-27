<template>
  <HeaderWeb></HeaderWeb>
  <h1> Kebudayaan Nasional </h1>
        <KebudayaanWeb></KebudayaanWeb>
     
  <FooterWeb></FooterWeb>
</template>
<script>
import HeaderWeb from "@/components/HeaderWeb.vue";
import FooterWeb from "@/components/FooterWeb.vue";
import KebudayaanWeb from "@/components/KebudayaanWeb.vue"

export default {
  name: "KebudayaanView",
  components: {
    HeaderWeb,
    FooterWeb,
    KebudayaanWeb,
  },
};
</script>

