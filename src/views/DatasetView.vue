<template>
  <HeaderWeb /><br /><br />
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-12 col-lg-12">
        <div class="row">
          <div class="col-md-12 col-lg-12 bg-s">
            <div class="jumbotron rounded-radius text-white">
              <h1 class="display-4 text-white">Dataset</h1>
              <p class="lead">
                Temukan kumpulan data-data mentah berupa tabel yang bisa diolah
                lebih lanjut di sini. Satu Data Pendidikan dan Kebudayaan adalah
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
    <div class="row">
      <div class="col-md-12 col-lg-12 cr-1">
        <div class="input-group">
          <input
            type="text"
            class="form-control input-text rounded-radius"
            placeholder="Cari dataset.."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append ">
            <button class="btn btn-warning rounded-radius" type="button">
              <i class="fa fa-search text-white"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div><br />

  <FooterWeb />
</template>

<script>
import HeaderWeb from "@/components/HeaderWeb.vue";
import FooterWeb from "@/components/FooterWeb.vue";

export default {
  name: "PublikasiView",
  components: {
    HeaderWeb,
    FooterWeb,
  },
};
</script>
<style>
div {
  display: block;
}
.cr-1{
  padding:5px;
  padding-top: 2rem;
}
.panel-body:before,
.panel-body:after {
  display: table;
  content: " ";
}
.pl-1,
.px-1 {
  padding-left: 0rem !important;
}
.card-footer:last-child {
  border-radius: 0 0 calc(0.25rem - 0px) calc(0.25rem - 0px);
}
.text-white {
  color: #fff !important;
}
.text-white {
  color: #fff;
}
.text-right {
  text-align: right !important;
}
.font-weight-bold {
  font-weight: 700 !important;
}
.h5,
h5 {
  font-size: 1.25rem;
}
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: inherit;
}
h5 {
  display: block;
  font-size: 0.83em;
  margin-block-start: 1.67em;
  margin-block-end: 1.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.list-group {
  padding-left: 0;
  margin-bottom: 20px;
}
.list-group li {
  list-style: none;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
ul,
ol {
  margin-top: 0;
  margin-bottom: 10px;
}
ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
.panel-info,
.panel-rating,
.panel-more1 {
  float: left;
  margin: 0 10px;
}
.panel-default {
  border-color: #ddd;
}
.panel-body {
  padding: 0px;
}
.panel {
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
  box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
}
.panel-info,
.panel-rating,
.panel-more1 {
  float: left;
  margin: 0 10px;
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

p {
  display: block;
}
.order-by-wrapper {
  float: right;
  padding-right: 50px;
}
.nav-simple,
.nav-aside {
  padding-left: 0;
  margin: 0;
  list-style: none;
  padding-bottom: 0;
}
.list-unstyled {
  margin: 0;
  list-style: none;
}
.module {
  margin: 15px 0;
  padding-left: 80px;
}
.nav {
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}

.nav-simple,
.nav-aside {
  padding-left: 0;
  margin: 0;
  list-style: none;
  padding-bottom: 0;
}

.nav {
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}

ul,
ol {
  margin-top: 0;
  margin-bottom: 10px;
}
ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}
ul,
ol {
  margin-top: 0;
  margin-bottom: 10px;
}
menu,
ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-simple > li,
.nav-aside > li {
  font-size: 12px;
  line-height: 1.16666667em;
  padding: 7px 25px;
  border-bottom: 1px dotted #e9e9e9;
}
.nav > li {
  position: relative;
  display: block;
}
.dataset-list > li,
.dataset-item > li {
  font-size: 12px;
  line-height: 1.16666667em;
  padding: 7px 25px;
  border-bottom: 1px dotted #e9e9e9;
}
.dataset-content {
  margin: 10px 0;
  float: left;
}
.dataset-heading {
  font-family: inherit;
  line-height: 1.1;
  color: inherit;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 700;
  margin-top: 0;
}
.dataset-item:not(:first-child) {
  border-top: 1px dotted #e9e9e9;
}
.dataset-item:not(:first-child) {
  border-top: 1px dotted #e9e9e9;
}
.dataset-item {
  padding: 10px 0;
}
.nav > li {
  position: relative;
  display: block;
}
.dataset-item {
  padding: 10px 0;
}
.module-heading {
  margin: 0;
  padding: 10px 15px;
  font-size: 18px;
  font-weight: 700;
  background-color: #e9e9e9;
}
.list-inline {
  padding-left: 0;
  margin: 0;
  list-style: none;
  margin-left: 5px;
}
</style>
