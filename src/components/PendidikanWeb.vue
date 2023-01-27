<template>
  <section class="banner-area">
    <!-- Content -->
    <div class="container">
      <h3>Satuan Pendidikan</h3>
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
                      <h3>{{ content.total }}</h3>
                       <h4 class="text-kiri"><strong>Sekolah</strong></h4>
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
      .get("http://localhost:8080/publikasi/portal/satuan-pendidikan")
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
</style>
