<template>
<div class="col-md-3">
    <div class="card card-stat p-3 mb-2">
      <div class="d-flex justify-content-between">
        <div class="d-flex flex-row align-items-center">
          <div class="icon mr-2"><i class="fa fa-monument"></i></div>
          <div class="ms-2 c-details" v-if="museum">
            <!-- <h6 class="mb-0">Cagar Budaya</h6>
            <h3>{{ contents.total }}</h3> -->
         <AcountMuseumWeb :museum="museum" />
        
        </div>
      </div>
    </div>
  </div></div>

</template>
<script>
import axios from "axios";
// import Popper from "vue3-popper";
import AcountMuseumWeb from "@/components/AcountMuseumWeb.vue";

export default {
  name: "AccountMuseumView",
  components: {
    AcountMuseumWeb,
  },
  
  data() {
    return {
      museum: null,
      
    };
  },
  methods: {
    setPublikasis(data) {
      this.museum = data;
    },
  },
  mounted() {
    axios
      // .get("http://localhost:8080/svc/kl/ckan/v1?apikey=f05ed5ed-aa1a-4f33-a31a-60cb29e5a2be/" ,{ headers })
      .get("http://localhost:8080/svc/kl/pubmuseum/v1")
      .then((response) => (this.museum = response.data))
      .catch((error) => console.log(error));
//     .then(function (response) {
//       console.log("Berhasil : ", response);
//     })
//     .catch(function (error) {
//       console.log("gagal : ", error);
//     });
  },
};
</script>

