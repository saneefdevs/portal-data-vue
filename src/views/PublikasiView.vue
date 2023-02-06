<template>
  <HeaderWeb></HeaderWeb>
  <hr />
  <hr />
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-12 col-lg-12">
        <div class="row">
          <div class="col-md-12 col-lg-12 bg-s">
            <div class="jumbotron rounded-radius text-white">
              <h1 class="display-4 text-white">Publikasi</h1>
              <p class="lead">
                Data publikasi terkait statistik pendidikan. Satu Data Pendidikan dan Kebudayaan adalah
                kebijakan tata kelola data untuk menghasilkan informasi yang
                akurat, mutakhir, terpadu, dan dapat dipertanggungjawabkan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   <div class="container">
    <div class="row align-items-center">
      <div class="col-md-12 col-lg-12">
        <div class="row justify-content-center mt-5 mb-5">
          <div
            class="col-lg-3 md-6 mt-3"
            v-for="publikasi in publikasis"
            :key="publikasi.dokumen_id"
          >
            <IsiPublikasi :publikasi="publikasi" />
            
          </div>
        </div>
      </div>
    </div>
  </div>

  <FooterWeb />
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import "bootstrap/dist/css/bootstrap.min.css"
import HeaderWeb from "@/components/HeaderWeb.vue";
import FooterWeb from "@/components/FooterWeb.vue";
import IsiPublikasi from "@/components/IsiPublikasi.vue";
import axios from "axios";
// import Popper from "vue3-popper";


export default {
  name: "PublikasiView",
  components: {
    HeaderWeb,
    FooterWeb,
    IsiPublikasi,
    // Popper,
  },
  data() {
    return {
      publikasis: null,
      limitForDescription: 7,
    };
  },
  methods: {
    setPublikasis(data) {
      this.publikasis = data;
    },
  },
  mounted() {
    axios
      // .get("http://localhost:8080/svc/kl/ckan/v1?apikey=f05ed5ed-aa1a-4f33-a31a-60cb29e5a2be/" ,{ headers })
      .get("http://localhost:8080/svc/kl/pubstat/v1?page=1&per_page=8")
      .then((response) => (this.publikasis = response.data.data))
      .catch((error) => console.log(error));
    // .then(function (response) {
    //   console.log("Berhasil : ", response);
    // })
    // .catch(function (error) {
    //   console.log("gagal : ", error);
    // });
  },
};
</script>
