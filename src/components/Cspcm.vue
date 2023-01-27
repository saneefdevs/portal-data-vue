<template>
  <section class="banner-area py-7">
    <!-- Content -->
    <div class="container">
      <div class="col-md-12 col-lg-12">
        <div class="row">
          <div class="col-md-3">
            <div class="card card-stat p-3 mb-2">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class="icon mr-2"><i class="fa fa-school"></i></div>
                  <div class="ms-2 c-details">
                    <h6 class="mb-0">Sekolah</h6>
                    <h3>274.687</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card card-stat p-3 mb-2">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class="icon mr-2">
                    <i class="fa fa-university"></i>
                  </div>
                  <div class="ms-2 c-details">
                    <h6 class="mb-0">Perguruan Tinggi</h6>
                    <h3>4.517</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card card-stat p-3 mb-2">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class="icon mr-2"><i class="fa fa-monument"></i></div>
                  <div class="ms-2 c-details">
                    <h6 class="mb-0">Cagar Budaya</h6>
                    <h3>3.326</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card card-stat p-3 mb-2">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class="icon mr-2"><i class="fa fa-building"></i></div>
                  <div class="ms-2 c-details">
                    <h6 class="mb-0">Museum</h6>
                    <h3>442</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- data tematik -->

      <!-- / .row -->
    </div>
    <!-- / .container -->
  </section>
</template>
<script>
import axios from "axios";

export default {
  name: "Cspcm",

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
      .get("http://localhost:8081/publikasi/publikasi/index?page=1&per_page=4")
      .then((response) => (this.contents = response.data.data))
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
<style >
.justify-content-center {
  text-align: left;
}
</style>
