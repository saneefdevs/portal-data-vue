<template>
  <section class="banner-area py-6">
    <!-- Content -->
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-12 col-lg-12 bg-s">
          <div
            class="jumbotron rounded-radius text-white"
            
          >
            <h1 class="display-4 text-white">Penelusuran Data</h1>
            <p class="lead">
              Satu Data Pendidikan dan Kebudayaan adalah kebijakan tata kelola
              data untuk menghasilkan informasi yang akurat, mutakhir, terpadu,
              dapat dipertanggungjawabkan, diakses, dan dibagipakaikan.
            </p>

            <div class="input-group">
              <input
                type="text"
                class="form-control input-text rounded-radius"
                placeholder="Masukan kata kunci"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-warning rounded-radius" type="button">
                  <i class="fa fa-search text-white"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-12 col-lg-12 bg-p">
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
                    <div class="ms-2 c-details" v-if="museume">
                      <h6 class="mb-0">Museum</h6>
                      <h3>{{ museume.total }}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- data tematik -->
        <div class="col-md-12 col-lg-12 pt-5 text-center">
          <h1 class="display-5 mt-3 mb-5">Data Tematik</h1>

          <div class="row ">
            <div class="col-lg-4 col-sm-6 col-md-6 mb-30">
              <div class="web-service-block2 border sp-1">
                <router-link to="/pendidikan"
                  ><i class="fa fa-solid fa-graduation-cap"></i>
                  <h3 style="color:transfarant;">Pendidikan</h3></router-link
                >
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-md-6 mb-30">
              <div class="web-service-block2 border sp-2">
                <router-link to="/budaya"
                  ><i class="fa fa-solid fa-archway"></i>
                  <h3>Kebudayaan</h3></router-link
                >
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-md-6 mb-30">
              <div class="web-service-block2 border sp-3">
                <router-link to="/bahasa"
                  ><i class="fa fa-solid fa-language"></i>
                  <h3>Kebahasaan</h3></router-link
                >
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-12 col-lg-12 pt-2">
          <h1 class="display-5 mt-5 mb-5 text-center">Publikasi Terkini</h1>
          <swiper :modules="modules" :pagination="{ clickable: true }" 
  :slides-per-view="0"
  :autoplay="{ delay: 3500, disableOnInteraction: true }">
              <swiper-slide>
          <div class="row justify-content-center mt-5 mb-5">
           
               
                <div
              class="col-lg-3 col-md-6"
              v-for="content in contents"
              :key="content.dokumen_id"
            >
              <div class="card shadow card-product pl-3 pr-2">
                <div class="blog-box">
                  <div class="blog-img-box">
                    <img
                      :src="content.url_sampul"
                      alt=""
                      class="img-fluid blog-img"
                    />
                  </div>
                  <div class="single-blog">
                    <div class="blog-content">
                      <h6>{{ content.create_date.substring(0, 4) }}</h6>
                      <a :href="content.url_isi">
                        <h3 class="card-title">{{ content.judul }}</h3>
                      </a>
                      <p>{{ content.deskripsi.substring(0, 100) + "..." }}</p>
                      <!-- <p> <router-link class="btn btn-success" :to="'/publikasi/'+product.dokumen_id"><b-icon-cart></b-icon-cart> Selengkapnya</router-link></p> -->
                    </div>
                    <div class="selengkapnya">Lihat Selengkapnya<i class="fas fa-arrow-right ml-2"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
              </swiper-slide>
              <div class="swiper-pagination"></div>
            </swiper>
          </div>  
        </div>
      </div>
      <!-- / .row -->
    
    <!-- / .container -->
  </section>
</template>
<script>
// import AcountMuseumWeb from "@/components/AcountMuseumWeb.vue";
import axios from "axios";
import  { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// style (Swiper v6+)
import "swiper/swiper-bundle.css";
import 'swiper/css'
import 'swiper/css/pagination'
// import 'swiper/swiper.min.css'
// style (Swiper v5-)

export default {
  name: "IsiWeb",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
      return {
        modules: [Pagination]
      }
    },
  
  data() {
    return {
      contents: null,
      museume:null,
      cagbud: null,
    };
  },
  
  methods: {
    setContents(data) {
      this.contents = data;
    },
  },
  created() {
   
    axios
      // .get("http://localhost:8080/svc/kl/ckan/v1?apikey=f05ed5ed-aa1a-4f33-a31a-60cb29e5a2be/" ,{ headers })
      .get("http://localhost:8080/svc/kl/pubstat/v1?page=1&per_page=4")
      .then((response) => (this.contents = response.data.data))
      .catch((error) => console.log(error));
    // .then(function (response) {
    //   console.log("Berhasil : ", response);
    // })
    // .catch(function (error) {
    //   console.log("gagal : ", error);
    // });
  },
  mounted() {
    axios
      .get("http://localhost:8080/svc/kl/pubmuseum/v1")
      .then((response) => (this.museume = response.data))
      .catch((error) => console.log(error));
  
  },
  onStream() {
    axios
      .get("http://localhost:8080/svc/kl/pubcagbud/v1")
      .then((response) => (this.cagbud = response.data))
      .catch((error) => console.log(error));
  
  },
};
  

</script>
<style >
.justify-content-center {
  text-align: left;
}
.selengkapnya {
  font-weight: 500!important;
  padding:5px;
  padding-bottom: 5px;;
}
.py-6{
  padding: 4rem !important;;
}
.bg-s{
  background: url("http://118.98.237.151/referensi/public/backgroun-rg/2.png"),linear-gradient(170.13deg,#004ab8 -28.46%,#4e21cd 35.64%,#2fb6c1 91.29%);
    background-position: 0 100%,50%;
    background-repeat: no-repeat;
    background-size: contain,contain;
    border-radius: 16px;
    box-shadow: 0 8px 16px 6px hsl(0deg 0% 87% / 20%);
}
.bg-p{
  padding: 10px;
  padding-top: 1.5rem;
}
.sp-1{
    background: url("http://118.98.237.151/referensi/public/backgroun-rg/2.png"),linear-gradient(170.13deg,#b0d8f9 9%,#2fb6c1 98.65%);
    background-position: 0 1%,1%;
    background-repeat: no-repeat;
}
.sp-2{
   background: url("http://118.98.237.151/referensi/public/backgroun-rg/6.png");
   background: linear-gradient(224.82deg,#b0d8f9 .9%,#e5f6e5 98.65%);
   background-position: 0 1%,90%;
    background-repeat: no-repeat;
}
.sp-3{
    background: url("http://118.98.237.151/referensi/public/backgroun-rg/6.png"),linear-gradient(170.13deg,#004ab8 -28.46%,#2fb6c1 98.65%);
    background-position: 0 1%,1%;
    background-repeat: no-repeat;
}
</style>
