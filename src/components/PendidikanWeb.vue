<template>
  <section class="banner-area">
    <!-- Content -->
    <div class="container">
    <div class="row align-items-center">
      <div class="col-md-12 col-lg-12">
        <div class="row">
          <div class="col-md-12 col-lg-12 bg-st">
            <div class="jumbotron rounded-radius text-white">
              <h1 class="display-6 text-white">Satuan Pendidikan</h1>
              <p class="lead">
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div class="container">
      <!-- <h3>Satuan Pendidikan</h3> -->
      <div class="col-md-12 col-lg-12">
        <div class="row mb-3 justify-content-center mt-5 mb-5">
          <div
            class="col-md-3 md-2"
        v-for="content in contents"
        :key="content.bentuk_pendidikan_id"
      >
        
            <div class="card card-stat p-3 mb-2">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class="icon mr-2">
                    <i class="fa fa-school"></i></div>
                    <div class="ms-2 c-details">
                      <h6 class="mb-0">{{ content.nama }}</h6>
                      <h3><strong>{{ content.total }}</strong></h3>
                       <h4 class="text-kiri"><strong></strong></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    
    

    <!-- data tematik -->

    <!-- / .row -->

    <!-- / .container -->
  </section>
</template>
<script>
import axios from "axios";

export default {
  name: "PendidikanWeb",

  data() {
    return {
      contents: null,
    };
  },
  methods: {
    setContents(data) {
      this.contents = data;
    },
  },
  mounted() {
    axios
      // .get("http://localhost:8080/svc/kl/ckan/v1?apikey=f05ed5ed-aa1a-4f33-a31a-60cb29e5a2be/" ,{ headers })
      .get("http://localhost:8080/svc/kl/pubsatpen/v1")
      .then((response) => (this.contents = response.data))
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
<style>
.justify-content-center {
  text-align: left;
}
.bg-st{
  background: url("http://118.98.237.151/referensi/public/backgroun-rg/2.png"),url("http://118.98.237.151/referensi/public/backgroun-rg/13.png"),linear-gradient(170.13deg,#004ab8 -28.46%,#4e21cd 35.64%,#2fb6c1 91.29%);
    background-position: 0 100%,100%;
    background-repeat: no-repeat;
    background-size: contain,contain;
    border-radius: 16px;
    box-shadow: 0 8px 16px 6px hsl(0deg 0% 87% / 20%);
}
</style>
