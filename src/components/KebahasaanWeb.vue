<template>
  <section class="banner-area">
     <div class="container">
    <div class="row align-items-center">
      <div class="col-md-12 col-lg-12">
        <div class="row">
          <div class="col-md-12 col-lg-12 bg-st">
            <div class="jumbotron rounded-radius text-white">
              <h1 class="display-6 text-white">Kebahasaan Nasional</h1>
              <p class="lead">
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <!-- Content -->
    <div class="container">
      <!-- <h3>Kebahasaan Nasional</h3> -->
      
      <div class="col-md-12 col-lg-12">
        <div class="row mb-3  mt-5 mb-5">
          <div
            class="col-md-3 md-2"
        v-if="bahasa">
        
            <div class="card card-stat p-3 mb-2">
              <div class="d-flex justify-content-right">
                <div class="d-flex flex-row align-items-center">
                  <div class="icon mr-2">
                    <i class="fa fa-school"></i></div>
                    <div class="ms-2 c-details">
                      <h6 class="mb-0">Total Bahasa</h6>
                      <h3><strong>{{ bahasa.total }}</strong></h3>
                      <h4 class="text-kiri"><strong></strong></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
       
      <!-- <div class="card card-stat p-3 mb-2">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class="icon mr-2">
                    <i class="fa fa-school"></i></div>
                    <div class="ms-2 c-details">
                      <h6 class="mb-0">{{ budaya.jenis }}</h6>
                      <h3>{{ budaya.total }}</h3>
                      <h1>Sum : {{ budaya.total + budaya.total + budaya.total }}</h1> 
                    </div>
                  </div>
                </div>
              </div>-->
            
    
    

    <!-- data tematik -->

    <!-- / .row -->

    <!-- / .container -->
  </section>
</template>
<script>
import axios from "axios";
// import func from 'vue-editor-bridge';

export default {
  name: "KebahasaanWeb",

  data() {
    return {
      bahasa: null,
      title : "Kebahasaan",
    };
  },  
  methods: {
    setContents(data) {
      this.bahasa = data;
    },
  },
  mounted() {
    axios
      // .get("http://localhost:8080/svc/kl/ckan/v1?apikey=f05ed5ed-aa1a-4f33-a31a-60cb29e5a2be/" ,{ headers })
      .get("http://localhost:8080/svc/kl/pubbahasa/v1")
      .then((response) => (this.bahasa = response.data))
      .catch((error) => console.log(error));
    // .then(function (response) {
    //   console.log("Berhasil : ", response);
    // })
    // .catch(function (error) {
    //   console.log("gagal : ", error);
    // });
  },
  computed:{
   totalItem: function(){
      let sum = 0;
      this.bahasa.forEach(function(bahasa) {
         sum += (parseFloat(bahasa.total) + parseFloat(bahasa.total));
      });

     return sum;
   }
}
};
</script>
<style>
.justify-content-center {
  text-align: left;
}
.text-kiri{
    text-align: right;
    padding-left: 10px;
}

</style>
